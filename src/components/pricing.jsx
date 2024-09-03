import React from 'react'
import { Check, X } from 'lucide-react'

export function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Basic Web Development',
        'Simple Graphics Design',
        'Social Media Setup',
        'Email Support',
        '5GB Cloud Storage',
      ],
      notIncluded: [
        'Advanced SEO',
        'Mobile App Development',
        'Custom B2B Solutions',
        '24/7 Support',
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      description: 'Ideal for growing businesses with diverse needs',
      features: [
        'Advanced Web Development',
        'Professional Graphics Design',
        'Digital Marketing Campaigns',
        'Mobile App Development',
        'Email and Phone Support',
        '50GB Cloud Storage',
        'Basic SEO Optimization',
      ],
      notIncluded: [
        'Custom B2B Solutions',
        '24/7 Support',
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large-scale operations',
      features: [
        'Custom Web and Mobile Solutions',
        'Advanced Graphics and Branding',
        'Comprehensive Digital Marketing',
        'Custom B2B Solutions',
        'DevOps and Cloud Services',
        'Cybersecurity Solutions',
        '24/7 Priority Support',
        'Unlimited Cloud Storage',
      ],
      notIncluded: []
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your business needs. All plans include our core services and can be customized to fit your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">{tier.name}</h2>
              <p className="text-4xl font-bold mb-4">{tier.price}</p>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center mb-2 text-gray-500">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                {tier.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-300 mb-6">
            We offer tailored packages to meet your specific business needs. Let's discuss how we can help you achieve your goals.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Contact Sales
          </a>
        </div>
      </main>

      <footer className="bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2023 NexusSolutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}