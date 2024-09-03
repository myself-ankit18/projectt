import React, { useState } from "react";
import {
  Moon,
  Sun,
  Code,
  Paintbrush,
  BarChart,
  Briefcase,
  Smartphone,
  Globe,
  Server,
  ShieldCheck,
} from "lucide-react";
import { ContactPage } from "./contact";

export function ServicesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [service, setService] = useState(true);
  const [contact, setContact] = useState(false);

  //   const toggleDarkMode = () => {
  //     setDarkMode(!darkMode)
  //   }
  const handleServiceContact = () => {
    setContact(true);
    setService(false);
  };
  const services = [
    {
      title: "Web Development",
      icon: Code,
      description:
        "We create responsive, user-friendly websites and web applications tailored to your business needs.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development and Integration",
      ],
    },
    {
      title: "Graphics Designing",
      icon: Paintbrush,
      description:
        "Our design team crafts visually stunning graphics that elevate your brand and captivate your audience.",
      features: [
        "Logo Design",
        "Brand Identity",
        "UI/UX Design",
        "Print and Digital Marketing Materials",
      ],
    },
    {
      title: "Digital Marketing",
      icon: BarChart,
      description:
        "We boost your online presence and drive growth through strategic digital marketing campaigns.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Pay-Per-Click Advertising",
        "Email Marketing Campaigns",
      ],
    },
    {
      title: "B2B Solutions",
      icon: Briefcase,
      description:
        "We provide tailored solutions to streamline your business operations and enhance productivity.",
      features: [
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Supply Chain Management",
        "Business Intelligence Tools",
      ],
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description:
        "We develop innovative mobile applications for iOS and Android platforms to extend your reach.",
      features: [
        "Native App Development",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Mobile App Maintenance and Support",
      ],
    },
    {
      title: "Cloud Solutions",
      icon: Globe,
      description:
        "We offer cloud-based solutions to enhance your business scalability and flexibility.",
      features: [
        "Cloud Migration Services",
        "Cloud-Based Application Development",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
      ],
    },
    {
      title: "DevOps Services",
      icon: Server,
      description:
        "We implement DevOps practices to improve your software development and deployment processes.",
      features: [
        "Continuous Integration/Continuous Deployment (CI/CD)",
        "Infrastructure Automation",
        "Containerization and Orchestration",
        "Monitoring and Logging Solutions",
      ],
    },
    {
      title: "Cybersecurity",
      icon: ShieldCheck,
      description:
        "We provide comprehensive cybersecurity solutions to protect your digital assets and data.",
      features: [
        "Security Audits and Assessments",
        "Penetration Testing",
        "Incident Response Planning",
        "Security Awareness Training",
      ],
    },
  ];

  return (
    <section>
      {service && (
        <div
          className={`min-h-screen ${
            darkMode
              ? "dark bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900"
          }`}
        >
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <h1 className="text-4xl font-bold text-center mb-8">
                Our Services
              </h1>
              <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                At NexusSolutions, we offer a comprehensive suite of digital
                services to help your business thrive in the digital age. From
                web development to cybersecurity, we've got you covered.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg mb-6">
                  Let's discuss how our services can help you achieve your
                  digital goals.
                </p>
                <button
                  onClick={handleServiceContact}
                  className="inline-block bg-blue-600 dark:bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </main>

          <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 dark:text-gray-400">
                © 2023 NexusSolutions. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      )}
      {contact && <ContactPage />}
    </section>
  );
}
