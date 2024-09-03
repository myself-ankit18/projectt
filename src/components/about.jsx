import React, { useState } from "react";
import { Moon, Sun, Users, Target, Zap, Award } from "lucide-react";

export function AboutPage() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold text-center mb-8">
            About NexusSolutions
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2020, NexusSolutions emerged from a vision to bridge
              the gap between cutting-edge technology and business needs. Our
              founders, seasoned tech entrepreneurs, recognized the need for a
              holistic approach to digital solutions that could adapt to the
              rapidly evolving digital landscape.
            </p>
            <p className="text-lg">
              Today, we're proud to be at the forefront of digital innovation,
              helping businesses of all sizes harness the power of technology to
              achieve their goals and surpass their competitors.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              At NexusSolutions, our mission is to empower businesses with
              innovative, scalable, and user-centric digital solutions. We
              strive to be the catalyst that transforms ideas into impactful
              digital realities, driving growth and success for our clients in
              the digital age.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Innovation",
                  icon: Zap,
                  description: `We constantly push the boundaries of what's possible in the digital realm.`,
                },
                {
                  title: "Collaboration",
                  icon: Users,
                  description: `We believe in the power of teamwork and partnership with our clients.`,
                },
                {
                  title: "Excellence",
                  icon: Award,
                  description: `We are committed to delivering the highest quality in everything we do.`,
                },
                {
                  title: "Client-Centric",
                  icon: Target,
                  description: `Our clients' success is at the heart of our every decision and action.`,
                },
              ].map((value) => (
                <div key={value.title} className="flex items-start space-x-3">
                  <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jane Doe",
                  role: "CEO & Founder",
                  image: "https://via.placeholder.com/200",
                },
                {
                  name: "John Smith",
                  role: "CTO",
                  image: "https://via.placeholder.com/200",
                },
                {
                  name: "Emily Johnson",
                  role: "Head of Design",
                  image: "https://via.placeholder.com/200",
                },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
            <p className="text-lg mb-6">
              We're always looking for talented individuals who share our
              passion for innovation and excellence. If you're ready to make a
              difference in the digital world, we'd love to hear from you.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 dark:bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
            >
              View Career Opportunities
            </a>
          </section>
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
  );
}
