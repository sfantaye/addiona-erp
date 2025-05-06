"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react'; // Zap for logo idea

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#footer' }, // Or a dedicated contact page
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out font-poppins ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" data-aos="fade-right">
            <Zap className="h-8 w-8 text-[var(--color-addiona)] mr-2 transform group-hover:rotate-12 transition-transform" />
            <span className={`text-3xl font-bold ${isScrolled ? 'text-black' : 'text-white group-hover:text-[var(--color-addiona)]-light transition-colors'}`}>
              Addiona
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-[var(--color-addiona)]' : 'text-addiona-gray-300 hover:text-white'
                }`}
                data-aos="fade-down"
                data-aos-delay={100 * (navItems.indexOf(item) + 1)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="bg-[var(--color-addiona)] hover:bg-[var(--color-addiona)]-dark text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-addiona-gray-300 hover:bg-[var(--color-addiona)] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="w-full mt-2 bg-[var(--color-addiona)] hover:bg-[var(--color-addiona)] text-white"
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;