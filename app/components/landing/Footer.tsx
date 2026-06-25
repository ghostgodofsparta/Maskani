import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-maskani-navy text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/maskani-logo.svg" alt="Maskani" className="h-6 w-6" />
            <span className="text-white font-bold">Maskani</span>
          </div>
          <p className="text-sm">
            Listing platform and connection broker for agents, developers, tenants, and buyers across Kenya.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            <li><Link href="/auth/signup?role=tenant" className="hover:text-white transition">For Tenants & Buyers</Link></li>
            <li><Link href="/auth/signup?role=agent" className="hover:text-white transition">For Agents</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#why" className="hover:text-white transition">About</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#faqs" className="hover:text-white transition">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="text-gray-400">Privacy Policy (coming soon)</span></li>
            <li><span className="text-gray-400">Terms of Service (coming soon)</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-maskani-navy-dark pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Maskani. All rights reserved.</p>
      </div>
    </footer>
  );
}
