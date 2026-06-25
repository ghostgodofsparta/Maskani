'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#how', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#why', label: 'Why Maskani' },
  { href: '#faqs', label: 'FAQs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#home" className="flex items-center gap-2">
            <img src="/maskani-logo.svg" alt="Maskani" className="h-8 w-8" />
            <span className="text-2xl font-bold text-maskani-navy">Maskani</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-maskani-teal transition font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-700 hover:text-maskani-teal transition font-medium">
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="px-6 py-2 bg-gradient-maskani-primary hover:opacity-90 text-white rounded-full transition font-medium"
            >
              Join Beta
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-maskani-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-maskani-teal font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t border-gray-100">
            <Link
              href="/auth/login"
              className="py-2 text-center text-maskani-navy font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="py-3 text-center bg-gradient-maskani-primary text-white rounded-full font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Join Nairobi Beta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
