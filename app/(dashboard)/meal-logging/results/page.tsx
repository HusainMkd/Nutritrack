"use client";
import { useContext } from 'react';
import { MealLoggingContext } from '../MealLoggingContext';
import { Card } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';
import { useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';

export default function ResultsPage() {
  const { detectedItems } = useContext(MealLoggingContext);
  const router = useRouter();

  const handleConfirm = () => {
    router.push('/meal-logging/nutritionalBreakdown');
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => router.push('/meal-logging/nutritionalBreakdown'),
    onSwipedRight: () => router.push('/meal-logging'),
    trackMouse: true,
  });

  if (!detectedItems) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>No detected items available.</p>
      </div>
    );
  }

  return (
    <Card className="mt-4 w-full max-w-md" {...handlers}>
      <h2 className="text-xl font-bold text-gray-800">Detected Items</h2>
      <ul>
        {detectedItems.foods.map((food: string, index: number) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <Button className="mt-2" onClick={handleConfirm}>Confirm</Button>
    </Card>
  );
}
