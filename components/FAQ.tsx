import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQs specifically address objections to booking the FREE AUDIT
// Not objections to the full service
const faqs = [
  {
    q: "Is this actually free? What's the catch?",
    a: "Yes, 100% free. No credit card, no commitment. The 'catch' is simple: if the audit shows you need help, we'll explain how we can help. But there's no pressure — many people take the insights and implement themselves."
  },
  {
    q: "Is this just a sales pitch disguised as a call?",
    a: "No. We spend the full 30 minutes on YOUR funnel — mapping it out, finding leaks, and giving you specific recommendations. If there's a fit to work together, we'll mention it at the end. But you'll leave with actionable value either way."
  },
  {
    q: "What do I need to prepare?",
    a: "Nothing. Just show up. We'll ask questions about your Skool community, how leads come in, and what happens after. That's it. The more honest you are, the more useful the audit will be."
  },
  {
    q: "How long does the call take?",
    a: "30 minutes. We respect your time. If we need more, we'll ask — but we're efficient and focused on giving you clarity fast."
  },
  {
    q: "What if I'm not ready to buy anything?",
    a: "That's fine. Most people aren't — and we don't expect you to be. The audit is designed to give you value regardless of what you decide to do next."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Questions About the Audit
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-4">{item.q}</span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
