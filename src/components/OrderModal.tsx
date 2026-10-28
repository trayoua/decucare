import React, { useState } from 'react';
import { PackageOffer, PRICING_PACKAGES } from '../data/productData';
import { X, CheckCircle, ShieldCheck, Truck, Lock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: PackageOffer;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, initialPackage }) => {
  const [selectedPkg, setSelectedPkg] = useState<PackageOffer>(
    initialPackage || PRICING_PACKAGES[1]
  );

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    deliveryType: 'speedy_office', // speedy_office, speedy_address, econt_office
    deliveryAddress: '',
    paymentMethod: 'cod', // cod, card
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync if initialPackage changes
  React.useEffect(() => {
    if (initialPackage) {
      setSelectedPkg(initialPackage);
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-700/60 flex items-center justify-center text-emerald-300 font-bold text-sm">
              D+
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                Бърза & Сигурна Поръчка на Decucare®
              </h3>
              <p className="text-xs text-teal-200">
                Специална промоционална цена • Плащане при преглед
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Затвори"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              Благодарим Ви за поръчката!
            </h3>

            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Вашата заявка за <strong>{selectedPkg.name}</strong> бе приета успешно. Наш здравен консултант ще се свърже с Вас на телефон <strong>{formData.phone || 'посочения номер'}</strong> за кратко потвърждение.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto space-y-1.5 text-left">
              <div className="flex justify-between">
                <span>Пакет:</span>
                <span className="font-bold text-slate-900">{selectedPkg.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Крайна сума:</span>
                <span className="font-bold text-teal-700">{selectedPkg.price.toFixed(2)} лв.</span>
              </div>
              <div className="flex justify-between">
                <span>Доставка:</span>
                <span className="font-bold text-emerald-700">24-48 часа (С куриер)</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-teal-700 text-white font-bold text-sm hover:bg-teal-800 transition-colors cursor-pointer"
            >
              Затвори прозореца
            </button>
          </div>
        ) : (
          /* Order Form */
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6">
            
            {/* Step 1: Package Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                1. Изберете пакет:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PRICING_PACKAGES.map((pkg) => {
                  const isChecked = selectedPkg.id === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPkg(pkg)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-teal-600 bg-teal-50/70 ring-2 ring-teal-500/20'
                          : 'border-slate-200 hover:border-teal-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">{pkg.tubes} бр.</span>
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded">
                          -{pkg.discountPercent}%
                        </span>
                      </div>
                      <div className="mt-1 font-black text-slate-900 text-base">
                        {pkg.price.toFixed(2)} лв.
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {pkg.tubes === 1 ? 'Старт' : pkg.tubes === 2 ? 'Препоръчан' : 'Максимум'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Shipping Details */}
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                2. Данни за доставка:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Име и Фамилия *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Телефонен номер *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Град / Населено място *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="напр. София, Пловдив, Варна..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Куриер / Място за доставка
                  </label>
                  <select
                    value={formData.deliveryType}
                    onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 bg-white"
                  >
                    <option value="speedy_office">Офис на Спиди (Speedy)</option>
                    <option value="econt_office">Офис на Еконт (Econt)</option>
                    <option value="personal_address">Личен адрес (до врата)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Адрес за доставка или Име на куриерски офис *
                </label>
                <input
                  type="text"
                  required
                  placeholder="напр. Офис Спиди ул. Христо Ботев 12 или адрес..."
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600"
                />
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                3. Начин на плащане:
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 has-[:checked]:border-teal-600 has-[:checked]:bg-teal-50">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="accent-teal-600"
                  />
                  <div className="text-xs">
                    <span className="font-bold block text-slate-800">Наложен платеж</span>
                    <span className="text-slate-500">При преглед на пратката</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 has-[:checked]:border-teal-600 has-[:checked]:bg-teal-50">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="accent-teal-600"
                  />
                  <div className="text-xs">
                    <span className="font-bold block text-slate-800">Карта / Онлайн</span>
                    <span className="text-slate-500">Сигурно криптирано плащане</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Обща сума за плащане:</span>
                <span className="text-2xl font-black text-slate-900">{selectedPkg.price.toFixed(2)} лв.</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-700 block">
                  {selectedPkg.id === 'single' ? '+ 4.90 лв доставка' : 'БЕЗПЛАТНА ДОСТАВКА'}
                </span>
                <span className="text-[11px] text-slate-500">Спестявате {selectedPkg.savings.toFixed(2)} лв.</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-800 hover:from-teal-600 hover:to-emerald-700 text-white font-extrabold text-base shadow-xl shadow-teal-900/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Обработва се...</span>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>ПОТВЪРДИ ПОРЪЧКАТА СЕГА</span>
                </>
              )}
            </button>

            {/* Security Guarantee Micro */}
            <div className="flex items-center justify-center gap-6 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-teal-700" /> 256-bit SSL защита
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-700" /> 30 дни право на връщане
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-teal-700" /> Преглед преди плащане
              </span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
