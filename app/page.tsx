import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Features from '@/components/landing/Features';
import About from '@/components/landing/About';
import Footer from '@/components/landing/Footer';
import MottoCard from '@/components/landing/MottoCard';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />

        <section className="bg-black"> 
  <MottoCard
    motto={ 
      <>
        Innovate. Integrate. Inspire.
      </>
    }
    subtitle="Addiona's Driving Force"
  />
</section>
        <Features />
        <About />
      </main>
      <Footer />
    </>
  );
}