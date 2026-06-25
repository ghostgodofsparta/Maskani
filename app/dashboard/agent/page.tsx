'use client';

import { Plus, Bell, Settings, LogOut, BarChart3, Users } from 'lucide-react';
import Link from 'next/link';

export default function AgentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/maskani-logo.svg" alt="Maskani" className="h-6 w-6" />
            <h1 className="text-2xl font-bold text-maskani-navy">Maskani</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Bell size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <Settings size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-maskani-navy">Welcome, Agent!</h2>
          <button className="bg-gradient-maskani-primary hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition">
            <Plus size={20} />
            List Property
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Inquiries</p>
                <p className="text-3xl font-bold text-maskani-navy mt-2">24</p>
              </div>
              <Bell size={32} className="text-maskani-green opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">This Month Revenue</p>
                <p className="text-3xl font-bold text-maskani-navy mt-2">KES 12,500</p>
              </div>
              <BarChart3 size={32} className="text-maskani-teal opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Response Rate</p>
                <p className="text-3xl font-bold text-maskani-navy mt-2">85%</p>
              </div>
              <Users size={32} className="text-maskani-green opacity-20" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button className="px-4 py-2 border-b-2 border-maskani-teal text-maskani-teal font-semibold">
            Properties
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Inquiries
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Analytics
          </button>
        </div>

        {/* Properties List */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-maskani-navy">2-Bedroom Apartment</h3>
                <p className="text-sm text-gray-600">Kilimani, Nairobi</p>
                <p className="text-maskani-teal font-semibold mt-1">KES 45,000/month</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 text-sm">Inquiries Today</p>
                <p className="text-3xl font-bold text-maskani-navy">8</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
