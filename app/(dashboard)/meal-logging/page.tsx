import { useState } from 'react';
import Camera from '../../../components/Camera';
import { submitMealImage } from '../../../lib/api';
import { Card } from '../../../components/ui/card';

export default function MealLoggingPage() {
  const [image, setImage] = useState<string | null>(null);
  const [detectedItems, setDetectedItems] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added error state

  const handleImageCapture = async (capturedImage: string) => {
    setImage(capturedImage);
    setLoading(true);
    setError(null); // Reset error state
    try {
      const result = await submitMealImage(capturedImage);
      setDetectedItems(result.detectedItems);
    } catch (error) {
      console.error(error);
      setError('Failed to analyze the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Camera onCapture={handleImageCapture} />

      {loading && <p>Analyzing image...</p>}

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      {detectedItems && (
        <Card className="mt-4 w-full max-w-md">
          <h2 className="text-xl font-bold">Detected Items</h2>
          <ul>
            {detectedItems.foods.map((food: string, index: number) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
          {/* Add options to edit or confirm items */}
          <button className="mt-2 bg-green-500 text-white p-2 rounded">
            Confirm
          </button>
        </Card>
      )}
    </div>
  );
}
