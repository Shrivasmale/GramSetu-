import { lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LazySection from './components/LazySection';

// Dynamic code-splitting: components are loaded on-demand when scrolled into view or targeted
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const Features = lazy(() => import('./components/Features'));
const AccessibilitySection = lazy(() => import('./components/AccessibilitySection'));
const KioskDemo = lazy(() => import('./components/KioskDemo'));
const ImpactStats = lazy(() => import('./components/ImpactStats'));
const FutureVision = lazy(() => import('./components/FutureVision'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 flex flex-col justify-between overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        {/* Above-the-fold content: loaded immediately for zero initial render delay */}
        <Hero />

        {/* Below-the-fold components: loaded strictly on scroll or when targeted via hash/links */}
        <LazySection id="impact" minHeight="50vh">
          <ProblemSolution />
        </LazySection>

        <LazySection id="features" minHeight="60vh">
          <Features />
        </LazySection>

        <LazySection id="accessibility" minHeight="50vh">
          <AccessibilitySection />
        </LazySection>

        <LazySection id="kiosk-demo" minHeight="80vh">
          <KioskDemo />
        </LazySection>

        <LazySection id="stats" minHeight="40vh">
          <ImpactStats />
        </LazySection>

        <LazySection id="future" minHeight="50vh">
          <FutureVision />
        </LazySection>

        <LazySection id="contact" minHeight="50vh">
          <CTA />
        </LazySection>
      </main>

      <LazySection id="footer" minHeight="30vh">
        <Footer />
      </LazySection>
    </div>
  );
}

export default App;
