"use client";
import React, { createContext, useState, useRef, ReactNode } from 'react';

// Define the structure of detected nutritional items
interface DetectedItems {
  foods: string[];
  totalCalories: number;
  proteins: number;
  carbs: number;
  fats: number;
  // Add more nutritional fields as needed
}

// Define the context properties and their types
interface MealLoggingContextProps {
  image: string | null;
  setImage: (image: string | null) => void;
  detectedItems: DetectedItems | null;
  setDetectedItems: (items: DetectedItems | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  registerStopCamera: (stopCamera: () => void) => void; // Add registerStopCamera
  stopCamera: () => void; // Add stopCamera method
}

// Create the MealLoggingContext with default values
export const MealLoggingContext = createContext<MealLoggingContextProps>({
  image: null,
  setImage: () => {},
  detectedItems: null,
  setDetectedItems: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
  registerStopCamera: () => {}, // Initialize as empty function
  stopCamera: () => {}, // Initialize as empty function
});

// Define the provider component's props
interface MealLoggingProviderProps {
  children: ReactNode;
}

// Implement the MealLoggingProvider to manage and provide context values
export const MealLoggingProvider: React.FC<MealLoggingProviderProps> = ({ children }) => {
  // State to hold the captured image URL or data
  const [image, setImage] = useState<string | null>(null);

  // State to hold detected nutritional items from the image analysis
  const [detectedItems, setDetectedItems] = useState<DetectedItems | null>(null);

  // State to manage the loading status during image submission and analysis
  const [loading, setLoading] = useState<boolean>(false);

  // State to manage any error messages during the process
  const [error, setError] = useState<string | null>(null);

  const stopCameraRef = useRef<() => void>(() => {});

  const registerStopCamera = (stopCamera: () => void) => {
    stopCameraRef.current = stopCamera;
  };

  const stopCamera = () => {
    if (stopCameraRef.current) {
      stopCameraRef.current();
    }
  };

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
        registerStopCamera, // Provide registerStopCamera
        stopCamera, // Provide stopCamera method
      }}
    >
      {children}
    </MealLoggingContext.Provider>
  );
};
