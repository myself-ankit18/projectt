import { LandingPage } from "./components/home";
import { AboutPage } from "./components/about";
import { Moon, Sun, Code, Paintbrush, BarChart, Briefcase } from "lucide-react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuBar = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetHome = () =>{
    setHome(true);
    setAbout(false);
    setService(false);
    setPricing(false);
    setContact(false);
    closeMenu();
  }
  const handleSetAbout = () =>{
    setHome(false);
    setAbout(true);
    setService(false);
    setPricing(false);
    setContact(false);
    closeMenu();

  }
  const handleSetService = () =>{
    setHome(false);
    setAbout(false);
    setService(true);
    setPricing(false);
    setContact(false);
    closeMenu();

  }
  const handleSetPricing = () =>{
    setHome(false);
    setAbout(false);
    setService(false);
    setPricing(true);
    setContact(false);
    closeMenu();

  }

  const handleSetContact = () =>{
    setHome(false);
    setAbout(false);
    setService(false);
    setPricing(false);
    setContact(true);
    closeMenu();
    
  }

  

  return (
    <section >
      <div className={menuOpen ? "blur-[5px]" : ""}>
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
          </div>
        </div>
        <CiMenuBurger onClick={handleMenuBar} className="text-white md:hidden" />
      </div>
    </div>
  </nav>

  {home && <LandingPage />}
  {about && <AboutPage />}
  {service && <ServicesPage />}
  {pricing && <PricingPage />}
  {contact && <ContactPage />}
  </div>

  {/* Menu Overlay */}
  {menuOpen && (
    <div className="fixed  blur-0 inset-0 z-50 transparent  flex justify-center items-center">
      <div className="text-white p-6 rounded-lg">
      <button
          onClick={closeMenu}
          className="absolute top-3 right-3 text-white text-2xl"
        >
          <RxCross2 />
        </button>
        <button onClick={handleSetHome} className="block mb-4 w-lvw font-bold text-2xl  text-white">Home</button>
        <button onClick={handleSetAbout} className="block mb-4  w-lvw font-bold text-2xl  text-white">About Us</button>
        <button onClick={handleSetService} className="block mb-4  w-lvw font-bold text-2xl  text-white">Service</button>
        <button onClick={handleSetPricing} className="block mb-4  w-lvw font-bold text-2xl  text-white">Pricing</button>
        <button onClick={handleSetContact} className="block mb-4  w-lvw font-bold text-2xl  text-white">Contact Us</button>
      </div>
    </div>
  )}
</section>

  );
} 
