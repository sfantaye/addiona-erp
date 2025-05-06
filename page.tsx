import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Features from '@/components/landing/Features';
import About from '@/components/landing/About';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <About />
        {/* You can add more sections here like Testimonials, CTA, etc. */}
      </main>
      <Footer />
    </>
  );
}
