import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWheatAwn, FaGraduationCap, FaUserTie, FaUserGroup, 
  FaCloudSun, FaArrowRight, FaClock, FaWifi, FaChevronRight,
  FaPersonDress, FaPersonCane
} from 'react-icons/fa6';
import { MdTrendingUp, MdLocationOn } from 'react-icons/md';

export const Hero = () => {
  const { t, currentLang } = useLanguage();
  const [activePersonaIdx, setActivePersonaIdx] = useState(0);

  const personas = ['farmer', 'student', 'citizen', 'jobSeeker', 'womanEnt', 'seniorCitizen'];
  const personaColors = {
    farmer: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-500', primary: 'bg-brandGreen' },
    student: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-brandBlue-light', primary: 'bg-brandBlue' },
    citizen: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-brandOrange-light', primary: 'bg-brandOrange' },
    jobSeeker: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', primary: 'bg-indigo-650' },
    womanEnt: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', primary: 'bg-rose-600' },
    seniorCitizen: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-450', primary: 'bg-amber-600' }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePersonaIdx((prev) => (prev + 1) % personas.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const activePersona = personas[activePersonaIdx];
  const activeColor = personaColors[activePersona];

  const previewContent = {
    en: {
      farmer: {
        title: "Kisan Suvidha Portal",
        item1: "Wheat Mandi Price: ₹2,500 ↑",
        item2: "Rain Advisory: Scattered storms predicted",
        item3: "e-Peek Pahani: Active"
      },
      student: {
        title: "Youth Shiksha Portal",
        item1: "MahaDBT: Apply by July 31",
        item2: "Skill Training: Solar technician open",
        item3: "Apprenticeship: Direct application"
      },
      citizen: {
        title: "Gram Panchayat Services",
        item1: "Apply Caste Certificate: Setu Kendra",
        item2: "Land records: 7/12 Utara print",
        item3: "Gram Sabha: Sunday at 11:00 AM"
      },
      jobSeeker: {
        title: "MahaSwayam Employment",
        item1: "Vacancy: Substation Lineman Assistant",
        item2: "Training: Free bookkeeping slot",
        item3: "Resume: Profile verification done"
      },
      womanEnt: {
        title: "Mahila Udyog Portal",
        item1: "Lakhpati Didi: Loan up to ₹1 Lakh",
        item2: "Bachat Gat Seed Fund: Credited",
        item3: "Safety Helpline: 1091"
      },
      seniorCitizen: {
        title: "Jyeshtha Welfare Portal",
        item1: "Shravanbal Pension: ₹1,500/mo",
        item2: "Ayushman Card: Free 5L Insurance",
        item3: "Elderline: 14567"
      }
    },
    hi: {
      farmer: {
        title: "किसान सुविधा पोर्टल",
        item1: "गेहूं मंडी भाव: ₹२,५०० ↑",
        item2: "मौसम सलाह: आंधी-तूफान की आशंका",
        item3: "ई-पीक पाहणी: फसल पंजीकरण चालू"
      },
      student: {
        title: "युवा शिक्षा पोर्टल",
        item1: "महाडीबीटी: अंतिम तिथि ३१ जुलाई",
        item2: "कौशल प्रशिक्षण: सोलर तकनीशियन कोर्स",
        item3: "शिक्षुता: सीधे कैप आवेदन"
      },
      citizen: {
        title: "ग्राम पंचायत सेवाएं",
        item1: "जाति प्रमाणपत्र: सेतु केंद्र आवेदन",
        item2: "भूमि रिकॉर्ड: ७/१२ उतारा प्रिंट",
        item3: "ग्राम सभा बैठक: रविवार सुबह ११:०० बजे"
      },
      jobSeeker: {
        title: "महास्वयं रोजगार",
        item1: "रिक्ति: सबस्टेशन लाइनमैन सहायक",
        item2: "प्रशिक्षण: मुफ्त बुककीपिंग बैच",
        item3: "बायो-डाटा: प्रोफाइल सत्यापित"
      },
      womanEnt: {
        title: "महिला उद्योग पोर्टल",
        item1: "लखपति दीदी: ₹१ लाख तक ऋण",
        item2: "बचत गट सीड फंड: जमा",
        item3: "सुरक्षा हेल्पलाइन: १०९१"
      },
      seniorCitizen: {
        title: "ज्येष्ठ कल्याण पोर्टल",
        item1: "श्रावणबाल पेंशन: ₹१,५००/माह",
        item2: "आयुष्मान कार्ड: ५ लाख मुफ्त बीमा",
        item3: "एल्डरलाइन: १४५६७"
      }
    },
    mr: {
      farmer: {
        title: "शेतकरी सुविधा पोर्टल",
        item1: "गहू बाजार भाव: ₹२,५०० ↑",
        item2: "हवामान अंदाज: वादळी पावसाचा इशारा",
        item3: "ई-पीक पाहणी: पीक नोंदणी सक्रिय"
      },
      student: {
        title: "युवा शिक्षण पोर्टल",
        item1: "महाडीबीटी: ३१ जुलैपर्यंत मुदत",
        item2: "कौशल्य प्रशिक्षण: सोलर तंत्रज्ञ प्रवेश",
        item3: "शिकाऊ उमेदवारी: थेटCap नोंदणी"
      },
      citizen: {
        title: "ग्रामपंचायत सेवा",
        item1: "जातीचा दाखला: ऑनलाईन सेतु अर्ज",
        item2: "जमीन उतारा: ७/१२ उतारा प्रिंट",
        item3: "ग्रामसभा बैठक: रविवार सकाळी ११:००"
      },
      jobSeeker: {
        title: "महास्वयं रोजगार",
        item1: "जागा: सबस्टेशन लाईनमन सहाय्यक",
        item2: "प्रशिक्षण: मोफत जमाखर्च वर्ग",
        item3: "बायो-डाटा: प्रोफाइल पडताळणी पूर्ण"
      },
      womanEnt: {
        title: "महिला उद्योग पोर्टल",
        item1: "लखपती दीदी: ₹१ लाखापर्यंत कर्ज",
        item2: "बचत गट फिरता निधी: जमा",
        item3: "सुरक्षा मदत: १०९१"
      },
      seniorCitizen: {
        title: "ज्येष्ठ कल्याण पोर्टल",
        item1: "श्रावणबाळ पेन्शन: ₹१,५००/महा",
        item2: "आयुष्मान कार्ड: ५ लाख मोफत विमा",
        item3: "एल्डरलाईन: १४५६७"
      }
    }
  };

  const getPersonaIcon = (p) => {
    switch (p) {
      case 'farmer': return <FaWheatAwn className="text-sm sm:text-base" />;
      case 'student': return <FaGraduationCap className="text-sm sm:text-base" />;
      case 'citizen': return <FaUserGroup className="text-sm sm:text-base" />;
      case 'jobSeeker': return <FaUserTie className="text-sm sm:text-base" />;
      case 'womanEnt': return <FaPersonDress className="text-sm sm:text-base" />;
      case 'seniorCitizen': return <FaPersonCane className="text-sm sm:text-base" />;
      default: return null;
    }
  };

  const currentPreview = previewContent[currentLang] || previewContent['en'];

  return (
    <section className="relative pt-28 pb-16 md:py-36 mesh-gradient-bg overflow-hidden border-b border-slate-100 dark:border-slate-850">
      {/* Ambient glowing circles */}
      <div className="absolute top-10 right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brandBlue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-brandGreen/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            {/* Tag/Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/50 border border-blue-100/60 dark:border-blue-900/40 rounded-full px-3.5 py-1 sm:py-1.5 text-brandBlue dark:text-brandBlue-light text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brandOrange animate-pulse" />
              <span>{t('hero.personas.' + activePersona)} {t('hero.previewing')}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-manrope text-slate-800 dark:text-white leading-[1.15] tracking-tight transition-colors duration-300">
              {t('hero.headline')}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-350 leading-relaxed font-sans max-w-2xl transition-colors duration-300">
              {t('hero.subheadline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-brandBlue hover:bg-brandBlue-dark text-white font-bold text-center shadow-lg shadow-brandBlue/20 hover:shadow-brandBlue/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('hero.requestDemo')}
              </a>
              <a
                href="#features"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-brandBlue hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-bold text-center flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <span>{t('hero.exploreFeatures')}</span>
                <FaArrowRight className="text-sm" />
              </a>
            </div>

            {/* Mini Trust Badges */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200/60 dark:border-slate-800 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-black font-manrope text-slate-800 dark:text-white">100%</p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">Local Language</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black font-manrope text-slate-800 dark:text-white">WCAG 2.1</p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">Inclusivity Standard</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black font-manrope text-slate-800 dark:text-white">24/7</p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">Availability</p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Kiosk Mockup Cabinet */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[380px] bg-slate-900 rounded-[2.5rem] p-3.5 sm:p-4 shadow-2xl border-[5px] sm:border-[6px] border-slate-850 shadow-slate-900/40">
              
              {/* Camera & Speaker */}
              <div className="flex justify-center space-x-2 mb-2 sm:mb-3">
                <div className="w-1 h-1 rounded-full bg-slate-800" />
                <div className="w-12 h-0.5 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60 border border-blue-400/30" />
              </div>

              {/* Screen Bezel / Inner Glass */}
              <div className="relative aspect-[9/16] bg-slate-950 rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden border-2 border-slate-800 shadow-inner flex flex-col justify-between">
                
                {/* Status Bar */}
                <div className="bg-slate-900/90 border-b border-slate-800 px-3 py-1.5 sm:py-2 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 font-medium">
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-bold">{t('nav.brand')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaWifi className="text-slate-500 text-[8px] sm:text-[10px]" />
                    <div className="flex items-center space-x-0.5">
                      <FaClock className="text-[8px]" />
                      <span>11:30 AM</span>
                    </div>
                  </div>
                </div>

                {/* Main Screen Preview */}
                <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
                  
                  {/* Persona Indicator */}
                  <div className="space-y-0.5 text-left">
                    <p className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider text-slate-500">
                      {t('hero.persona')}
                    </p>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs sm:text-sm font-bold text-white flex items-center space-x-1">
                        <span className="p-0.5 sm:p-1 rounded bg-slate-800 text-slate-300">
                          {getPersonaIcon(activePersona)}
                        </span>
                        <span className="line-clamp-1">{t('hero.personas.' + activePersona)}</span>
                      </h3>
                      <span className="text-[8px] sm:text-[9px] text-slate-450 px-1.5 py-0.5 rounded bg-slate-800 font-bold uppercase tracking-wider">
                        Active
                      </span>
                    </div>
                  </div>

                  {/* Kiosk Screen content inside mockup */}
                  <div className="my-auto relative h-36 sm:h-44 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePersona}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="w-full text-left bg-slate-900/85 border border-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg flex flex-col justify-between h-32 sm:h-40"
                      >
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className={`h-1 w-10 sm:w-12 rounded-full ${activeColor.primary}`} />
                          
                          <h4 className="text-[10px] sm:text-xs font-bold text-slate-100 line-clamp-1">
                            {currentPreview[activePersona].title}
                          </h4>

                          <div className="space-y-1 sm:space-y-1.5">
                            <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-300 bg-slate-950/45 p-1.5 sm:p-2 rounded-lg border border-slate-800/40">
                              <span className="line-clamp-1">{currentPreview[activePersona].item1}</span>
                              <FaChevronRight className="text-[6px] sm:text-[8px] text-slate-500" />
                            </div>
                            <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-300 bg-slate-950/45 p-1.5 sm:p-2 rounded-lg border border-slate-800/40">
                              <span className="line-clamp-1">{currentPreview[activePersona].item2}</span>
                              <FaChevronRight className="text-[6px] sm:text-[8px] text-slate-500" />
                            </div>
                          </div>
                        </div>

                        {/* Status bar */}
                        <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-slate-500 border-t border-slate-800/50 pt-1.5 sm:pt-2">
                          <div className="flex items-center space-x-0.5">
                            <MdLocationOn className="text-[9px] sm:text-[10px]" />
                            <span>Panchayat Center</span>
                          </div>
                          <span className="text-emerald-400 font-bold uppercase tracking-wider text-[7px] sm:text-[8px]">{currentPreview[activePersona].item3.split(":")[1] || "Active"}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Kiosk Bottom Nav Area - 6 Profiles */}
                  <div className="grid grid-cols-6 gap-0.5 pt-1.5 sm:pt-2 border-t border-slate-900">
                    {personas.map((p, idx) => (
                      <button
                        key={p}
                        onClick={() => setActivePersonaIdx(idx)}
                        className={`flex flex-col items-center justify-center p-0.5 rounded transition-all ${
                          activePersona === p 
                            ? `${personaColors[p].bg} ${personaColors[p].border} ${personaColors[p].text} scale-102` 
                            : 'border-transparent text-slate-650 hover:text-slate-400'
                        }`}
                      >
                        <div className="text-[8px] sm:text-[10px]">{getPersonaIcon(p)}</div>
                        <span className="text-[5px] sm:text-[6px] mt-0.5 scale-90 truncate w-full text-center tracking-tighter">
                          {t('hero.personas.' + p).split(" ")[0]}
                        </span>
                      </button>
                    ))}
                  </div>

                </div>

                {/* Bottom Bezel */}
                <div className="h-5 sm:h-6 bg-slate-900 border-t border-slate-800 flex items-center justify-center">
                  <div className="w-12 sm:w-16 h-0.5 sm:h-1 rounded-full bg-slate-700" />
                </div>
              </div>

              {/* Physical Home Button click indicator */}
              <div className="flex justify-center mt-2.5 sm:mt-3">
                <a
                  href="#kiosk-demo"
                  className="w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-slate-850 hover:bg-slate-750 border border-slate-750 flex items-center justify-center text-slate-400 transition-all hover:scale-105 shadow-md group"
                  aria-label="Demo portal trigger"
                >
                  <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-sm border-2 border-slate-500 group-hover:border-slate-300" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
