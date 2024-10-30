import { useRef } from 'react';

interface CameraProps {
  onCapture: (image: string) => void;
}

const Camera: React.FC<CameraProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
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
    <div>
      {/* ...existing code... */}
      <video ref={videoRef} autoPlay className="w-full max-w-md" />
      <button onClick={startCamera} className="mt-2 bg-green-500 text-white p-2 rounded">
        Start Camera
      </button>
      <button onClick={captureImage} className="mt-2 bg-blue-500 text-white p-2 rounded">
        Capture Image
      </button>
    </div>
  )
}

export default Camera;
