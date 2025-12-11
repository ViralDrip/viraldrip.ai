import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Zap } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('book-audit')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-gradient-to-br from-brand to-violet-600 p-2 rounded-xl">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">
            ViralDrip<span className="text-brand">.ai</span>
          </span>
        </div>

        {/* Single CTA */}
        <Button size="sm" onClick={scrollToBooking}>
          Free Skool Audit
        </Button>
      </div>
    </header>
  );
};
