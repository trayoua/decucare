import React from 'react';
import { TESTIMONIALS } from '../data/productData';
import { Star, CheckCircle, Quote, ThumbsUp, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const filteredReviews = TESTIMONIALS;

  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-50 border border-teal-200">
            ИСТИНСКИ РЕЗУЛТАТИ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Истории за облекчение и възстановяване
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Вижте какво споделят дерматолози, фармацевти и хора с чувствителна кожа, които се довериха на Decucare® крем.
          </p>

          {/* Rating summary badge */}
          <div className="inline-flex items-center gap-3 mt-6 px-4 py-2 rounded-2xl bg-amber-50/80 border border-amber-250">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-800">4.94 от 5.0 базирано на 1,200+ оценки</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 group-hover:text-teal-200 transition-colors" />

              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-600/20"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">{review.author}</h4>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-3 h-3 text-teal-700" /> Потвърдена покупка
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                </div>

                {/* Stars and Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{review.date}</span>
                </div>

                {/* Skin Issue Tag */}
                <div className="mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-teal-800">
                    Причина: {review.skinIssue}
                  </span>
                </div>

                {/* Review Text */}
                <h5 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {review.title}
                </h5>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom Helpful Bar */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-teal-700 font-medium">
                  <ShieldCheck className="w-4 h-4" /> Доказан ефект
                </span>
                <button className="flex items-center gap-1 hover:text-slate-800 transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" /> Полезно мнение
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-teal-50 border border-teal-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-teal-950">30-Дневна Гаранция за Пълно Спокойствие</h4>
              <p className="text-xs text-teal-800 mt-0.5">
                Ако Decucare не донесе очакваното облекчение на кожата ви, ние ще ви върнем 100% от сумата.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-teal-900 uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-teal-300">
            Без риск за вас
          </span>
        </div>

      </div>
    </section>
  );
};
