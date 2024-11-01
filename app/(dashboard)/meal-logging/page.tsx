"use client";
import { useContext } from 'react';
import { MealLoggingContext } from './MealLoggingContext';
import Camera from '../../../components/Camera';
import { submitMealImage } from '../../../lib/api';
import { useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';

export default function MealLoggingPage() {
  const {
    setImage,
    setDetectedItems,
    setLoading,
    setError,
    image,
  } = useContext(MealLoggingContext);
  
  const router = useRouter();

  const handleImageCapture = async (capturedImage: string) => {
    setImage(capturedImage);
    setLoading(true);
    setError(null); // Reset error state
    try {
      const result = await submitMealImage(capturedImage);
      setDetectedItems(result.detectedItems);
      router.push('/meal-logging/results'); // Navigate to results screen
    } catch (error) {
      console.error(error);
      setError('Failed to analyze the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => router.push('/meal-logging/results'),
    onSwipedRight: () => router.push('/'), // 
    trackMouse: true,
  });

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }} // Set background
      {...handlers} // Attach swipe handlers
    >
      <div className="relative w-full h-full">
        <Camera onCapture={handleImageCapture} className="w-full h-full" />
        {/* Information Overlay */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 p-2 rounded text-center">
          <p>Align your meal within the frame and capture.</p>
        </div>
      </div>
    </div>
  );
}
