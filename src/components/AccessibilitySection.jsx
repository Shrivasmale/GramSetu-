import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { MdSettingsVoice, MdTouchApp, MdElderly, MdCompare } from 'react-icons/md';
import { FaUniversalAccess } from 'react-icons/fa6';

export const AccessibilitySection = () => {
  const { t } = useLanguage();

  const accessFeatures = [
    {
      key: 'voice',
      icon: <MdSettingsVoice className="text-3xl text-brandBlue dark:text-brandBlue-light" />,
      title: t('accessibility.voice.title'),
      desc: t('accessibility.voice.desc')
    },
    {
      key: 'targets',
      icon: <MdTouchApp className="text-3xl text-brandGreen dark:text-brandGreen-light" />,
      title: t('accessibility.targets.title'),
      desc: t('accessibility.targets.desc')
    },
    {
      key: 'senior',
      icon: <MdElderly className="text-3xl text-brandOrange dark:text-brandOrange-light" />,
      title: t('accessibility.senior.title'),
      desc: t('accessibility.senior.desc')
    },
    {
      key: 'contrast',
      icon: <MdCompare className="text-3xl text-purple-600 dark:text-purple-400" />,
      title: t('accessibility.contrast.title'),
      desc: t('accessibility.contrast.desc')
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="accessibility" className="py-20 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden grid-overlay transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/50 text-brandGreen dark:text-brandGreen-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-100/50 dark:border-emerald-900/40">
              <FaUniversalAccess className="text-sm" />
              <span>Inclusive Design Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-manrope text-slate-800 dark:text-white tracking-tight">
              {t('accessibility.title')}
            </h2>
            <p className="mt-4 text-lg text-slate-650 dark:text-slate-350 font-sans leading-relaxed">
              {t('accessibility.subtitle')}
            </p>
          </div>
          
          <div className="flex-shrink-0 flex space-x-4">
            <div className="px-4 py-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brandBlue" />
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Aadhaar Enabled</span>
            </div>
            <div className="px-4 py-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brandGreen" />
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">MHA Compliant</span>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {accessFeatures.map((feat) => (
            <motion.div
              key={feat.key}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800/80 hover:shadow-2xl dark:hover:shadow-black/30 transition-all duration-300 flex items-start space-x-6"
            >
              <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-2xl flex-shrink-0 shadow-inner">
                {feat.icon}
              </div>
              <div className="text-left space-y-2">
                <h3 className="text-xl font-bold font-manrope text-slate-800 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-sm font-medium text-slate-550 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Info Board */}
        <div className="mt-12 p-6 rounded-3xl bg-brandBlue/5 dark:bg-brandBlue/10 border border-brandBlue/10 dark:border-brandBlue/20 text-brandBlue dark:text-brandBlue-light flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <span className="text-2xl">💡</span>
            <p className="text-sm font-semibold text-brandBlue-dark dark:text-blue-105">
              <strong>Deep UX Insight:</strong> Physical kiosks undergo heavy glare and micro-scratches over time. GramSetu's high-contrast theme and 48px touch bounding boxes preserve operations even on worn screens.
            </p>
          </div>
          <a
            href="#kiosk-demo"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-brandBlue hover:bg-brandBlue-dark text-white font-bold text-sm shadow-md transition-colors"
          >
            Test Kiosk Accessibility Below
          </a>
        </div>

      </div>
    </section>
  );
};
export default AccessibilitySection;
