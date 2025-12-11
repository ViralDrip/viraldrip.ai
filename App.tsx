import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { BookAudit } from './components/BookAudit';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// Optimized conversion flow:
// 1. Hero — Hook + funnel visual + personal element
// 2. ValueProp — Clear "Do X → Get Y" exchange
// 3. BookAudit — Frictionless CTA with friction killers
// 4. FAQ — Objection handling

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand selection:text-white">
      <Header />
      <main>
        <Hero />
        <ValueProp />
        <BookAudit />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
