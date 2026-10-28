import React, { useState } from 'react';
import { Star, ShieldCheck, Clock, CheckCircle2, Award, Zap, Heart } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
  onLearnMoreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onLearnMoreClick }) => {
  const [activeTab, setActiveTab] = useState<'soothe' | 'repair' | 'protect'>('repair');

  const benefitBullets = [
    { id: 'repair', label: 'Ускорено клетъчно обновяване', text: 'Стимулира реепителизацията с невен и D-пантенол' },
    { id: 'soothe', label: 'Мигновено успокояване на парене', text: 'Охлажда и потушава зачервяванията с алое и лайка' },
    { id: 'protect', label: 'Невидим дишащ защитен щит', text: 'Предотвратява загубата на влага и вторично дразнене' },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 subtle-mesh">
      {/* Decorative ambient orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Дерматологична формула за регенерация</span>
              <span className="bg-white text-teal-800 px-2 py-0.5 rounded-full text-[11px] font-bold border border-teal-100">
                Клинично доказана
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Върнете спокойствието <br className="hidden sm:inline" />
              на своята кожа с{' '}
              <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 bg-clip-text text-transparent">
                DECUCARE® крем
              </span>
            </h1>

            {/* Subtitle with user prompt context */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              <span className="font-semibold text-slate-850 text-teal-950">Регенериращ и възстановяващ крем</span> за специална грижа при чувствителна, силно раздразнена или увредена кожа. Съчетава лечебната мощ на{' '}
              <span className="font-medium text-slate-800 underline decoration-teal-300 underline-offset-4">лайка, невен, алое и D-пантенол</span> за стимулиране на естествените процеси на обновяване и дълбока хидратация.
            </p>

            {/* Key benefits interactive pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {benefitBullets.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-teal-50/90 border-teal-500 shadow-xs'
                      : 'bg-white/80 border-slate-200 hover:border-teal-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className={`w-4 h-4 ${activeTab === item.id ? 'text-teal-700' : 'text-slate-400'}`} />
                    <span className="text-xs font-bold text-slate-800">{item.label}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA action bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-800 hover:from-teal-600 hover:to-emerald-700 shadow-xl shadow-teal-900/20 hover:shadow-teal-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>ПОРЪЧАЙ СЕГА С -54% ОТСТЪПКА</span>
                <Zap className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform fill-amber-300" />
              </button>

              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <span>Виж състава и формулата</span>
              </button>
            </div>

            {/* Trust badge micro items */}
            <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Дерматологично тестван</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-700" />
                <span>Ефект след първите 24 часа</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Хипоалергенна грижа</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>100% Произведен по GMP стандарт</span>
              </div>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Клиент"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Клиент"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Клиент"
                />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-900 font-bold text-xs ring-2 ring-white">
                  +12k
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-slate-850 text-sm ml-1 text-slate-900">4.94 / 5.0</span>
                </div>
                <span className="text-xs text-slate-500">
                  Над 12,400+ доволни клиенти в България
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Hero Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background glowing rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-teal-200/60 bg-gradient-to-b from-teal-50/60 to-white/40 shadow-inner -z-10 animate-pulse-subtle" />
            </div>

            {/* Product card presentation */}
            <div className="relative w-full max-w-md bg-gradient-to-b from-white/90 via-white/80 to-teal-50/50 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-white shadow-2xl shadow-teal-950/10">
              
              {/* Top micro badges */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  ОРИГИНАЛНА ФОРМУЛА
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  100 ml e • Дермо-комплекс
                </span>
              </div>

              {/* Product Image with subtle floating animation */}
              <div className="relative my-2 py-4 flex justify-center items-center overflow-hidden rounded-2xl bg-gradient-to-b from-teal-50/40 to-slate-50/60 group">
                <img
                  src="/images/decucare-product.png"
                  alt="Decucare Крем за регенерация на чувствителна кожа"
                  className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-2xl animate-float-gentle transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating micro sticker 1: Chamomile & Calendula */}
                <div className="absolute top-4 left-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">
                    🌼
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-bold text-slate-800 leading-none">Лайка & Невен</span>
                    <span className="text-[9px] text-teal-700 font-medium">Анти-възпалително</span>
                  </div>
                </div>

                {/* Floating micro sticker 2: D-Panthenol & Aloe */}
                <div className="absolute bottom-6 right-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                    💧
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-bold text-slate-800 leading-none">Пантенол + Алое</span>
                    <span className="text-[9px] text-emerald-700 font-medium">Дълбока хидратация</span>
                  </div>
                </div>
              </div>

              {/* Quick specs pill */}
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-50/80 p-2 rounded-xl">
                  <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider">Действие</span>
                  <span className="text-xs font-bold text-slate-800">Регенерира</span>
                </div>
                <div className="bg-slate-50/80 p-2 rounded-xl">
                  <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider">Усещане</span>
                  <span className="text-xs font-bold text-slate-800">Без лепнене</span>
                </div>
                <div className="bg-teal-50 p-2 rounded-xl">
                  <span className="block text-teal-600 text-[10px] uppercase font-bold tracking-wider">Гаранция</span>
                  <span className="text-xs font-bold text-teal-800">30 Дни</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
