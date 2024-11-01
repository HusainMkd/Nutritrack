"use client";
import { useContext } from 'react';
import { MealLoggingContext } from '../MealLoggingContext';
import TrackingIntake from '../../../../components/Interactions/TrackingIntake';
import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/ui/button';
import { useSwipeable } from 'react-swipeable';

export default function TrackingIntakePage() {
  const { detectedItems, image } = useContext(MealLoggingContext);
  const router = useRouter();

  const handleBack = () => {
    router.push('/meal-logging/nutritionalBreakdown');
  };

  const handlers = useSwipeable({
    onSwipedRight: () => router.push('/meal-logging/nutritionalBreakdown'),
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
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }} // Set background
      {...handlers}
    >
      <TrackingIntake />
      {/* <div className="mt-4 flex justify-start">
        <Button onClick={handleBack}>Back</Button>
      </div> */}
    </div>
  );
}