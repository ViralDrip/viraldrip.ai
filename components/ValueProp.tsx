import React from 'react';
import { ArrowRight, Search, Map, ListChecks } from 'lucide-react';

export const ValueProp: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Book a 30-Minute Audit.<br />
            <span className="gradient-text">Walk Away With Clarity.</span>
          </h2>
        </div>

        {/* Do X → Get Y */}
        <div className="relative">
          <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center">

            {/* Do This */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">You do this</span>
              <p className="text-2xl font-black text-slate-900 mt-3">
                Book a free<br />30-min call
              </p>
              <p className="text-slate-500 text-sm mt-3">
                We'll share screens, walk through your current funnel, and I'll show you exactly where leads are falling off.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center shadow-lg shadow-brand/30">
                <ArrowRight className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Get This */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider">You get this</span>

              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Search className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Leak Analysis</p>
                    <p className="text-sm text-slate-500">See exactly where leads drop off</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Map className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Custom Funnel Map</p>
                    <p className="text-sm text-slate-500">A visual blueprint for your Skool</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ListChecks className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Clear Next Steps</p>
                    <p className="text-sm text-slate-500">Actionable fixes, no strings attached</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
