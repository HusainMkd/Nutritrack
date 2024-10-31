"use client";
import { useContext } from 'react';
import { MealLoggingContext } from '../MealLoggingContext';
import NutritionalBreakdown from '../../../../components/Interactions/NutritionalBreakdown';
import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/ui/button';
import { useSwipeable } from 'react-swipeable';

export default function NutritionalBreakdownPage() {
  const { detectedItems } = useContext(MealLoggingContext);
  const router = useRouter();

  const handleNext = () => {
    router.push('/meal-logging/trackingIntake');
  };

  const handleBack = () => {
    router.push('/meal-logging/results');
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => router.push('/meal-logging/trackingIntake'),
    onSwipedRight: () => router.push('/meal-logging/results'),
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
    <div {...handlers}>
      <NutritionalBreakdown detectedItems={detectedItems} />
      {/* <div className="mt-4 flex justify-between">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div> */}
    </div>
  );
}
