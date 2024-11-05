import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">RentalHub</span>
            </div>
            <p className="mt-4 text-gray-400">
              Making property rental simple, secure, and enjoyable for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="text-base text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-base text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#help" className="text-base text-gray-300 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#terms" className="text-base text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-base text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <form className="mt-4 flex">
                <input
                  type="email"
                  className="form-input w-full px-4 py-2 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} RentalHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}