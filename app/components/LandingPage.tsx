import Navbar from './landing/Navbar';
import Hero from './landing/Hero';
import TrustStats from './landing/TrustStats';
import VerificationFlow from './landing/VerificationFlow';
import Pricing from './landing/Pricing';
import WhyMaskani from './landing/WhyMaskani';
import Testimonials from './landing/Testimonials';
import FAQ from './landing/FAQ';
import CTA from './landing/CTA';
import Footer from './landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustStats />
      <VerificationFlow />
      <Pricing />
      <WhyMaskani />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
