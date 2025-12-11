import React, { useEffect } from 'react';
import { Clock, Gift, Shield, CheckCircle } from 'lucide-react';

export const BookAudit: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book-audit" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Ready to Find Your Leaks?
            </h2>
            <p className="text-xl text-slate-300 mb-2">
              Pick a time. Show up. Get clarity.
            </p>
            <p className="text-sm text-slate-400 mb-8">
              No credit card. No commitment. No pitch.
            </p>

            {/* Friction Killers - prominent */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2.5 text-sm text-white font-medium">
                <Clock className="w-4 h-4 text-brand" />
                <span>30 minutes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2.5 text-sm text-white font-medium">
                <Gift className="w-4 h-4 text-green-400" />
                <span>100% free</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2.5 text-sm text-white font-medium">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Value guaranteed</span>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/jonas-algowerk/30min-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&text_color=0f172a&primary_color=f97316"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>

            {/* What happens next - Steps */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">What happens next</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Pick a time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Get confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Show up & get clarity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
