"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-black/30' : 'bg-dark/80 backdrop-blur-xl border-b border-primary/10'}`}>
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-primary/20 border border-primary/30">
              {/* Fallback avatar if Logo.png is not there yet */}
              <span className="text-xl font-bold text-primary">S&B</span>
            </div>
            <div className="text-xl font-bold text-white tracking-wide">SOFT & BUSINESS</div>
          </div>
          
          <ul className="hidden md:flex gap-10 list-none">
            {['Inicio', 'Servicios', 'Proyectos', 'Chatbot Demo', 'Contacto'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú móvil"
          >
            ☰
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-light border-b border-primary/20 px-5 py-4">
          <ul className="flex flex-col gap-4">
            {['Inicio', 'Servicios', 'Proyectos', 'Chatbot Demo', 'Contacto'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/80 hover:text-white font-medium block h-full w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
