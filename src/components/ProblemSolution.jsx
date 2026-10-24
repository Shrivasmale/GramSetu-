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
      iconBefore: <FaBus className="text-lg text-white" />,
      textBefore: t('problem.p1'),
      iconAfter: <MdOutlineTouchApp className="text-xl text-white" />,
      textAfter: t('problem.s1')
    },
    {
      iconBefore: <FaRegHourglassHalf className="text-lg text-white" />,
      textBefore: t('problem.p2'),
      iconAfter: <MdModelTraining className="text-xl text-white" />,
      textAfter: t('problem.s2')
    },
    {
      iconBefore: <FaFileLines className="text-lg text-white" />,
      textBefore: t('problem.p3'),
      iconAfter: <MdFlashOn className="text-xl text-white" />,
      textAfter: t('problem.s3')
    },
    {
      iconBefore: <FaLanguage className="text-lg text-white" />,
      textBefore: t('problem.p4'),
      iconAfter: <MdLanguage className="text-xl text-white" />,
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
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-900/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Real Impact & Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('problem.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-sans leading-relaxed font-normal">
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
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 shadow-xl border-2 border-rose-200/90 dark:border-rose-900/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 shadow-xs">
                  <FaCircleXmark className="text-2xl" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Bottlenecks & Barriers</span>
                  <h3 className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    {t('problem.before')}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 hover:bg-rose-50/80 dark:hover:bg-rose-950/30 transition-colors">
                    <div className="p-2.5 rounded-xl bg-rose-500 text-white shadow-xs flex-shrink-0 mt-0.5 flex items-center justify-center w-10 h-10">
                      {point.iconBefore}
                    </div>
                    <p className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug pt-1">
                      {point.textBefore}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs sm:text-sm text-rose-900 dark:text-rose-200 font-semibold flex items-center space-x-2.5">
              <span className="text-base">⚠️</span>
              <span>Results in lost wages, day-long travel, and complete information vacuum.</span>
            </div>
          </motion.div>

          {/* AFTER: GramSetu Solution */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 shadow-xl border-2 border-emerald-500/50 dark:border-emerald-500/40 hover:shadow-2xl hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-emerald-600 dark:text-emerald-400 shadow-xs">
                  <FaCircleCheck className="text-2xl" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Digital Empowerment</span>
                  <h3 className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    {t('problem.after')}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 hover:bg-emerald-50/90 dark:hover:bg-emerald-950/30 transition-colors">
                    <div className="p-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white shadow-xs flex-shrink-0 mt-0.5 flex items-center justify-center w-10 h-10">
                      {point.iconAfter}
                    </div>
                    <p className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug pt-1">
                      {point.textAfter}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-semibold flex items-center space-x-2.5">
              <span className="text-base">✓</span>
              <span>Fast, transparent, and direct service delivery within the Gram Panchayat.</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
export default ProblemSolution;
