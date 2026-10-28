import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofBar } from './components/SocialProofBar';
import { ProblemSolution } from './components/ProblemSolution';
import { IngredientsShowcase } from './components/IngredientsShowcase';
import { ProductDeepDive } from './components/ProductDeepDive';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { PackageOffer, PRICING_PACKAGES } from './data/productData';
import { ArrowUp, ShoppingBag, ShieldCheck } from 'lucide-react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageOffer>(PRICING_PACKAGES[1]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenOrder = (pkg?: PackageOffer) => {
    if (pkg) {
      setSelectedPackage(pkg);
    } else {
      setSelectedPackage(PRICING_PACKAGES[1]); // Default popular duo
    }
    setIsModalOpen(true);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenOrder();
    }
  };

  const scrollToIngredients = () => {
    const el = document.getElementById('ingredients');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] text-slate-800 antialiased selection:bg-teal-600 selection:text-white relative">
      
      {/* Sticky Navigation */}
      <Navbar onOrderClick={scrollToPricing} />

      {/* Main Landing Sections */}
      <main className="flex-1">
        <Hero
          onOrderClick={scrollToPricing}
          onLearnMoreClick={scrollToIngredients}
        />

        <SocialProofBar />

        <ProblemSolution onCtaClick={scrollToPricing} />

        <IngredientsShowcase />

        <ProductDeepDive onOrderClick={scrollToPricing} />

        <TestimonialsSection />

        <PricingSection onSelectPackage={handleOpenOrder} />

        <FAQSection />

        <BottomCTA onOrderClick={scrollToPricing} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Checkout Order Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage={selectedPackage}
      />

      {/* Floating Bottom Bar for Mobile conversion */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-3 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-900">Decucare® крем</span>
            <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-1.5 py-0.2 rounded">
              -54%
            </span>
          </div>
          <span className="text-xs font-extrabold text-teal-700">от 21.22 лв./бр.</span>
        </div>

        <button
          onClick={() => handleOpenOrder()}
          className="flex-1 max-w-[200px] py-2.5 px-4 rounded-xl bg-teal-700 active:bg-teal-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-teal-700/20"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Поръчай сега</span>
        </button>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden sm:flex fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-400 items-center justify-center transition-all cursor-pointer hover:-translate-y-1"
          aria-label="Върни се в началото"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Micro floating reassurance tag */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-30 items-center gap-2 bg-white/90 backdrop-blur-md py-2 px-3.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 shadow-lg">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>100% Оригинален дерматологичен продукт</span>
      </div>

    </div>
  );
}

export default App;
