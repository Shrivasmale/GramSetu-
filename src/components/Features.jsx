import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  FaWheatAwn, FaGraduationCap, FaBriefcase, 
  FaUserGroup, FaKitMedical, FaTriangleExclamation, 
  FaFileContract, FaPersonDress, FaPersonCane, FaRegCircleCheck
} from 'react-icons/fa6';

export const Features = () => {
  const { t } = useLanguage();

  const categories = [
    {
      key: 'govt',
      icon: <FaFileContract className="text-3xl" />,
      colorClass: 'border-blue-100 dark:border-slate-800 hover:border-blue-450 dark:hover:border-blue-500 shadow-blue-100/10 hover:shadow-blue-500/10',
      iconBg: 'bg-blue-50 dark:bg-blue-950/45 text-brandBlue dark:text-brandBlue-light',
      checkColor: 'text-brandBlue dark:text-brandBlue-light bg-blue-50 dark:bg-blue-950/20'
    },
    {
      key: 'education',
      icon: <FaGraduationCap className="text-3xl" />,
      colorClass: 'border-cyan-100 dark:border-slate-800 hover:border-cyan-450 dark:hover:border-cyan-500 shadow-cyan-100/10 hover:shadow-cyan-500/10',
      iconBg: 'bg-cyan-50 dark:bg-cyan-950/45 text-cyan-600 dark:text-cyan-400',
      checkColor: 'text-cyan-500 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/20'
    },
    {
      key: 'farmer',
      icon: <FaWheatAwn className="text-3xl" />,
      colorClass: 'border-emerald-100 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-emerald-100/10 hover:shadow-emerald-500/10',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/45 text-emerald-600 dark:text-emerald-400',
      checkColor: 'text-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20'
    },
    {
      key: 'healthcare',
      icon: <FaKitMedical className="text-3xl" />,
      colorClass: 'border-red-100 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 shadow-red-100/10 hover:shadow-red-500/10',
      iconBg: 'bg-red-50 dark:bg-red-950/45 text-red-600 dark:text-red-400',
      checkColor: 'text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-950/20'
    },
    {
      key: 'employment',
      icon: <FaBriefcase className="text-3xl" />,
      colorClass: 'border-indigo-100 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-indigo-100/10 hover:shadow-indigo-500/10',
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/45 text-indigo-600 dark:text-indigo-400',
      checkColor: 'text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20'
    },
    {
      key: 'women',
      icon: <FaPersonDress className="text-3xl" />,
      colorClass: 'border-rose-100 dark:border-slate-800 hover:border-rose-450 dark:hover:border-rose-500 shadow-rose-100/10 hover:shadow-rose-500/10',
      iconBg: 'bg-rose-50 dark:bg-rose-950/45 text-rose-600 dark:text-rose-400',
      checkColor: 'text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20'
    },
    {
      key: 'senior',
      icon: <FaPersonCane className="text-3xl" />,
      colorClass: 'border-amber-100 dark:border-slate-800 hover:border-amber-450 dark:hover:border-amber-500 shadow-amber-100/10 hover:shadow-amber-500/10',
      iconBg: 'bg-amber-50 dark:bg-amber-950/45 text-amber-600 dark:text-amber-400',
      checkColor: 'text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20'
    },
    {
      key: 'emergency',
      icon: <FaTriangleExclamation className="text-3xl" />,
      colorClass: 'border-orange-100 dark:border-slate-800 hover:border-orange-400 dark:hover:border-orange-500 shadow-orange-100/10 hover:shadow-orange-500/10',
      iconBg: 'bg-orange-50 dark:bg-orange-950/45 text-brandOrange dark:text-brandOrange-light',
      checkColor: 'text-brandOrange dark:text-brandOrange-light bg-orange-550 dark:bg-orange-950/20'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 14 } }
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/50 text-brandBlue dark:text-brandBlue-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100/50 dark:border-blue-900/40">
            Services Available
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-manrope text-slate-800 dark:text-white tracking-tight">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-650 dark:text-slate-400 font-sans leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => {
            const items = t(`features.categories.${cat.key}.items`);
            
            return (
              <motion.div
                key={cat.key}
                variants={cardVariants}
                className={`bg-white dark:bg-slate-900 rounded-3xl border p-5 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${cat.colorClass}`}
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl shadow-inner ${cat.iconBg}`}>
                      {cat.icon}
                    </div>
                    <span className="text-[9px] font-extrabold text-slate-450 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full px-2 py-0.5 uppercase tracking-wider">
                      {t(`features.categories.${cat.key}.desc`).split(" & ")[0]}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-extrabold font-manrope text-slate-850 dark:text-white mb-1.5 line-clamp-1">
                    {t(`features.categories.${cat.key}.title`)}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {t(`features.categories.${cat.key}.desc`)}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-2.5">
                    {Array.isArray(items) && items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2.5 text-slate-700 dark:text-slate-300 text-left">
                        <span className={`p-0.5 rounded-full flex-shrink-0 mt-0.5 ${cat.checkColor}`}>
                          <FaRegCircleCheck className="text-xs" />
                        </span>
                        <span className="text-xs font-semibold leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                  <span>Maharashtra RTS</span>
                  <span className="text-brandBlue dark:text-brandBlue-light hover:underline cursor-pointer">Verify →</span>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
export default Features;
