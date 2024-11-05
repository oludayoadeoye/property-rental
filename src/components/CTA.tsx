import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-indigo-700" id="landlords">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Are you a property owner?</span>
          <span className="block">Start earning with your property today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          List your property on our platform and reach thousands of potential tenants. We make property management simple and profitable.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          List Your Property
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}