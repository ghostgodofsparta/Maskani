'use client';

import { useState } from 'react';
import { CreditCard, Phone, Clock, Bell, CheckCircle, RotateCcw } from 'lucide-react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

const steps = [
  {
    icon: CreditCard,
    title: 'Client pays KES 150',
    desc: 'A small fee ensures only serious tenants and buyers reveal contact details.',
  },
  {
    icon: Phone,
    title: 'Contact revealed',
    desc: 'Agent phone, WhatsApp, or email is unlocked instantly.',
  },
  {
    icon: Clock,
    title: 'Client reaches out',
    desc: 'Tenant or buyer initiates contact within 24 hours — tracked by the system.',
  },
  {
    icon: Bell,
    title: 'Agent notified',
    desc: 'Agent gets an alert and can respond directly.',
  },
  {
    icon: CheckCircle,
    title: 'Connection verified',
    desc: 'Both parties engage — quality service delivered for everyone.',
  },
  {
    icon: RotateCcw,
    title: 'No response? Refund.',
    desc: 'If the agent doesn\'t respond within 72 hours, full refund.',
  },
];

export default function VerificationFlow() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="how" ref={ref} className={`py-16 px-4 sm:px-6 lg:px-8 bg-maskani-off-white reveal ${visible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maskani-navy mb-4">
            How connection verification works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Click each step to see how Maskani guarantees quality connections between agents and clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-3">
            {steps.map((step, i) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                  active === i
                    ? 'bg-white shadow-lg border-l-4 border-maskani-teal'
                    : 'bg-white/60 hover:bg-white border-l-4 border-transparent'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    active === i ? 'bg-maskani-teal text-white' : 'bg-maskani-teal/10 text-maskani-teal'
                  }`}
                >
                  <step.icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-maskani-navy">
                    Step {i + 1}: {step.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-gradient-maskani-primary rounded-2xl p-8 text-white min-h-[320px] flex flex-col justify-center animate-slide-in">
            <p className="text-maskani-teal-light text-sm font-semibold uppercase tracking-wider mb-2">
              Step {active + 1} of {steps.length}
            </p>
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
              {(() => {
                const Icon = steps[active].icon;
                return <Icon size={32} />;
              })()}
            </div>
            <h3 className="text-2xl font-bold mb-4">{steps[active].title}</h3>
            <p className="text-white/85 text-lg leading-relaxed">{steps[active].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
