import { useState } from "react";
import { Moon, Sun, Code, Paintbrush, BarChart, Briefcase } from "lucide-react";
import { AboutPage } from "./about";

export function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <section>
      <div
        className={`min-h-screen ${
          darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <h1 className="text-4xl font-bold text-center mb-8">
                Welcome to NexusSolutions
              </h1>
              <p className="text-xl text-center mb-12">
                Your One-Stop Solution for Digital Excellence
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Web Development",
                    icon: Code,
                    description: "Cutting-edge websites and web applications",
                  },
                  {
                    title: "Graphics Designing",
                    icon: Paintbrush,
                    description: "Eye-catching visuals and branding",
                  },
                  {
                    title: "Digital Marketing",
                    icon: BarChart,
                    description: "Boost your online presence and reach",
                  },
                  {
                    title: "B2B Solutions",
                    icon: Briefcase,
                    description: "Streamline your business operations",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <a
                  href="#get-started"
                  className="inline-block bg-blue-600 dark:bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 shadow-md mt-12 mb-0">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © 2023 NexusSolutions. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
