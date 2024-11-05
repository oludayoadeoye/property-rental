import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    description: 'Perfect for getting started',
    features: [
      'Up to 10 property listings',
      'Basic analytics',
      'Email support',
      'Property image gallery',
      'Standard listing visibility'
    ],
    cta: 'Start Basic',
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Best for growing businesses',
    features: [
      'Up to 50 property listings',
      'Advanced analytics',
      'Priority email support',
      'Virtual tours',
      'Featured listings',
      'Custom branding'
    ],
    cta: 'Start Pro',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited property listings',
      'Custom analytics',
      '24/7 phone support',
      'API access',
      'White-label solution',
      'Dedicated account manager'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-white py-12" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.highlighted
                  ? 'border-2 border-indigo-600 relative'
                  : 'border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <button
                  className={`mt-8 block w-full rounded-md px-4 py-2 text-sm font-semibold text-center ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}