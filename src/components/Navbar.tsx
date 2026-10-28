import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Предимства', href: '#benefits' },
    { label: 'Формула и съставки', href: '#ingredients' },
    { label: 'Клиничен ефект', href: '#science' },
    { label: 'Отзиви', href: '#testimonials' },
    { label: 'Цени и пакети', href: '#pricing' },
    { label: 'Въпроси', href: '#faq' }
  ];

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-950 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center justify-center bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full font-semibold text-[11px] tracking-wide border border-emerald-400/40">
              СПЕЦИАЛНА ОФЕРТА
            </span>
            <span className="hidden sm:inline text-emerald-100">
              Дерматологична грижа за чувствителна кожа:
            </span>
            <span className="font-medium text-emerald-200">
              Спестете до -54% + Безплатна доставка днес!
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-emerald-200/90 text-xs">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> 100% Оригинален продукт
            </span>
            <span>•</span>
            <a href="tel:+35980012345" className="hover:text-white flex items-center gap-1 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> Консултация: 0800 12 345
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-lg shadow-teal-950/5 py-3'
            : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
                <span className="font-bold text-lg tracking-wider">D+</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                  DECUCARE<sup className="text-teal-600 font-bold text-xs">®</sup>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-teal-700 -mt-1">
                  Medical Derm Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-6 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2.5 py-1.5 rounded-lg hover:text-teal-700 hover:bg-teal-50/60 transition-all text-slate-600 font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOrderClick}
                className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 hover:from-teal-500 hover:to-emerald-600 shadow-md shadow-teal-700/25 hover:shadow-teal-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-300 animate-pulse" />
                  <span>Поръчай с отстъпка</span>
                  <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:text-teal-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-semibold text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOrderClick();
                  }}
                  className="w-full py-3 text-center font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-md transition-colors"
                >
                  Поръчай Decucare Крем (-54%)
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>30-дневна гаранция за връщане на парите</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
