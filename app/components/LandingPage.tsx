'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, CheckCircle2, Users, Trophy, MessageCircle } from 'lucide-react';

export default function LandingPage() {
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (propertyType && location) {
      // Navigate to search results
      window.location.href = `/search?type=${propertyType}&location=${location}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-teal-600">Maskani</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-teal-600 transition">
                Home
              </Link>
              <Link href="#how" className="text-gray-700 hover:text-teal-600 transition">
                How It Works
              </Link>
              <Link href="#why" className="text-gray-700 hover:text-teal-600 transition">
                Why Maskani
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-teal-600 transition">
                Testimonials
              </Link>
              <Link href="#faqs" className="text-gray-700 hover:text-teal-600 transition">
                FAQs
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-teal-600 transition">
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center space-x-3">
              <Link
                href="/auth/signup"
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Explore Verified Listings &{' '}
                <span className="text-orange-500">Secure Your Ideal Property</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Explore verified listings, compare prices, and connect with trusted landlords or agents, all in one
                platform built for simplicity and trust.
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Property Type */}
                  <div>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-gray-700"
                      placeholder="Property Type"
                    >
                      <option value="">Apartment | Duplex | Land | Shared Room</option>
                      <option value="apartment">Apartment</option>
                      <option value="duplex">Duplex</option>
                      <option value="land">Land</option>
                      <option value="shared">Shared Room</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter a city, area, or school"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-gray-700"
                    />
                  </div>

                  {/* Search Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg py-3 flex items-center justify-center gap-2 transition"
                    >
                      <Search size={20} />
                      <span className="hidden md:inline">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Image - Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl h-96 md:h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-lg font-medium">Property Image Carousel</p>
                  <p className="text-sm">(Replace with actual property images)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands Across East Africa
            </h3>
            <p className="text-gray-600 text-lg">
              Real people. Real homes. Real numbers that show how much users trust our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Stat 1 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition">
              <CheckCircle2 size={48} className="text-teal-600 mx-auto mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">20K+</p>
              <p className="text-gray-600 font-medium">Verified Listings</p>
              <p className="text-sm text-gray-500 mt-2">
                Every property is screened for authenticity before going live to build instant trust.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition">
              <Users size={48} className="text-teal-600 mx-auto mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">1,200+</p>
              <p className="text-gray-600 font-medium">Active Listers</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition">
              <Trophy size={48} className="text-teal-600 mx-auto mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">4+</p>
              <p className="text-gray-600 font-medium">Years of Service</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition">
              <MessageCircle size={48} className="text-teal-600 mx-auto mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">4.9★</p>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-teal-600 rounded-2xl overflow-hidden h-80 flex items-center justify-center text-white text-center">
              <div>
                <p className="text-lg font-medium">Happy Users Share Their Stories</p>
                <p className="text-sm mt-2 opacity-90">(User testimonial image)</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg italic">
                "Finding my dream apartment was so easy with Maskani. The landlords are verified, the process is
                transparent, and I knew exactly what I was getting. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 font-bold">
                  JK
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jane Kipchoge</p>
                  <p className="text-sm text-gray-600">Rented a 2-bedroom in Kilimani</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Property Journey in 3 Simple Steps
            </h3>
            <p className="text-gray-600 text-lg">Buy, rent, or sell - we've made it simple for you to take action and reach real results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl font-bold text-orange-500 mb-4">1</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Sign Up</h4>
              <p className="text-gray-600">Create your Maskani account as either a tenant or landlord in seconds.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl font-bold text-orange-500 mb-4">2</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Search or List</h4>
              <p className="text-gray-600">Browse verified properties or list your own with detailed information and photos.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl font-bold text-orange-500 mb-4">3</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Connect</h4>
              <p className="text-gray-600">Get in touch with verified landlords or tenants safely and securely on our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Perfect Property?</h3>
          <p className="text-teal-100 text-lg mb-8">Join thousands of satisfied users on Maskani today</p>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">Maskani</h4>
            <p className="text-sm">Connecting landlords and tenants across East Africa</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  For Tenants
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  For Landlords
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 Maskani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
