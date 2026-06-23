'use client';

import { Home, Heart, MessageSquare, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function TenantDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-teal-600">Maskani</h1>
          <button className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome, Tenant!</h2>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button className="px-4 py-2 border-b-2 border-teal-600 text-teal-600 font-semibold flex items-center gap-2">
            <Home size={20} />
            Browse Properties
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <Heart size={20} />
            Saved
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <MessageSquare size={20} />
            Messages
          </button>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <p className="text-gray-500">Property Image {i}</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2-Bedroom Apartment</h3>
                <p className="text-teal-600 font-bold text-lg mb-2">KES 45,000/month</p>
                <p className="text-sm text-gray-600 mb-4">Kilimani, Nairobi</p>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition">
                  Reveal Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
