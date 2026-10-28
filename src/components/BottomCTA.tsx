import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall, Award } from 'lucide-react';

interface BottomCtaProps {
  onOrderClick: () => void;
}

export const BottomCTA: React.FC<BottomCtaProps> = ({ onOrderClick }) => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-white overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs sm:text-sm font-bold mb-6">
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>Специална онлайн кампания • 100% Оригинален Decucare®</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Подарете на кожата си комфорта, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-100">
            който заслужава още днес
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Регенерираща грижа със силата на лайка, невен, алое и пантенол. Без компромис с качеството и без риск благодарение на нашата 30-дневна гаранция.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto px-9 py-4.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:opacity-95 text-slate-950 font-black text-base shadow-2xl shadow-teal-500/30 hover:scale-105 active:scale-100 transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            <span>ПОРЪЧАЙ DECUCARE С ДО -54% ОТСТЪПКА</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="tel:+35980012345"
            className="w-full sm:w-auto px-7 py-4.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-teal-400" />
            <span>Телефон за поръчка: 0800 12 345</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>30-дневна гаранция за връщане на пари</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Дерматологично изпитан продукт</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span>🚚 Доставка до цяла България за 24/48ч</span>
          </div>
        </div>

      </div>
    </section>
  );
};
