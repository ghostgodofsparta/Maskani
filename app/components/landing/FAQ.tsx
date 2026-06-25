'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="faqs" ref={ref} className={`py-16 px-4 sm:px-6 lg:px-8 bg-maskani-off-white reveal ${visible ? 'visible' : ''}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-maskani-navy mb-4">Frequently asked questions</h2>
          <p className="text-gray-600">Everything you need to know about listings, agents, and verified connections</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-maskani-navy hover:bg-gray-50 transition"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-maskani-teal transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
