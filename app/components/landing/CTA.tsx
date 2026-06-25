import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-maskani-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join the beta today
        </h2>
        <p className="text-maskani-teal-light text-lg mb-8 max-w-xl mx-auto">
          First 50 founding agents get launch pricing. Tenants and buyers get verified connections with a 72-hour refund guarantee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/signup?role=tenant"
            className="px-8 py-4 bg-white text-maskani-navy font-bold rounded-full hover:bg-gray-100 transition text-lg"
          >
            I&apos;m Looking for Property
          </Link>
          <Link
            href="/auth/signup?role=agent"
            className="px-8 py-4 bg-gradient-maskani-secondary hover:opacity-90 text-white font-bold rounded-full transition text-lg border-2 border-white/20"
          >
            I&apos;m an Agent
          </Link>
        </div>
      </div>
    </section>
  );
}
