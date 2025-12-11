import React from 'react';
import { Button } from './Button';
import { ArrowRight, Check, Zap, Clock, Wrench } from 'lucide-react';

export const CTA: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('book-audit')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <div className="animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Stop Leaving Money <br />
            <span className="gradient-text">On the Table.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Book your free funnel audit and see exactly how a connected AI system could grow your Skool community.
          </p>

          <div className="bg-white/5 backdrop-blur-md p-3 rounded-[2rem] border border-white/10 inline-block shadow-2xl mb-10">
            <Button size="lg" className="w-full sm:w-auto text-lg px-12" onClick={scrollToBooking}>
              Book Your Free Audit
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-brand" />
              </div>
              <span>Setup in 4 Weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-brand" />
              </div>
              <span>Done-For-You</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-brand" />
              </div>
              <span>Ongoing Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
