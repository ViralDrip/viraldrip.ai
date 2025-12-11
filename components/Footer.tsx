import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-gradient-to-br from-brand to-violet-600 p-2 rounded-xl">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              ViralDrip<span className="text-brand">.ai</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-md text-center md:text-right">
            AI-powered funnel systems for Skool community owners.
          </p>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ViralDrip.ai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="mailto:jonas@viraldrip.ai" className="hover:text-brand transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
