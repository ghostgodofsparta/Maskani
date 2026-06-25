'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Users, Shield, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

const stats = [
  {
    icon: CheckCircle2,
    value: 50,
    suffix: '+',
    label: 'Beta Agents',
    desc: 'Founding agents and developers joining our launch.',
  },
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Waitlist Signups',
    desc: 'Tenants and buyers ready to find verified properties.',
  },
  {
    icon: Shield,
    value: 72,
    suffix: 'h',
    label: 'Refund Guarantee',
    desc: 'Full refund if agent doesn\'t respond in time.',
  },
  {
    icon: MessageCircle,
    value: 150,
    suffix: ' KES',
    label: 'Per Connection',
    desc: 'Small fee that filters serious inquiries and saves time.',
  },
];

function AnimatedNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="trust" ref={ref} className={`py-16 px-4 sm:px-6 lg:px-8 bg-white reveal ${visible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maskani-navy mb-4">
            Built for trust and quality from day one
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A listing platform and connection broker — residential and commercial, rent or sale — with verified agents and guaranteed service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-maskani-off-white rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <stat.icon size={40} className="text-maskani-teal mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-maskani-navy mb-2">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} active={visible} />
              </p>
              <p className="text-gray-700 font-semibold mb-2">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
