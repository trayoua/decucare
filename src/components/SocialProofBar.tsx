import React from 'react';
import { Award, ShieldAlert, Sparkles, RefreshCw, CheckCircle } from 'lucide-react';

export const SocialProofBar: React.FC = () => {
  const stats = [
    { value: '98.4%', label: 'Усещат облекчение още през първите 24 часа', icon: CheckCircle },
    { value: '4.9 / 5', label: 'Средна оценка от над 1,200 реални мнения', icon: Award },
    { value: '100%', label: 'Без парабени, минерални масла и алергени', icon: ShieldAlert },
    { value: '30 Дни', label: 'Пълна гаранция за връщане на парите', icon: RefreshCw },
  ];

  const badges = [
    'ДЕРМАТОЛОГИЧНО ТЕСТВАН',
    'БЕЗ АРОМАТИ И ПАРАБЕНИ',
    'ПОДХОДЯЩ ЗА ДЕЦА И ВЪЗРАСТНИ',
    'КЛИНИЧНО ИЗПИТАНА ФОРМУЛА',
    'ПРОИЗВЕДЕНО ПО GMP СТАНДАРТИ'
  ];

  return (
    <div className="bg-slate-900 text-white py-12 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-slate-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-800/40 border border-slate-800/80 hover:border-teal-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-300 mt-2 font-medium max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Scrolling or Ticker Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider mr-2">
            <Sparkles className="w-4 h-4" />
            <span>Стандарти за чистота:</span>
          </div>
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] sm:text-xs font-semibold text-slate-300 hover:text-white hover:border-teal-400 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              {badge}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
