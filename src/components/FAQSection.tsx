import React, { useState } from 'react';
import { FAQS } from '../data/productData';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200">
            ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Всичко, което трябва да знаете за Decucare®
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Имате допълнителни въпроси? Ето отговорите на най-честите питания от нашите клиенти.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs hover:border-teal-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                    <p className="pl-11.5">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact help card */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-750 flex items-center justify-center">
              <MessageCircleQuestion className="w-5 h-5 text-teal-700" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-slate-900">Имате специфичен медицински въпрос?</span>
              <span className="block text-xs text-slate-500">Нашите фармацевтични консултанти са на разположение: Пон - Пет 09:00 - 18:00</span>
            </div>
          </div>
          <a
            href="tel:+35980012345"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors whitespace-nowrap"
          >
            Обадете се безплатно: 0800 12 345
          </a>
        </div>

      </div>
    </section>
  );
};
