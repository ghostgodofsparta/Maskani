'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Home, Building2 } from 'lucide-react';
import { neighborhoods } from '@/data/neighborhoods';
import { listingsPreview } from '@/data/listings-preview';

type Role = 'tenant' | 'agent';

export default function Hero() {
  const [role, setRole] = useState<Role>('tenant');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [slide, setSlide] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % neighborhoods.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setShowPreview(location.trim().length >= 2);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/auth/signup?role=${role === 'tenant' ? 'tenant' : 'agent'}`;
  };

  const filteredListings = listingsPreview.filter(
    (l) =>
      !location ||
      l.area.toLowerCase().includes(location.toLowerCase()) ||
      l.title.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <section id="home" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-maskani-hero">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maskani-teal/10 text-maskani-teal text-sm font-semibold">
            <MapPin size={14} />
            Residential & commercial — rent or sale — founding agent spots open
          </span>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-white p-1 shadow-md border border-gray-100">
            <button
              type="button"
              onClick={() => setRole('tenant')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                role === 'tenant'
                  ? 'bg-gradient-maskani-primary text-white'
                  : 'text-gray-600 hover:text-maskani-navy'
              }`}
            >
              I&apos;m looking for property
            </button>
            <button
              type="button"
              onClick={() => setRole('agent')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                role === 'agent'
                  ? 'bg-gradient-maskani-primary text-white'
                  : 'text-gray-600 hover:text-maskani-navy'
              }`}
            >
              I&apos;m an Agent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maskani-navy leading-tight mb-6">
              {role === 'tenant' ? (
                <>
                  Find properties.{' '}
                  <span className="text-maskani-green">Get verified connections.</span>
                </>
              ) : (
                <>
                  Showcase properties.{' '}
                  <span className="text-maskani-green">Get serious inquiries.</span>
                </>
              )}
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {role === 'tenant'
                ? 'Browse residential and commercial listings for rent or sale. Pay KES 150 to reveal agent contact — refunded if they don\'t respond in 72 hours.'
                : 'List residential or commercial properties for rent or sale. Reach serious tenants and buyers with verified, tracked connections on one platform.'}
            </p>

            {role === 'tenant' ? (
              <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-4 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-maskani-teal focus:ring-2 focus:ring-maskani-teal/20 text-gray-700"
                  >
                    <option value="">Property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="duplex">Duplex</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land</option>
                    <option value="shared">Shared Room</option>
                  </select>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Kilimani, Westlands, Ruaka..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-maskani-teal focus:ring-2 focus:ring-maskani-teal/20 text-gray-700"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-maskani-primary hover:opacity-90 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition"
                  >
                    <Search size={20} />
                    Search
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link
                  href="/auth/signup?role=agent"
                  className="px-8 py-4 bg-gradient-maskani-primary hover:opacity-90 text-white font-bold rounded-full transition text-center"
                >
                  List Your Properties
                </Link>
                <a
                  href="#pricing"
                  className="px-8 py-4 border-2 border-maskani-teal text-maskani-teal font-bold rounded-full hover:bg-maskani-teal/5 transition text-center"
                >
                  See Pricing
                </a>
              </div>
            )}

            {role === 'tenant' && showPreview && (
              <div className="space-y-2 animate-slide-in">
                <p className="text-sm text-gray-500 font-medium">Preview matches</p>
                {(filteredListings.length ? filteredListings : listingsPreview).slice(0, 2).map((listing) => (
                  <div
                    key={listing.id}
                    className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-maskani-teal/10 flex items-center justify-center">
                        <Home size={18} className="text-maskani-teal" />
                      </div>
                      <div>
                        <p className="font-semibold text-maskani-navy text-sm">{listing.title}</p>
                        <p className="text-xs text-gray-500">{listing.area}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-maskani-teal">{listing.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative h-80 md:h-[420px]">
            {neighborhoods.map((n, i) => (
              <div
                key={n.name}
                className={`carousel-slide rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col justify-end p-8 text-white ${
                  i === slide ? 'carousel-slide-active relative' : 'carousel-slide-inactive'
                }`}
                style={{ background: n.gradient }}
              >
                <Building2 size={40} className="mb-auto opacity-40" />
                <p className="text-sm uppercase tracking-widest opacity-80 mb-1">Nairobi</p>
                <h3 className="text-3xl font-bold mb-1">{n.name}</h3>
                <p className="text-white/85 mb-2">{n.tagline}</p>
                <p className="text-lg font-semibold">{n.price}</p>
              </div>
            ))}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {neighborhoods.map((n, i) => (
                <button
                  key={n.name}
                  type="button"
                  aria-label={`Show ${n.name}`}
                  onClick={() => setSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === slide ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
