import React, { useState } from 'react';
import { INGREDIENTS } from '../data/productData';
import { Flower2, Sparkles, ShieldCheck, Droplet, HeartPulse, Check, Info } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flower2,
  Sparkles,
  ShieldCheck,
  Droplet,
  HeartPulse,
};

export const IngredientsShowcase: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(INGREDIENTS[0].id);
  const activeIngredient = INGREDIENTS.find((i) => i.id === selectedId) || INGREDIENTS[0];

  return (
    <section id="ingredients" className="py-20 bg-white relative overflow-hidden">
      {/* Background soft blur */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-50 border border-teal-200">
            ЗЛАТЕН СТАНДАРТ ЗА СЪСТАВКИ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Формула, вдъхновена от природата, <br className="hidden sm:inline" />
            <span className="text-teal-700">усъвършенствана от дерматологията</span>
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Всяка съставка в Decucare крем е подбрана в точна биосъвместима концентрация, която стимулира обновяването на кожата без агресивно натоварване.
          </p>
        </div>

        {/* Interactive Master-Detail Ingredients Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Ingredient Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Активен фито-терапевтичен комплекс:
            </h3>

            {INGREDIENTS.map((item) => {
              const isSelected = item.id === selectedId;
              const IconComp = iconMap[item.iconName] || Sparkles;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-gradient-to-r from-teal-50 to-emerald-50/60 border-teal-500 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-teal-300 hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-teal-700 text-white shadow-sm shadow-teal-700/20'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-teal-100 group-hover:text-teal-800'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-teal-950' : 'text-slate-800'}`}>
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 italic font-mono">{item.latinName}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                      isSelected ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.role.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Card for Selected Ingredient (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-9 shadow-xl relative overflow-hidden border border-slate-800">
              
              {/* Background ambient badge */}
              <div className="absolute -right-8 -bottom-8 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                    {activeIngredient.percentage}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {activeIngredient.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-200/80 font-mono mt-0.5">
                    INCI: {activeIngredient.latinName}
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold">
                  {activeIngredient.role}
                </div>
              </div>

              {/* Description */}
              <div className="py-6">
                <p className="text-slate-300 text-base leading-relaxed">
                  {activeIngredient.description}
                </p>
              </div>

              {/* Key Benefits List */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
                  Ключови ползи при увредена и чувствителна кожа:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeIngredient.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 bg-slate-800/70 border border-slate-700/80 p-3 rounded-xl text-xs sm:text-sm text-slate-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Mechanism Box */}
              <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-800/70 flex items-start gap-3">
                <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-teal-300 block">Биохимичен механизъм на действие:</span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {activeIngredient.scientificMechanism}
                  </p>
                </div>
              </div>

            </div>

            {/* Botanicals Visual Strip below deep dive */}
            <div className="mt-4 p-4 rounded-2xl bg-teal-50 border border-teal-100 flex items-center gap-4">
              <img
                src="/images/botanicals.png"
                alt="Натурални билкови съставки"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-xs shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900">100% Чиста европейска фармакопея</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Без оцветители, синтетични аромати, парабени и комедогенни масла. Безопасен за новородени и застаряваща изтънена кожа.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
