import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  MdSettingsVoice, MdSignalCellularOff, 
  MdFingerprint, MdDns, MdOutlineAnalytics 
} from 'react-icons/md';

export const FutureVision = () => {
  const { t } = useLanguage();

  const futureItems = [
    {
      key: 'f1',
      icon: <MdSettingsVoice className="text-3xl text-brandBlue dark:text-brandBlue-light" />,
      title: t('future.f1.title'),
      desc: t('future.f1.desc'),
      status: 'Pilot Stage',
      statusColor: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-250 dark:border-emerald-900/40'
    },
    {
      key: 'f2',
      icon: <MdSignalCellularOff className="text-3xl text-brandGreen dark:text-brandGreen-light" />,
      title: t('future.f2.title'),
      desc: t('future.f2.desc'),
      status: 'In Development',
      statusColor: 'bg-blue-50 dark:bg-blue-950/30 text-brandBlue dark:text-brandBlue-light border-blue-200 dark:border-blue-900/40'
    },
    {
      key: 'f3',
      icon: <MdFingerprint className="text-3xl text-brandOrange dark:text-brandOrange-light" />,
      title: t('future.f3.title'),
      desc: t('future.f3.desc'),
      status: 'R&D Phase',
      statusColor: 'bg-orange-50 dark:bg-orange-950/30 text-brandOrange dark:text-brandOrange-light border-orange-200 dark:border-orange-900/40'
    },
    {
      key: 'f4',
      icon: <MdDns className="text-3xl text-indigo-600 dark:text-indigo-400" />,
      title: t('future.f4.title'),
      desc: t('future.f4.desc'),
      status: 'API Testing',
      statusColor: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/40'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-405 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-indigo-150/50 dark:border-indigo-900/40">
            Product Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-manrope text-slate-800 dark:text-white tracking-tight">
            {t('future.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-655 dark:text-slate-350 font-sans leading-relaxed">
            {t('future.subtitle')}
          </p>
        </div>

        {/* Roadmap Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {futureItems.map((item) => (
            <motion.div
              key={item.key}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800/80 hover:shadow-2xl hover:border-brandBlue/20 dark:hover:border-brandBlue-light/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with status tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-2xl shadow-inner text-slate-700 dark:text-slate-300">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-manrope text-slate-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed text-left">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider text-left">
                Milestone target: Q4 2026
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Preview Box (Smart Analytics) */}
        <div className="mt-12 bg-gradient-to-br from-slate-850 to-slate-950 border border-slate-750 dark:border-slate-800 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
          <div className="absolute top-[-50%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brandBlue/10 blur-[80px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 text-left space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brandBlue-light bg-brandBlue-dark/40 px-3 py-1 rounded border border-brandBlue/30">Upcoming Module</span>
              <h3 className="text-2xl font-extrabold font-manrope text-white">Central GramSetu Analytics Dashboard</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Empower district magistrates and panchayat leaders with live statistics on scheme requests, certificate print queues, health queries, and job registrations to allocate local budget resources efficiently.
              </p>
            </div>
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-4">
              {/* Simulated mini dashboard bars */}
              <div className="space-y-3 text-left">
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span>AGRICULTURAL QUERIES</span>
                    <span>74%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-brandGreen h-full rounded-full" style={{ width: '74%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span>CITIZEN APPLICATIONS</span>
                    <span>89%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-brandOrange h-full rounded-full" style={{ width: '89%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span>EMERGENCY DISPATCH RATE</span>
                    <span>99%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '99%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default FutureVision;
