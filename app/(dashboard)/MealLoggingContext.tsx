import React, { createContext, useState, useRef } from 'react';

interface MealLoggingContextType {
  setImage: (image: string) => void;
  setDetectedItems: (items: any[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  image: string;
  registerStopCamera: (stopCamera: () => void) => void; // Add registerStopCamera
  stopCamera: () => void; // Add stopCamera method
}

export const MealLoggingContext = createContext<MealLoggingContextType | undefined>(undefined);

export const MealLoggingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [image, setImage] = useState<string>('');
  const [detectedItems, setDetectedItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
    <MealLoggingContext.Provider value={{
      setImage,
      setDetectedItems,
      setLoading,
      setError,
      image,
      registerStopCamera, // Provide registerStopCamera
      stopCamera, // Provide stopCamera method
    }}>
      {children}
    </MealLoggingContext.Provider>
  );
};
