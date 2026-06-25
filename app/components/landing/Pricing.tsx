'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

type Tab = 'tenant' | 'agent';

const tenantFeatures = [
  'Browse residential & commercial listings free',
  'Rent or sale — all in one place',
  'KES 150 one-time per contact reveal',
  'Full refund if no response in 72 hours',
  'Verified agents — saves you time',
];

const agentFeatures = [
  'Showcase residential & commercial properties',
  'List for rent or sale on one platform',
  'KES 2,500/month during beta launch',
  'Founding agent pricing available',
  'Verified, serious inquiries only',
];

export default function Pricing() {
  const [tab, setTab] = useState<Tab>('tenant');
  const [rent, setRent] = useState(25000);
  const { ref, visible } = useScrollReveal<HTMLElement>();

  const maskaniCost = 2500;
  const roiPercent = Math.round((maskaniCost / rent) * 100);

  return (
    <section id="pricing" ref={ref} className={`py-16 px-4 sm:px-6 lg:px-8 bg-white reveal ${visible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-maskani-navy mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600 text-lg">Quality service with clear pricing — listings and verified connections in one platform</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-maskani-off-white p-1 border border-gray-100">
            <button
              type="button"
              onClick={() => setTab('tenant')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                tab === 'tenant' ? 'bg-white shadow text-maskani-navy' : 'text-gray-500'
              }`}
            >
              For Tenants & Buyers
            </button>
            <button
              type="button"
              onClick={() => setTab('agent')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                tab === 'agent' ? 'bg-white shadow text-maskani-navy' : 'text-gray-500'
              }`}
            >
              For Agents
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-gradient-maskani-primary rounded-2xl p-8 text-white">
            {tab === 'tenant' ? (
              <>
                <p className="text-maskani-teal-light font-semibold mb-2">Tenant / Buyer</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold">KES 150</span>
                  <span className="text-white/70 mb-2">per contact reveal</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tenantFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={18} className="shrink-0 mt-0.5" />
                      <span className="text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth/signup?role=tenant"
                  className="block text-center py-3 bg-white text-maskani-navy font-bold rounded-full hover:bg-gray-100 transition"
                >
                  Join as Tenant
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-maskani-teal-light font-semibold">Agent</p>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-maskani-orange/30 text-xs font-bold">
                    <Sparkles size={12} /> Beta
                  </span>
                </div>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold">KES 2,500</span>
                  <span className="text-white/70 mb-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {agentFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={18} className="shrink-0 mt-0.5" />
                      <span className="text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth/signup?role=agent"
                  className="block text-center py-3 bg-white text-maskani-navy font-bold rounded-full hover:bg-gray-100 transition"
                >
                  Become a Founding Agent
                </Link>
              </>
            )}
          </div>

          {tab === 'agent' ? (
            <div className="bg-maskani-off-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-maskani-navy mb-2">Agent ROI calculator</h3>
              <p className="text-gray-600 mb-6 text-sm">
                See how affordable Maskani is compared to your monthly rental or sale income per property.
              </p>
              <label className="block text-sm font-semibold text-maskani-navy mb-2">
                Monthly rent or value per property (KES)
              </label>
              <input
                type="range"
                min={10000}
                max={150000}
                step={1000}
                value={rent}
                onChange={(e) => setRent(Number(e.target.value))}
                className="w-full accent-maskani-teal mb-2"
              />
              <p className="text-2xl font-bold text-maskani-teal mb-4">KES {rent.toLocaleString()}</p>
              <div className="bg-white rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Maskani monthly cost</span>
                  <span className="font-bold">KES {maskaniCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost as % of one month&apos;s income</span>
                  <span className="font-bold text-maskani-green">{roiPercent}%</span>
                </div>
                <p className="text-gray-500 pt-2 border-t border-gray-100">
                  One verified connection covers {Math.round(rent / maskaniCost)}× your Maskani subscription.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-maskani-off-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-maskani-navy mb-4">Why pay KES 150?</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-maskani-navy mb-1">Saves time</p>
                  <p className="text-sm text-gray-600">
                    Skip the endless scrolling and ghost listings. Get straight to verified agents who respond.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-maskani-navy mb-1">72-hour refund guarantee</p>
                  <p className="text-sm text-gray-600">
                    No response from the agent? You get every shilling back. No questions asked.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-maskani-navy mb-1">Verified contacts only</p>
                  <p className="text-sm text-gray-600">
                    Every agent is phone-verified before their listings go live.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
