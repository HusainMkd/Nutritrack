import React from 'react';

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, max, className }) => {
  const percentage = (value / max) * 100;
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <div
        className="bg-blue-600 h-full rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default Progress;
