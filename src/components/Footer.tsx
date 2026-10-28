import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 flex items-center justify-center text-white font-bold">
                D+
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                DECUCARE<sup className="text-teal-400 font-bold text-xs">®</sup>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Регенериращ и възстановяващ крем за специална дерматологична грижа при чувствителна, раздразнена или увредена кожа. С лайка, невен, алое и D-пантенол.
            </p>

            <div className="flex items-center gap-2 text-slate-300 font-semibold pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Сертифициран дерматологичен продукт по GMP</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Навигация
            </h4>
            <ul className="space-y-2">
              <li><a href="#benefits" className="hover:text-teal-400 transition-colors">Предимства</a></li>
              <li><a href="#ingredients" className="hover:text-teal-400 transition-colors">Активни съставки</a></li>
              <li><a href="#science" className="hover:text-teal-400 transition-colors">Клиничен ефект</a></li>
              <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Мнения на клиенти</a></li>
              <li><a href="#pricing" className="hover:text-teal-400 transition-colors">Цени и промоции</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">Често задавани въпроси</a></li>
            </ul>
          </div>

          {/* Safety & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Стандарти & Грижа
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Хипоалергенна формула</li>
              <li>Без изкуствени парфюми</li>
              <li>Без съдържание на парабени</li>
              <li>Не е тествано върху животни</li>
              <li>Подходящо при бебешко подсичане</li>
              <li>30 дни гаранция за връщане</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Връзка с нас
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href="tel:+35980012345" className="hover:text-teal-300 font-medium">0800 12 345 (Безплатен)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>support@decucare.bg</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>България, София, бул. България 102</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Работно време: Пон-Петък 09:00 - 18:00 ч.
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="py-6 border-b border-slate-900 text-[11px] text-slate-500 leading-relaxed text-justify">
          <p>
            <strong>Медицинско предупреждение:</strong> Decucare® крем е дерматокозметичен регенериращ продукт за външно приложение при раздразнена, чувствителна и суха кожа. Продуктът не е лекарствено средство и не замества консултация със специалист при тежки медицински състояния или системни инфекции. Индивидуалните резултати могат да варират в зависимост от типа кожа и редовността на нанасяне.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} DECUCARE® Derm Care Inc. Всички права запазени.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">Политика за поверителност</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Общи условия</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Доставка и връщане</a>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Създаден с</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>за чувствителна кожа</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
