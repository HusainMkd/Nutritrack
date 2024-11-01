import React from 'react';
import { Card } from '../ui/card';
import Progress from '../ui/progress'; // Import Shadcn Progress component

const TrackingIntake: React.FC = () => {
  return (
    <Card className="mt-4 w-full max-w-md bg-white shadow-lg bg-opacity-50 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tracking Daily Intake   📊 💹 </h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-700">Calories Consumed: <span className="font-semibold">1500 / 2000 kcal 📏</span></p>
          <Progress value={1500} max={2000} className="h-2 bg-gray-200 rounded-full mt-1" />
        </div>
        <div>
          <p className="text-gray-700">Proteins: <span className="font-semibold">75g / 100g 🥩</span></p>
          <Progress value={75} max={100} className="h-2 bg-gray-200 rounded-full mt-1" />
        </div>
        <div>
          <p className="text-gray-700">Carbohydrates: <span className="font-semibold">200g / 250g 🍔</span></p>
          <Progress value={200} max={250} className="h-2 bg-gray-200 rounded-full mt-1" />
        </div>
        <div>
          <p className="text-gray-700">Fats: <span className="font-semibold">50g / 70g 🧀</span></p>
          <Progress value={50} max={70} className="h-2 bg-gray-200 rounded-full mt-1" />
        </div>
        {/* Add more tracking details and visual representations */}
      </div>
    </Card>
  );
};

export default TrackingIntake;
