import { useRef, useEffect, useContext } from 'react';
import { MealLoggingContext } from '../app/(dashboard)/meal-logging/MealLoggingContext'; 
interface CameraProps {
  onCapture: (image: string) => void;
  className?: string; // Add className prop
}

const Camera: React.FC<CameraProps> = ({ onCapture, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mealLoggingContext = useContext(MealLoggingContext);

  useEffect(() => {
    startCamera();
    if (mealLoggingContext) {
      mealLoggingContext.registerStopCamera(stopCamera); // Register stopCamera
    }
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL('image/png');
      onCapture(image);
    }
  };

  return (
    <div className={`relative camera-container ${className}`}> {/* Apply Tailwind classes */}
      <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover rounded-lg" />
      {/* Information Overlay */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded text-center">
        <p>Align your meal within the frame and capture.</p>
      </div> */}
      <div className="absolute bottom-10 flex space-x-4 justify-center w-full">
        <button onClick={captureImage} className="bg-blue-500 text-white p-4 rounded-full shadow mx-auto ">
          📷 Capture
        </button>
      </div>
    </div>
  )
}

export default Camera;
