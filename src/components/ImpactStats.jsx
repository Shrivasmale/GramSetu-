import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { FaGlobe, FaPeopleGroup, FaHandHoldingHeart, FaHourglassHalf } from 'react-icons/fa6';

const AnimatedCounter = ({ targetValue, duration = 1.5 }) => {
  const [displayCount, setDisplayCount] = useState('0');
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Filter numerical parts out
    const numberStr = targetValue.replace(/[^0-9]/g, '');
    const suffix = targetValue.replace(/[0-9]/g, ''); // '+' or '/7'
    const targetNumber = parseInt(numberStr, 10);

    if (isNaN(targetNumber)) {
      setDisplayCount(targetValue);
      return;
    }

    let startValue = 0;
    const steps = 60;
    const stepDuration = (duration * 1000) / steps;
    const increment = targetNumber / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      startValue += increment;
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayCount(`${targetNumber.toLocaleString()}${suffix}`);
      } else {
        setDisplayCount(`${Math.floor(startValue).toLocaleString()}${suffix}`);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetValue, isInView, duration]);

  return <span ref={counterRef}>{displayCount}</span>;
};

export const ImpactStats = () => {
  const { t } = useLanguage();

  const statisticsList = [
    {
      key: 's1',
      icon: <FaGlobe className="text-3xl text-brandBlue dark:text-brandBlue-light" />,
      target: t('stats.s1.num'),
      label: t('stats.s1.label'),
      bgClass: 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30'
    },
    {
      key: 's2',
      icon: <FaPeopleGroup className="text-3xl text-brandGreen dark:text-brandGreen-light" />,
      target: t('stats.s2.num'),
      label: t('stats.s2.label'),
      bgClass: 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30'
    },
    {
      key: 's3',
      icon: <FaHandHoldingHeart className="text-3xl text-brandOrange dark:text-brandOrange-light" />,
      target: t('stats.s3.num'),
      label: t('stats.s3.label'),
      bgClass: 'bg-orange-50/50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900/30'
    },
    {
      key: 's4',
      icon: <FaHourglassHalf className="text-3xl text-purple-600 dark:text-purple-400" />,
      target: t('stats.s4.num'),
      label: t('stats.s4.label'),
      bgClass: 'bg-purple-50/50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative border-b border-slate-100 dark:border-slate-850 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-manrope text-slate-800 dark:text-white tracking-tight">
            {t('stats.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-650 dark:text-slate-350 font-sans leading-relaxed">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Counters Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statisticsList.map((stat) => (
            <motion.div
              key={stat.key}
              variants={itemVariants}
              className={`rounded-3xl border p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${stat.bgClass}`}
            >
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-inner mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-black font-manrope text-slate-800 dark:text-white tracking-tight">
                <AnimatedCounter targetValue={stat.target} />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
export default ImpactStats;
