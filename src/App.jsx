import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import AccessibilitySection from './components/AccessibilitySection';
import KioskDemo from './components/KioskDemo';
import ImpactStats from './components/ImpactStats';
import FutureVision from './components/FutureVision';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brandBg font-sans text-brandText flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <AccessibilitySection />
        <KioskDemo />
        <ImpactStats />
        <FutureVision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
