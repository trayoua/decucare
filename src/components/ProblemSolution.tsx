import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

export const ProblemSolution: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const problems = [
    {
      title: 'Непоносимо парене, сърбеж и опъване',
      desc: 'Чувствителната кожа реагира болезнено на вятър, студ, сапуни или синтетични материи.'
    },
    {
      title: 'Напукана, лющеща се и компрометирана бариера',
      desc: 'Когато защитният слой е нарушен, бактериите проникват лесно, водейки до постоянни възпаления.'
    },
    {
      title: 'Протриване и зачервяване при залежаване (декубитус)',
      desc: 'Непрекъснатият натиск и влага причиняват травми на тъканта, изискващи специализирана регенерация.'
    },
    {
      title: 'Раздразнение след козметични или дерматологични манипулации',
      desc: 'Лазери, пилинги или депилация оставят епидермиса крехък, горещ и свръхчувствителен.'
    }
  ];

  const solutions = [
    {
      title: 'Клетъчно възстановяване с D-Пантенол 5%',
      desc: 'Прониква надълбоко и форсира естествения синтез на нови здрави кожни клетки.'
    },
    {
      title: 'Успокояване на огнището с Лайка и Невен',
      desc: 'Фито-екстрактите потушават зачервяването и спират микро-възпалителните процеси.'
    },
    {
      title: 'Дълбоко охлаждане и овлажняване с Алое',
      desc: 'Възстановява хидролипидния филм без лепкав слой и образува дишаща предпазна бариера.'
    },
    {
      title: 'Ежедневен щит без парабени и токсини',
      desc: 'Подходящ за продължителна употреба без риск от привикване или странични дерматологични реакции.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200">
            ПРОБЛЕМ & РЕШЕНИЕ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Когато обикновените лосиони не помагат, <br className="hidden sm:inline" />
            <span className="text-teal-700">Decucare® поема контрола</span>
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Кожата под стрес не се нуждае от тежки парфюми или агресивни химикали. Тя изисква целенасочена дерматологична формула, която възстановява целостта на клетъчно ниво.
          </p>
        </div>

        {/* Side-by-side contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Without Decucare */}
          <div className="bg-rose-50/50 border border-rose-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-200">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-rose-950">Без адекватна дерматологична грижа</h3>
                  <p className="text-xs text-rose-600">Омагьосан кръг на възпаление и увреждане</p>
                </div>
              </div>

              <div className="space-y-4">
                {problems.map((prob, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/70 p-4 rounded-2xl border border-rose-100">
                    <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{prob.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{prob.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 text-xs text-rose-700/80 flex items-center gap-2 font-medium">
              <span>⚠️ Нелекуваните микропукнатини могат да доведат до хронични дерматози.</span>
            </div>
          </div>

          {/* With Decucare */}
          <div className="bg-teal-50/50 border border-teal-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-teal-200">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-md shadow-teal-600/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-teal-950">С регенериращия крем Decucare®</h3>
                  <p className="text-xs text-teal-700 font-medium">Научно обоснована формула за бързо възстановяване</p>
                </div>
              </div>

              <div className="space-y-4">
                {solutions.map((sol, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/90 p-4 rounded-2xl border border-teal-100 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{sol.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 text-xs text-teal-800 flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Видимо възстановяване на епидермалната цялост още от 1-вия ден.</span>
            </div>
          </div>

        </div>

        {/* Interactive Interactive Before / After or Texture Comparison Slider */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-50 border border-teal-200 inline-block">
                ИНТЕРАКТИВНО СРАВНЕНИЕ
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Усетете трансформацията: От раздразнена към здрава и спокойна кожа
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Плъзнете интерактивния ползун, за да видите разликата в състоянието на увредената кожна бариера преди и след 4-дневно прилагане на крема Decucare.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 font-bold text-xs flex items-center justify-center">1</div>
                  <span><strong>Ден 1:</strong> Потушаване на паренето и зачервяването</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center">2</div>
                  <span><strong>Ден 2-3:</strong> Затваряне на микропукнатини и реепителизация</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">3</div>
                  <span><strong>Ден 4+:</strong> Пълно бариерно възстановяване и кадифена еластичност</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 group"
                >
                  <span>Вижте пакетите за възстановяване</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Interactive Before/After Visual */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden shadow-md select-none border border-slate-200">
                {/* "After" Layer (Base) */}
                <img
                  src="https://images.pexels.com/photos/7281634/pexels-photo-7281634.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="След Decucare - възстановена, здрава и гладка кожа"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  СЛЕД: Здрава & подхранена
                </div>

                {/* "Before" Layer (Clipped by slider position) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src="https://images.pexels.com/photos/9775213/pexels-photo-9775213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Преди Decucare - раздразнена, суха и зачервена кожа"
                    className="absolute inset-0 w-full h-full object-cover max-w-none filter saturate-150 contrast-110"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute top-4 left-4 bg-rose-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    ПРЕДИ: Раздразнена & чувствителна
                  </div>
                </div>

                {/* Vertical Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center"
                  style={{ left: `calc(${sliderPos}% - 2px)` }}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-lg border-2 border-teal-600 flex items-center justify-center text-teal-700 text-xs font-bold">
                    ⇄
                  </div>
                </div>
              </div>

              {/* Slider Controller */}
              <div className="w-full max-w-lg mt-4 px-2">
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>← Преди Decucare</span>
                  <span className="text-teal-700 font-bold">{sliderPos}% Сравнение</span>
                  <span>След Decucare →</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  aria-label="Сравнение преди и след"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
