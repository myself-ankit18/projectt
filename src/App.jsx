import { LandingPage } from "./components/home";
import { AboutPage } from "./components/about";
import { Moon, Sun, Code, Paintbrush, BarChart, Briefcase } from "lucide-react";

import { useEffect, useState } from "react";
import { ServicesPage } from "./components/service";
import { PricingPage } from "./components/pricing";
import { ContactPage } from "./components/contact";

export default function App() {

  // const [darkMode, setDarkMode] = useState(true);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);
  const [about, setAbout] = useState(false);
  const [home, setHome] = useState(true);
  const [service, setService] = useState(false);
  const [contact, setContact] = useState(false);
  const [pricing, setPricing] = useState(false);

  const handleSetHome = () =>{
    setHome(true);
    setAbout(false);
    setService(false);
    setPricing(false);
    setContact(false);
  }
  const handleSetAbout = () =>{
    setHome(false);
    setAbout(true);
    setService(false);
    setPricing(false);
    setContact(false);
  }
  const handleSetService = () =>{
    setHome(false);
    setAbout(false);
    setService(true);
    setPricing(false);
    setContact(false);
  }
  const handleSetPricing = () =>{
    setHome(false);
    setAbout(false);
    setService(false);
    setPricing(true);
    setContact(false);
  }

  const handleSetContact = () =>{
    setHome(false);
    setAbout(false);
    setService(false);
    setPricing(false);
    setContact(true);
  }


  return (
    <>
      <nav className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
                NexusSolutions
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex space-x-4 items-center">
                <button
                  onClick={handleSetHome}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"
                >
                  Home
                </button>
                <button
                  onClick={handleSetAbout}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"
                >
                  About Us
                </button>
                <button
                  onClick={handleSetService}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"
                >
                  Service
                </button>
                <button
                  onClick={handleSetPricing}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"
                >
                  Pricing
                </button>
                <button
                  onClick={handleSetContact}
                  
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"
                >
                  Contact Us
                </button>
                {/* <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {home && <LandingPage />}
      {about && <AboutPage />}
      {service && <ServicesPage/>}
      {pricing && <PricingPage/>}
      {contact && <ContactPage/>}

    </>
  );
}
