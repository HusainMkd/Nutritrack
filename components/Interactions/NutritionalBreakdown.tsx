import React from 'react';
import { Card } from '../ui/card';
import Progress  from '../ui/progress'; // Import Shadcn Progress component

interface NutritionalBreakdownProps {
  detectedItems: any;
}

const NutritionalBreakdown: React.FC<NutritionalBreakdownProps> = ({ detectedItems }) => {
  return (
    <Card className="mt-4 w-full max-w-md bg-white bg-opacity-50 shadow-lg p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Nutritional Breakdown 🥗</h2>
      <div className="space-y-2">
        <div>
          <p className="text-gray-700">Total Calories: <span className="font-semibold">{detectedItems.totalCalories} kcal 📏</span></p>
          <Progress value={detectedItems.totalCalories} max={2000} className="h-2 bg-gray-200 rounded-full mt-1" />
        </div>
        <div>
          <p className="text-gray-700">Proteins: <span className="font-semibold">{detectedItems.proteins}g 🥩</span></p>
          <Progress value={detectedItems.proteins} max={100} className="h-2 bg-gray-200 rounded-full mt-1" />
        </div>
        <div>
          <p className="text-gray-700">Carbohydrates: <span className="font-semibold">{detectedItems.carbs}g 🍔</span></p>
          <Progress value={detectedItems.carbs} max={250} className="h-2 bg-gray-200 rounded-full mt-1" />
        </div>
        <div>
          <p className="text-gray-700">Fats: <span className="font-semibold">{detectedItems.fats}g 🧀</span></p>
          <Progress value={detectedItems.fats} max={70} className="h-2 bg-gray-200 rounded-full mt-1" />
        </div>
        {/* Add more detailed nutritional information as needed */}
      </div>
    </Card>
  );
};

export default NutritionalBreakdown;
