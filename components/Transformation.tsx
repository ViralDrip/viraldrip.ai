import React from 'react';
import { ArrowRight, X, Check } from 'lucide-react';

interface TransformRowProps {
  before: string;
  after: string;
  delay?: string;
}

const TransformRow: React.FC<TransformRowProps> = ({ before, after, delay = '' }) => (
  <div className={`grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center animate-fade-up ${delay}`}>
    {/* Before */}
    <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
        <X className="w-4 h-4 text-red-500" />
      </div>
      <p className="text-slate-600 font-medium">{before}</p>
    </div>

    {/* Arrow */}
    <div className="hidden md:flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand to-violet-600 flex items-center justify-center shadow-lg shadow-brand/20">
        <ArrowRight className="w-5 h-5 text-white" />
      </div>
    </div>

    {/* After */}
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
        <Check className="w-4 h-4 text-green-600" />
      </div>
      <p className="text-green-800 font-medium">{after}</p>
    </div>
  </div>
);

export const Transformation: React.FC = () => {
  const transformations = [
    {
      before: "Leads come in, nothing happens",
      after: "Every lead gets instant personalized follow-up"
    },
    {
      before: "Manual follow-up when you remember",
      after: "Automated nurture sequences running 24/7"
    },
    {
      before: "No idea what's working",
      after: "Clear data on lead behavior and conversions"
    },
    {
      before: "Scattered tools with no connection",
      after: "One integrated system that talks to itself"
    },
    {
      before: "Leaving money on the table",
      after: "Existing traffic finally converts"
    },
    {
      before: "You're stuck in the weeds",
      after: "You're focused on content and growth"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-4 inline-block">
            The Transformation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Before vs After <br />
            <span className="gradient-text">ViralDrip</span>
          </h2>
          <p className="text-xl text-slate-600">
            See the difference a connected funnel system makes for your Skool community.
          </p>
        </div>

        {/* Before/After Headers */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-4 mb-6">
          <div className="text-center">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Before</span>
          </div>
          <div className="w-12"></div>
          <div className="text-center">
            <span className="text-sm font-bold text-green-600 uppercase tracking-wider">After</span>
          </div>
        </div>

        {/* Transformation Rows */}
        <div className="space-y-4">
          {transformations.map((item, index) => (
            <TransformRow
              key={index}
              before={item.before}
              after={item.after}
              delay={`delay-${(index % 3) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
