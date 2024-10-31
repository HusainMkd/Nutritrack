"use client";
import React, { createContext, useState, ReactNode } from 'react';

interface DetectedItems {
  foods: string[];
  totalCalories: number;
  proteins: number;
  carbs: number;
  fats: number;
  // Add more nutritional fields as needed
}

interface MealLoggingContextProps {
  image: string | null;
  setImage: (image: string | null) => void;
  detectedItems: DetectedItems | null;
  setDetectedItems: (items: DetectedItems | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const MealLoggingContext = createContext<MealLoggingContextProps>({
  image: null,
  setImage: () => {},
  detectedItems: null,
  setDetectedItems: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
});

export const MealLoggingProvider = ({ children }: { children: ReactNode }) => {
  const [image, setImage] = useState<string | null>(null);
  const [detectedItems, setDetectedItems] = useState<DetectedItems | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <MealLoggingContext.Provider
      value={{
        image,
        setImage,
        detectedItems,
        setDetectedItems,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </MealLoggingContext.Provider>
  );
};
