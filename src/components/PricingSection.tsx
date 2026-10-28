import React, { useState } from 'react';
import { PRICING_PACKAGES, PackageOffer } from '../data/productData';
import { Check, ShieldCheck, Zap, Truck, Sparkles, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingProps {
  onSelectPackage: (pkg: PackageOffer) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onSelectPackage }) => {
  const [selectedId, setSelectedId] = useState<string>('duo');

  const handleOrder = (pkg: PackageOffer) => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
    onSelectPackage(pkg);
  };

  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/60 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            <span>Сезонна промоция: Ограничени наличности</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Изберете своя план за регенерация
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Възползвайте се от директните преференциални цени на производителя със спестяване до <strong>-54%</strong> и <strong>безплатна експресна доставка</strong> до вашата врата или офис на куриер.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PACKAGES.map((pkg) => {
            const isSelected = selectedId === pkg.id;
            void isSelected;
            const isBestValue = pkg.id === 'family';
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedId(pkg.id)}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative cursor-pointer ${
                  isPopular
                    ? 'bg-gradient-to-b from-teal-900/90 to-slate-900 border-2 border-teal-400 shadow-2xl shadow-teal-500/20 lg:-translate-y-2'
                    : isBestValue
                    ? 'bg-gradient-to-b from-emerald-950/70 to-slate-900 border-2 border-emerald-500/60 shadow-xl'
                    : 'bg-slate-800/60 border border-slate-700/80 hover:border-slate-500'
                }`}
              >
                {/* Popular or Best Value Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
                        isPopular
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950'
                          : 'bg-emerald-500 text-white'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="flex justify-between items-start mb-3 pt-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{pkg.subtitle}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
                      -{pkg.discountPercent}%
                    </span>
                  </div>

                  {/* Pricing Display */}
                  <div className="my-6 pb-6 border-b border-slate-700/70">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {pkg.price.toFixed(2)}
                      </span>
                      <span className="text-xl font-bold text-teal-300">лв.</span>
                      <span className="text-sm text-slate-400 line-through ml-2">
                        {pkg.originalPrice.toFixed(2)} лв.
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-semibold">
                        Само {pkg.perTube.toFixed(2)} лв. за тубичка
                      </span>
                      <span className="text-slate-400 font-medium">
                        Спестявате {pkg.savings.toFixed(2)} лв.
                      </span>
                    </div>
                  </div>

                  {/* Shipping badge */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/50">
                    <Truck className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{pkg.shipping}</span>
                  </div>

                  {/* Free gifts / Features checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Включено в пакета:
                    </span>
                    {pkg.freeGifts.map((gift, gIdx) => (
                      <div key={gIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{gift}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div>
                  <button
                    onClick={() => handleOrder(pkg)}
                    className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg ${
                      isPopular
                        ? 'bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-400 text-slate-950 hover:opacity-95 shadow-teal-500/30'
                        : isBestValue
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    <span>ИЗБЕРИ ТОЗИ ПАКЕТ</span>
                    <Zap className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2.5">
                    Плащане с наложен платеж при преглед или с карта
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Guarantee Strip */}
        <div className="bg-slate-800/40 border border-slate-800 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-900/50 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">30 Дни 100% Гаранция</h4>
              <p className="text-xs text-slate-400">Връщане на средствата при липса на резултат</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-900/50 text-teal-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Експресна Доставка (24-48 ч)</h4>
              <p className="text-xs text-slate-400">Директно до офис на Econt / Speedy или адрес</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-900/50 text-teal-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Преглед преди заплащане</h4>
              <p className="text-xs text-slate-400">Плащате след като видите оригиналния продукт</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
