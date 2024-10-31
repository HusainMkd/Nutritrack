import { Button } from '@/components/ui/button';
import { Camera, TrendingUp, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                NutriTrack
                <span className="block text-green-500">
                  Rethinking Health Through Innovative Dieting
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Capture, analyze, and optimize your dietary habits with NutriTrack. Harness the power
                of AI to achieve your health goals.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto lg:mx-0">
                <Button className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-full text-xl px-8 py-4">
                  <a href="#">Get Started</a>
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:col-span-6 flex items-center justify-center">
              {/* Replace with a responsive image or component */}
            </div>
          </div>
        </div>
      </section>

      {/* User Interaction Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Interaction 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <Camera className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Log Your Meal</h3>
                <p className="mt-2 text-base text-gray-500">
                  Snap a photo of your meal to instantly log nutritional information.
                </p>
                <Button className="mt-4">
                  <a href="/meal-logging">Log Meal</a>
                </Button>
              </div>
            </div>
            {/* Interaction 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Nutritional Breakdown</h3>
                <p className="mt-2 text-base text-gray-500">
                  View detailed insights into your dietary intake and track your progress.
                </p>
                <Button className="mt-4">
                  <a href="/meal-logging/nutritionalBreakdown">View Insights</a>
                </Button>
              </div>
            </div>
            {/* Interaction 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <Star className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Get Recommendations</h3>
                <p className="mt-2 text-base text-gray-500">
                  Receive personalized meal suggestions to meet your health goals.
                </p>
                <Button className="mt-4">
                  <a href="/recommendations">Get Recommendations</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to Transform Your Health?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                NutriTrack provides everything you need to take control of your diet and achieve your
                health goals. Start your journey today.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Button className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-full text-xl px-8 py-4">
                <a href="#">Sign Up Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
