import React from 'react';
import { Zap, Target, Mail, BarChart3, RefreshCw, LayoutDashboard, Wrench, TrendingUp, Headphones } from 'lucide-react';

interface DeliverableProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const Deliverable: React.FC<DeliverableProps> = ({ icon, title, description, color, bgColor }) => (
  <div className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor} ${color} mb-4`}>
      {icon}
    </div>
    <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export const WhatYouGet: React.FC = () => {
  const setupDeliverables = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed-to-Lead System",
      description: "Instant personalized follow-up within minutes of opt-in. Email and/or SMS automation that sounds like you.",
      color: "text-brand",
      bgColor: "bg-brand/10"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Capture & Segmentation",
      description: "Optimized opt-in flows with smart tagging. Every lead segmented by interest, source, and behavior.",
      color: "text-violet-600",
      bgColor: "bg-violet-100"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "AI-Powered Email Nurture",
      description: "Behavior-based sequences that adapt. Branching logic based on opens, clicks, and engagement.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Lead Scoring System",
      description: "Automatic scoring based on engagement. Get alerts when leads are hot and ready to convert.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Re-engagement Automation",
      description: "Automated outreach to cold leads before they're lost forever. Win-back sequences that actually work.",
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Reporting Dashboard",
      description: "See your lead flow and conversion metrics at a glance. Know what's working and what's not.",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ];

  const retainerBenefits = [
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Monitoring & Maintenance",
      description: "System health checks, bug fixes, platform updates"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Ongoing Optimization",
      description: "A/B testing, performance analysis, conversion improvements"
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Support & Consultation",
      description: "Priority support, monthly check-ins, AI strategy advice"
    }
  ];

  return (
    <section id="what-you-get" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-4 inline-block">
            What You Get
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Everything You Need. <br />
            <span className="gradient-text">Done For You.</span>
          </h2>
          <p className="text-xl text-slate-600">
            A complete AI-powered funnel system, built and installed in your business.
          </p>
        </div>

        {/* Setup Phase Deliverables */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Setup Phase</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Your Complete System</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
            {setupDeliverables.map((item, index) => (
              <Deliverable
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                color={item.color}
                bgColor={item.bgColor}
              />
            ))}
          </div>
        </div>

        {/* Retainer Phase */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 animate-fade-up">
          <div className="text-center mb-10">
            <span className="text-sm font-bold text-violet-400 uppercase tracking-wider">Ongoing Retainer</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">We Don't Just Build It — We Keep It Running</h3>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
              Your system is monitored, maintained, and optimized every month. You focus on content — we handle the backend.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {retainerBenefits.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4 text-violet-400">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
