"use client";
import React, { ReactNode } from 'react';
import { MealLoggingProvider } from './MealLoggingContext';
import { useRouter, usePathname } from 'next/navigation'; // Import usePathname
import { useSwipeable } from 'react-swipeable';
import { Button } from '../../../components/ui/button';

export default function MealLoggingLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname

  const handleArrowNavigation = (direction: 'left' | 'right') => {
    // Define routing logic based on direction and current pathname
    switch (pathname) {
        case '/meal-logging':
        if (direction === 'left') router.push('/meal-logging/results');
        else if (direction === 'right') router.push('/');
        break;
      case '/meal-logging/results':
        if (direction === 'left') router.push('/meal-logging/nutritionalBreakdown');
        else if (direction === 'right') router.push('/meal-logging');
        break;
      case '/meal-logging/nutritionalBreakdown':
        if (direction === 'left') router.push('/meal-logging/trackingIntake');
        else if (direction === 'right') router.push('/meal-logging/results');
        break;
      case '/meal-logging/trackingIntake':
        if (direction === 'right') router.push('/meal-logging/nutritionalBreakdown');
        break;
      default:
        break;
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleArrowNavigation('left'),
    onSwipedRight: () => handleArrowNavigation('right'),
    trackMouse: true,
  });

  return (
    <MealLoggingProvider>
      <div {...handlers} className="fixed inset-0 flex flex-col items-center justify-center bg-white">
        {children}
        {/* Arrow Buttons for PC Navigation */}
        <div className="absolute inset-y-1/2 left-4 flex flex-col space-y-4">
          <Button onClick={() => handleArrowNavigation('right')} aria-label="Previous">◀️</Button>
        </div>
        <div className="absolute inset-y-1/2 right-4 flex flex-col space-y-4">
          <Button onClick={() => handleArrowNavigation('left')} aria-label="Next">▶️</Button>
        </div>
      </div>
    </MealLoggingProvider>
  );
}
