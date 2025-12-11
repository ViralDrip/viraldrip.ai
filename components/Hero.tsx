import React from 'react';
import { Button } from './Button';
import { ArrowRight, Clock, Check, Users, Zap, Mail, Brain, TrendingUp, Target, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-100 mask-gradient-b"></div>
      </div>

      {/* Subtle Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column - Copy */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
                <span className="text-sm font-semibold text-violet-700">For Skool Owners Making $10k-50k/mo</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 mb-5 leading-[1.1]">
                Your Content is Working.<br />
                <span className="gradient-text">Your Funnel Isn't.</span>
              </h1>

              {/* Subhead - One line */}
              <p className="text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 mb-6">
                Your leads slip away without a system to capture and nurture them.
              </p>

              {/* Inline Value Points - Compact */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mb-8 text-sm">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Find your leaks</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Get a funnel map</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Clear next steps</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-5">
                <Button size="lg" onClick={() => document.getElementById('book-audit')?.scrollIntoView({ behavior: 'smooth' })}>
                  Book Your Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Friction Killers */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span>100% free</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span>No pitch</span>
                </div>
              </div>

              {/* Personal Element */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <img
                  src="/Jonas_2023_15x15_sRGB_fin.jpg"
                  alt="Jonas"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">I'm Jonas</span> — I'll personally audit your funnel
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards Funnel */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative max-w-[420px] mx-auto">

              {/* Glow behind funnel */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-violet-500/10 to-green-500/10 rounded-[2rem] blur-2xl scale-95 -z-10"></div>

              {/* Funnel Header */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                  <Zap className="w-4 h-4 text-brand" />
                  <span className="text-sm font-bold text-slate-700">Your funnel with ViralDrip</span>
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
              </div>

              {/* Stacked Cards */}
              <div className="flex flex-col items-center space-y-2">

                {/* Stage 1: Traffic - 100% */}
                <div className="w-full">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold text-sm">Traffic</p>
                          <p className="text-slate-400 text-xs">Visitors arrive</p>
                        </div>
                      </div>
                      <p className="text-blue-600 font-black text-xl">2,847</p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <ChevronDown className="w-5 h-5 text-slate-300" />

                {/* Stage 2: Capture - 92% */}
                <div className="w-[92%]">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                          <Target className="w-5 h-5 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold text-sm">Capture</p>
                          <p className="text-slate-400 text-xs">Leads collected</p>
                        </div>
                      </div>
                      <p className="text-violet-600 font-black text-xl">842</p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <ChevronDown className="w-5 h-5 text-slate-300" />

                {/* Stage 3: AI Responds - 84% */}
                <div className="w-[84%]">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                          <Brain className="w-5 h-5 text-brand" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold text-sm">AI Responds</p>
                          <p className="text-slate-400 text-xs">Instant follow-up</p>
                        </div>
                      </div>
                      <p className="text-brand font-black text-xl">&lt;30s</p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <ChevronDown className="w-5 h-5 text-slate-300" />

                {/* Stage 4: Nurture - 76% */}
                <div className="w-[76%]">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold text-sm">Nurture</p>
                          <p className="text-slate-400 text-xs">Smart sequences</p>
                        </div>
                      </div>
                      <p className="text-emerald-600 font-black text-xl">24/7</p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <ChevronDown className="w-5 h-5 text-slate-300" />

                {/* Stage 5: Convert - 68% */}
                <div className="w-[68%]">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-4 shadow-lg shadow-green-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold text-sm">Convert</p>
                          <p className="text-green-700 text-xs">Paid members</p>
                        </div>
                      </div>
                      <p className="text-green-600 font-black text-2xl">+127</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Stats */}
              <div className="mt-5 flex items-center justify-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-xl font-black text-slate-900">47%</p>
                  <p className="text-xs text-slate-400">Conv. Rate</p>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-xl font-black text-slate-900">$12k</p>
                  <p className="text-xs text-slate-400">MRR Added</p>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-xl font-black text-slate-900">0</p>
                  <p className="text-xs text-slate-400">Manual Hrs</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
