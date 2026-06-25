'use client';

import { Check, Building2, Shield, Clock, Home, Briefcase } from 'lucide-react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

const guarantees = [
  {
    icon: Building2,
    title: 'Listings + verified connections',
    desc: 'Browse residential and commercial properties for rent or sale — and know every inquiry leads to a real, tracked connection.',
  },
  {
    icon: Shield,
    title: 'Verified agents & properties',
    desc: 'Every agent and listing is screened before going live, so you spend time on real opportunities, not ghost posts.',
  },
  {
    icon: Clock,
    title: 'Saves time',
    desc: 'No endless back-and-forth in groups. Serious tenants pay to connect; agents get qualified inquiries, not spam.',
  },
  {
    icon: Home,
    title: 'Residential & commercial',
    desc: 'Apartments, duplexes, land, offices, retail — developers and agents showcase everything in one place.',
  },
  {
    icon: Briefcase,
    title: 'Built for agents & developers',
    desc: 'A platform to showcase your portfolio — rent or sale — with tools to manage inquiries and track every connection.',
  },
  {
    icon: Shield,
    title: '72-hour refund guarantee',
    desc: 'Tenants get a full refund if an agent doesn\'t respond within 72 hours. Trust is built into every connection.',
  },
];

export default function WhyMaskani() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="why" ref={ref} className={`py-16 px-4 sm:px-6 lg:px-8 bg-maskani-off-white reveal ${visible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maskani-navy mb-4">
            A listing platform and a connection broker
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Maskani gives developers and agents a place to showcase properties — residential or commercial, for rent or sale — while guaranteeing the quality of every connection between serious tenants and verified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-maskani-teal/10 flex items-center justify-center mb-4">
                <item.icon size={24} className="text-maskani-teal" />
              </div>
              <h3 className="text-lg font-bold text-maskani-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-maskani-primary rounded-2xl p-8 text-white text-center">
          <p className="text-lg font-semibold mb-2">What we guarantee</p>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
            Verified listings, tracked connections, and a refund if an agent doesn&apos;t respond — so both sides get quality service, not wasted time.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm font-medium">
            {['Verified agents', 'Tracked connections', '72h refund', 'Saves time', 'Rent & sale', 'Commercial & residential'].map((tag) => (
              <li key={tag} className="flex items-center gap-1.5">
                <Check size={16} />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
