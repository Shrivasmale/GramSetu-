import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaCircleXmark, FaCircleCheck, FaBus, FaRegHourglassHalf, FaFileLines, FaLanguage } from 'react-icons/fa6';
import { MdOutlineTouchApp, MdModelTraining, MdLanguage, MdFlashOn } from 'react-icons/md';

export const ProblemSolution = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const comparisonPoints = [
    {
      iconBefore: <FaBus className="text-xl text-rose-500" />,
      textBefore: t('problem.p1'),
      iconAfter: <MdOutlineTouchApp className="text-2xl text-emerald-405" />,
      textAfter: t('problem.s1')
    },
    {
      iconBefore: <FaRegHourglassHalf className="text-xl text-rose-500" />,
      textBefore: t('problem.p2'),
      iconAfter: <MdModelTraining className="text-2xl text-emerald-405" />,
      textAfter: t('problem.s2')
    },
    {
      iconBefore: <FaFileLines className="text-xl text-rose-500" />,
      textBefore: t('problem.p3'),
      iconAfter: <MdFlashOn className="text-2xl text-emerald-405" />,
      textAfter: t('problem.s3')
    },
    {
      iconBefore: <FaLanguage className="text-xl text-rose-500" />,
      textBefore: t('problem.p4'),
      iconAfter: <MdLanguage className="text-2xl text-emerald-405" />,
      textAfter: t('problem.s4')
    }
  ];

  return (
    <section id="impact" className="py-20 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden transition-colors duration-300">
      {/* Dynamic curve transitions */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white dark:bg-slate-950 transition-colors" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-manrope text-slate-800 dark:text-white tracking-tight">
            {t('problem.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-650 dark:text-slate-350 font-sans leading-relaxed">
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Comparison Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* BEFORE: Traditional Obstacles */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800/80 hover:shadow-2xl dark:hover:shadow-black/30 transition-all duration-305 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30">
                  <FaCircleXmark className="text-2xl text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold font-manrope text-slate-800 dark:text-white">
                  {t('problem.before')}
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100/60 dark:border-slate-800/40">
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex-shrink-0 mt-0.5">
                      {point.iconBefore}
                    </div>
                    <p className="text-base font-semibold text-slate-650 dark:text-slate-300 leading-snug">
                      {point.textBefore}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-400 dark:text-slate-500 font-medium italic">
              * Results in lost wages, frustration, and complete information vacuum.
            </div>
          </motion.div>

          {/* AFTER: GramSetu Solution */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-brandBlue to-blue-800 rounded-[2rem] p-8 shadow-xl text-white hover:shadow-2xl hover:shadow-brandBlue/15 transition-all duration-305 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/30">
                  <FaCircleCheck className="text-2xl text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold font-manrope text-white">
                  {t('problem.after')}
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors">
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-950 flex-shrink-0 mt-0.5 shadow-md">
                      {point.iconAfter}
                    </div>
                    <p className="text-base font-bold text-white leading-snug">
                      {point.textAfter}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-sm text-blue-200 dark:text-blue-300 font-medium">
              ✓ Enables fast, transparent, and direct service delivery within the Gram Panchayat.
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
export default ProblemSolution;
