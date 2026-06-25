'use client';

import { useScrollReveal } from '@/app/hooks/useScrollReveal';

const testimonials = [
  {
    quote:
      'I was tired of posting on Facebook and getting dozens of messages from people who never show up. Maskani sends me tenants who already paid to connect — they mean business.',
    name: 'James Mwangi',
    role: 'Agent, Westlands',
    initials: 'JM',
  },
  {
    quote:
      'I paid KES 150 and got the agent\'s WhatsApp instantly. They responded the same day. Way better than chasing ghost listings on groups — it saved me weeks of searching.',
    name: 'Grace Wanjiku',
    role: 'Tenant, Kilimani',
    initials: 'GW',
  },
  {
    quote:
      'The refund guarantee sold me. I knew I wasn\'t risking anything if the agent didn\'t reply. That kind of trust is rare in Kenya\'s property market.',
    name: 'David Ochieng',
    role: 'Buyer, Ruaka',
    initials: 'DO',
  },
];

export default function Testimonials() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="testimonials" ref={ref} className={`py-16 px-4 sm:px-6 lg:px-8 bg-white reveal ${visible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maskani-navy mb-4">Early beta feedback</h2>
          <p className="text-gray-600 text-lg">What agents, tenants, and buyers are saying about verified connections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-maskani-off-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <p className="text-gray-700 italic leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-maskani-teal/20 flex items-center justify-center text-maskani-teal font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-maskani-navy">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
