import React from 'react';
import { Search, Map, Home, Clock, Shield, Users } from 'lucide-react';

const features = [
  {
    name: 'Advanced Search',
    description: 'Find properties with our powerful search filters including price, location, and amenities.',
    icon: Search,
  },
  {
    name: 'Interactive Map',
    description: 'Explore properties in your desired location with our interactive map view.',
    icon: Map,
  },
  {
    name: 'Virtual Tours',
    description: 'Take virtual tours of properties from the comfort of your home.',
    icon: Home,
  },
  {
    name: 'Instant Booking',
    description: 'Book properties instantly with our streamlined booking process.',
    icon: Clock,
  },
  {
    name: 'Secure Payments',
    description: 'Feel confident with our secure payment system and fraud protection.',
    icon: Shield,
  },
  {
    name: 'Verified Listings',
    description: 'All properties and landlords are verified for your peace of mind.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to find your next home
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools you need to make renting simple, secure, and enjoyable.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}