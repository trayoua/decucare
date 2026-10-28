import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Layers, Droplet, Sun, Activity } from 'lucide-react';

export const ProductDeepDive: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  const [selectedUse, setSelectedUse] = useState<number>(0);

  const indications = [
    {
      title: 'Силно чувствителна и реактивна кожа',
      icon: Activity,
      desc: 'Зачервявания от студ, вятър, сух въздух, хлорирана вода или стрес.',
      tag: 'Ежедневна защита'
    },
    {
      title: 'Напукана кожа на ръце, пети и лакти',
      icon: Layers,
      desc: 'Дълбоко възстановява хидролипидната бариера и запечатва влагата.',
      tag: 'Интензивно омекотяване'
    },
    {
      title: 'Протриване и залежаване (декубитус)',
      icon: ShieldCheck,
      desc: 'Предотвратява мацерацията на тъканите и стимулира гранулацията.',
      tag: 'Специална медицинска грижа'
    },
    {
      title: 'След изгаряния, пилинг и епилация',
      icon: Sun,
      desc: 'Охлажда и премахва усещането за парене, ускорявайки зарастването.',
      tag: 'Спешно облекчение'
    }
  ];

  return (
    <section id="science" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-100/60 border border-teal-200">
            МЕДИЦИНСКА ТЕКСТУРА & ДЕЙСТВИЕ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Формулиран за максимална попиваемост <br className="hidden sm:inline" />
            <span className="text-teal-700">без мазен остатък</span>
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Уникална копринено-мека емулсия, която образува дишащ защитен микрофилм, позволяващ на тъканта да се самовъзстановява без блокиране на порите.
          </p>
        </div>

        {/* Feature showcase split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Texture Macro image container */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="/images/decucare-texture.png"
                alt="Decucare Крем - копринена лечебна текстура"
                className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md text-xs font-bold text-white mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Микро-емулсионна матрица
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Усещане за незабавно успокояване
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Кадифена консистенция, която се разнася с лекота дори върху най-болезнените и възпалени зони, без да изисква натиск.
                </p>
              </div>
            </div>

            {/* Floating feature pills */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Droplet className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-900">Попива за 45 секунди</span>
                <span className="text-[11px] text-slate-500">Не цапа дрехи и спално бельо</span>
              </div>
            </div>
          </div>

          {/* Interactive Indication Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Кога е незаменим кремът Decucare®?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Изберете състояние за повече информация:
            </p>

            <div className="space-y-3">
              {indications.map((item, index) => {
                const IconComponent = item.icon;
                const isSelected = selectedUse === index;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedUse(index)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-teal-500 shadow-md ring-2 ring-teal-500/20'
                        : 'bg-white/70 border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                            {item.tag}
                          </span>
                          <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="hidden sm:block">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isSelected ? 'bg-teal-100 text-teal-800' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          ✓
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-teal-700 hover:bg-teal-800 shadow-md transition-colors"
              >
                <span>Поръчайте Decucare Крем за домашната аптечка</span>
              </button>
            </div>

          </div>

        </div>

        {/* Doctor Endorsement Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src="/images/doctor-consult.png"
                  alt="Д-р Мария Стоянова - Дерматолог"
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover ring-4 ring-teal-500/30 shadow-2xl"
                />
                <div className="absolute -bottom-3 -right-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
                  МЕДИЦИНСКО ДОВЕРИЕ
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Дерматологично становище</span>
              </div>
              <blockquote className="text-base sm:text-lg text-slate-200 italic leading-relaxed">
                „В клиничната практика често се сблъсквам с пациенти с компрометирана кожна бариера, които страдат от неподходящи продукти с парфюми и алкохоли. <strong>Decucare</strong> предлага прецизно дозиран баланс между епителизиращия D-пантенол и лечебните билкови екстракти от лайка и невен. Резултатът е ускорено оздравяване без усещане за тежест или омазняване.“
              </blockquote>
              <div>
                <span className="block font-bold text-white text-base">Д-р Мария Стоянова, д.м.</span>
                <span className="block text-xs text-teal-300">
                  Специалист Дермато-венеролог, Клиничен консултант
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
