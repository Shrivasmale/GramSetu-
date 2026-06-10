import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCircleCheck } from 'react-icons/fa6';

export const CTA = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background graphic elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brandBlue/5 blur-[80px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brandOrange/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card Box */}
        <div className="bg-gradient-to-br from-brandBlue to-blue-900 rounded-[3rem] shadow-2xl p-8 md:p-14 text-white text-left grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Block: Info */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-manrope text-white tracking-tight leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed font-sans">
              {t('cta.subtitle')}
            </p>
            
            {/* Quick benefits */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</span>
                <span>Includes 12-Month Hardware Warranty & Support</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</span>
                <span>Tailored Local Language Installation & Content Translation</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</span>
                <span>Government Welfare API Provision & Dashboard Tools</span>
              </div>
            </div>
          </div>

          {/* Right Block: Request Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 text-slate-800 dark:text-slate-100 shadow-xl border border-slate-100/60 dark:border-slate-800/80 relative min-h-[360px] flex flex-col justify-center transition-colors">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="cta-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold font-manrope text-slate-850 dark:text-white mb-2">
                    {t('cta.requestDemo')}
                  </h3>
                  
                  <div className="space-y-1 text-left">
                    <label htmlFor="cta-name" className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Name / Organization</label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      placeholder={t('cta.placeholderName')}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm font-semibold text-slate-700 dark:text-slate-200 placeholder:text-slate-450 dark:placeholder:text-slate-600 focus:outline-none focus:border-brandBlue focus:bg-white dark:focus:bg-slate-900 transition-all animate-in duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label htmlFor="cta-email" className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Email Address</label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        placeholder={t('cta.placeholderEmail')}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm font-semibold text-slate-700 dark:text-slate-200 placeholder:text-slate-450 dark:placeholder:text-slate-600 focus:outline-none focus:border-brandBlue focus:bg-white dark:focus:bg-slate-900 transition-all animate-in duration-200"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label htmlFor="cta-phone" className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Phone Number</label>
                      <input
                        id="cta-phone"
                        type="tel"
                        required
                        placeholder={t('cta.placeholderPhone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm font-semibold text-slate-700 dark:text-slate-200 placeholder:text-slate-455 dark:placeholder:text-slate-600 focus:outline-none focus:border-brandBlue focus:bg-white dark:focus:bg-slate-900 transition-all animate-in duration-200"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-4 py-4 rounded-xl bg-brandBlue hover:bg-brandBlue-dark text-white font-bold shadow-lg shadow-brandBlue/10 hover:shadow-brandBlue/35 transition-all flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <span>{t('cta.submit')}</span>
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="cta-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <FaCircleCheck className="text-6xl text-emerald-500 animate-bounce" />
                  <h3 className="text-2xl font-bold font-manrope text-slate-800 dark:text-white">
                    Request Received!
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-450 leading-relaxed max-w-sm font-sans">
                    {t('cta.successMsg')}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
export default CTA;
