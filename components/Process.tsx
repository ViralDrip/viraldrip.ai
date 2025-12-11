import React from 'react';
import { Calendar, Wrench, Rocket, Clock } from 'lucide-react';

interface TimelineStepProps {
  week: string;
  title: string;
  description: string;
  tasks: string[];
  icon: React.ReactNode;
  isLast?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ week, title, description, tasks, icon, isLast = false }) => (
  <div className="relative flex gap-6 md:gap-8">
    {/* Timeline Line */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand to-violet-600 flex items-center justify-center text-white shadow-lg shadow-brand/20 z-10">
        {icon}
      </div>
      {!isLast && (
        <div className="w-0.5 h-full bg-gradient-to-b from-violet-300 to-slate-200 mt-4"></div>
      )}
    </div>

    {/* Content */}
    <div className={`flex-1 ${!isLast ? 'pb-12' : ''}`}>
      <span className="text-sm font-bold text-violet-600 uppercase tracking-wider">{week}</span>
      <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
            {task}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Process: React.FC = () => {
  const steps = [
    {
      week: "Week 1",
      title: "Onboarding & Strategy",
      description: "We dive deep into your Skool community, understand your audience, and map out the perfect funnel for your offer.",
      tasks: [
        "60-minute kickoff call",
        "Access collection and tool audit",
        "Funnel mapping & messaging direction",
        "Brand voice review"
      ],
      icon: <Calendar className="w-6 h-6" />
    },
    {
      week: "Weeks 2-3",
      title: "Build & Test",
      description: "We build your complete system, configure all integrations, and test everything before it goes live.",
      tasks: [
        "Full system build in Make.com",
        "AI personalization setup",
        "Email sequence creation",
        "Integration & testing"
      ],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      week: "Week 4",
      title: "Launch & Optimize",
      description: "Your system goes live. We monitor everything and make optimizations based on real data.",
      tasks: [
        "Final review call",
        "Live launch",
        "7-day intensive monitoring",
        "Initial optimizations"
      ],
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-4 inline-block">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Live in 4 Weeks. <br />
            <span className="gradient-text">Minimal Effort From You.</span>
          </h2>
          <p className="text-xl text-slate-600">
            We handle the heavy lifting. You just show up to a few calls.
          </p>
        </div>

        {/* Timeline */}
        <div className="animate-fade-up">
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              week={step.week}
              title={step.title}
              description={step.description}
              tasks={step.tasks}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Time Investment Card */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 text-center animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-brand" />
            <span className="text-lg font-bold text-slate-900">Your Time Investment</span>
          </div>
          <p className="text-4xl font-black text-slate-900 mb-2">~3-4 hours</p>
          <p className="text-slate-500">Total across the entire 4-week process</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-slate-50 px-4 py-2 rounded-full text-slate-600">Kickoff call: 60 min</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full text-slate-600">Review call: 30-60 min</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full text-slate-600">Async feedback: 1-2 hrs</span>
          </div>
        </div>
      </div>
    </section>
  );
};
