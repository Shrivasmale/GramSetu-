import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { kioskData } from '../data/kioskData';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { 
  MdSettingsVoice, MdCompare, MdFormatSize, MdHome, 
  MdArrowBack, MdFingerprint, MdCheckCircle, MdPhone, MdLocationOn
} from 'react-icons/md';
import { 
  FaWheatAwn, FaGraduationCap, FaUserTie, FaUserGroup, 
  FaCloudSun, FaFileContract, FaRegFilePdf, FaPersonDress, 
  FaPersonCane, FaCalendarDays, FaFileLines, FaBriefcase
} from 'react-icons/fa6';

export const KioskDemo = () => {
  const { currentLang, t } = useLanguage();
  
  // Kiosk global states
  const [activePersona, setActivePersona] = useState(null);
  const [activeService, setActiveService] = useState(null);
  
  // Accessibility states
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState('normal'); // normal, large, xlarge

  // Feature specific states
  const [kioskTime, setKioskTime] = useState('');
  const [appliedScholarships, setAppliedScholarships] = useState({});
  const [appliedJobs, setAppliedJobs] = useState({});
  const [appliedTrainings, setAppliedTrainings] = useState({});
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certStep, setCertStep] = useState(0); // 0: select, 1: scan fingerprint, 2: success
  const [isScanning, setIsScanning] = useState(false);
  const [jobCardRegistered, setJobCardRegistered] = useState(false);
  const [appIdInput, setAppIdInput] = useState('');

  // Voice synthesis reference
  const synthRef = useRef(window.speechSynthesis);

  // Update kiosk clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 should be 12
      minutes = minutes < 10 ? '0' + minutes : minutes;
      setKioskTime(`${hours}:${minutes} ${ampm}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  // Warm up speechSynthesis voices
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      const handleVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      };
    }
  }, []);

  // Text-To-Speech engine function
  const speakText = (text) => {
    if (!voiceEnabled || !synthRef.current) return;
    synthRef.current.cancel(); // Cancel any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Determine the desired target language code
    let targetLang = 'en-IN';
    if (currentLang === 'hi') {
      targetLang = 'hi-IN';
    } else if (currentLang === 'mr') {
      targetLang = 'mr-IN';
    }

    const voices = synthRef.current.getVoices();
    
    // 1. Try to find a voice that exactly matches the requested target language code
    let selectedVoice = voices.find(v => v.lang.toLowerCase() === targetLang.toLowerCase());
    
    // 2. Try to find a voice that starts with the same language prefix (e.g. 'mr')
    if (!selectedVoice) {
      selectedVoice = voices.find(v => v.lang.toLowerCase().startsWith(targetLang.split('-')[0].toLowerCase()));
    }
    
    // 3. Fallback for Marathi -> Hindi (Devanagari fallback)
    if (!selectedVoice && currentLang === 'mr') {
      selectedVoice = voices.find(v => v.lang.toLowerCase().startsWith('hi'));
    }

    // 4. Fallback to English/Default if still not found
    if (!selectedVoice) {
      selectedVoice = voices.find(v => v.lang.toLowerCase().startsWith('en')) || 
                      voices.find(v => v.default) || 
                      voices[0];
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
    } else {
      utterance.lang = targetLang;
    }
    
    synthRef.current.speak(utterance);
  };

  // Speak welcome when persona changes
  useEffect(() => {
    if (activePersona) {
      const data = kioskData[currentLang][activePersona];
      speakText(`${data.welcome} ${t('kiosk.welcome')}`);
    } else {
      speakText(`${t('kiosk.welcome')}. ${t('kiosk.tapToStart')}`);
    }
  }, [activePersona, currentLang, voiceEnabled]);

  const handlePersonaSelect = (persona) => {
    setActivePersona(persona);
    setActiveService(null);
    setCertStep(0);
    setSelectedCertificate(null);
    setAppIdInput('');
  };

  const handleHomeClick = () => {
    setActivePersona(null);
    setActiveService(null);
    setCertStep(0);
    setSelectedCertificate(null);
    setAppIdInput('');
    speakText("Returned to main screen. Select a profile.");
  };

  const handleServiceClick = (serviceId, title) => {
    setActiveService(serviceId);
    speakText(`Opening ${title}`);
  };

  const handleBackClick = () => {
    setActiveService(null);
    setCertStep(0);
    setSelectedCertificate(null);
    setAppIdInput('');
    speakText("Returned to profile menu.");
  };

  // Simulated Certificate biometric scan
  const startBiometricScan = () => {
    setIsScanning(true);
    speakText("Please place your fingerprint on the scanner window.");
    setTimeout(() => {
      setIsScanning(false);
      setCertStep(2);
      speakText("Scan complete. Verification successful. Your receipt is printed.");
    }, 2000);
  };

  // Text Size utility styles
  const getTextSizeClass = (element) => {
    if (textSize === 'large') {
      if (element === 'title') return 'text-base sm:text-xl font-bold';
      if (element === 'desc') return 'text-xs sm:text-base font-semibold';
      return 'text-[11px] sm:text-sm';
    }
    if (textSize === 'xlarge') {
      if (element === 'title') return 'text-lg sm:text-2xl font-bold';
      if (element === 'desc') return 'text-sm sm:text-lg font-semibold';
      return 'text-xs sm:text-base';
    }
    // normal/default
    if (element === 'title') return 'text-sm sm:text-lg font-bold';
    if (element === 'desc') return 'text-[11px] sm:text-sm font-semibold';
    return 'text-[10px] sm:text-xs';
  };

  const activeData = activePersona ? kioskData[currentLang][activePersona] : null;

  const profiles = [
    { key: 'farmer', icon: <FaWheatAwn />, label: t('hero.personas.farmer') },
    { key: 'student', icon: <FaGraduationCap />, label: t('hero.personas.student') },
    { key: 'citizen', icon: <FaUserGroup />, label: t('hero.personas.citizen') },
    { key: 'jobSeeker', icon: <FaUserTie />, label: t('hero.personas.jobSeeker') },
    { key: 'womanEnt', icon: <FaPersonDress />, label: t('hero.personas.womanEnt') },
    { key: 'seniorCitizen', icon: <FaPersonCane />, label: t('hero.personas.seniorCitizen') }
  ];

  const getPersonaIcon = (p) => {
    switch (p) {
      case 'farmer': return <FaWheatAwn />;
      case 'student': return <FaGraduationCap />;
      case 'citizen': return <FaUserGroup />;
      case 'jobSeeker': return <FaUserTie />;
      case 'womanEnt': return <FaPersonDress />;
      case 'seniorCitizen': return <FaPersonCane />;
      default: return null;
    }
  };

  return (
    <section id="kiosk-demo" className="py-20 bg-slate-900 text-white relative border-y border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_-20%,rgba(37,99,235,0.18),rgba(0,0,0,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-brandBlue/15 text-brandBlue-light border border-brandBlue/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Hardware & Software Simulation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-manrope text-white tracking-tight">
            {t('kiosk.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            {t('kiosk.subtitle')}
          </p>
        </div>

        {/* Demo Grid: Controls + Kiosk Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Simulator Controls (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-3xl p-5 sm:p-6 text-left shadow-lg">
              <h3 className="text-lg font-bold font-manrope text-slate-100 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brandBlue-light animate-pulse" />
                <span>{t('kiosk.panelTitle')}</span>
              </h3>
              <p className="text-xs font-medium text-slate-400 mt-2 leading-relaxed">
                {t('kiosk.panelDesc')}
              </p>

              {/* Toggles */}
              <div className="mt-6 space-y-4">
                {/* Voice Assist Toggle */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                  <div className="flex items-center space-x-3">
                    <MdSettingsVoice className="text-xl text-brandBlue-light" />
                    <div>
                      <p className="text-xs font-bold text-slate-200">{t('kiosk.voiceToggle')}</p>
                      <p className="text-[10px] text-slate-500">Audio readout guide</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      voiceEnabled ? 'bg-brandBlue' : 'bg-slate-700'
                    }`}
                    aria-label="Toggle Voice Assistant"
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                      voiceEnabled ? 'translate-x-6' : ''
                    }`} />
                  </button>
                </div>

                {/* Contrast Toggle */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                  <div className="flex items-center space-x-3">
                    <MdCompare className="text-xl text-purple-400" />
                    <div>
                      <p className="text-xs font-bold text-slate-200">{t('kiosk.contrastToggle')}</p>
                      <p className="text-[10px] text-slate-500">High Contrast inversion</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setHighContrast(!highContrast)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      highContrast ? 'bg-purple-600' : 'bg-slate-700'
                    }`}
                    aria-label="Toggle High Contrast"
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                      highContrast ? 'translate-x-6' : ''
                    }`} />
                  </button>
                </div>

                {/* Text Size Slider/Scale */}
                <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-700/50 space-y-2">
                  <div className="flex items-center space-x-3">
                    <MdFormatSize className="text-xl text-brandGreen-light" />
                    <p className="text-xs font-bold text-slate-200">{t('kiosk.textSizeToggle')}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    {['normal', 'large', 'xlarge'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setTextSize(size)}
                        className={`py-1.5 text-[10px] font-bold rounded-lg border transition-all ${
                          textSize === size 
                            ? 'bg-brandGreen border-brandGreen text-white scale-105 shadow-md shadow-brandGreen/25' 
                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {size === 'normal' && t('kiosk.normalText')}
                        {size === 'large' && t('kiosk.largeText')}
                        {size === 'xlarge' && t('kiosk.extraLargeText')}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Helper guidelines */}
            <div className="hidden lg:block bg-slate-800/40 border border-slate-800 rounded-3xl p-6 text-left text-slate-400 text-xs space-y-3">
              <p className="font-semibold text-slate-300">💡 Interactive Features to Try:</p>
              <ul className="list-disc pl-4 space-y-1.5 leading-relaxed">
                <li>Toggle <strong>Voice Assistant</strong> and click profiles to hear local text guides.</li>
                <li>Activate <strong>High Contrast Mode</strong> to see accessibility color shifts.</li>
                <li>Go to <strong>Citizen Services</strong> &gt; <strong>Panchayat Certificates</strong> to trigger the simulated biometric fingerprint scanner.</li>
                <li>Go to <strong>Job Seeker Services</strong> &gt; <strong>Resume Builder</strong> to compile a localized bio-data sheet.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Physical Kiosk Terminal (8 Cols) */}
          <div className="lg:col-span-8 flex justify-center w-full">
            
            {/* Outer Physical Frame */}
            <div className="relative w-full max-w-[620px] bg-slate-800 rounded-[1.8rem] sm:rounded-[3rem] p-3.5 sm:p-5 shadow-2xl border-[4px] sm:border-[8px] border-slate-700 shadow-black/60 flex flex-col items-center">
              
              {/* Speaker Bar, Camera & Ambient Light Sensor */}
              <div className="w-full flex items-center justify-between px-3 sm:px-6 mb-3 sm:mb-4">
                <div className="flex space-x-1.5 items-center">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-slate-600/40" />
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-900" />
                </div>
                {/* Simulated Speaker Grill */}
                <div className="w-24 sm:w-32 h-1.5 bg-slate-900 rounded-full flex items-center justify-around px-2">
                  {[...Array(6)].map((_, idx) => (
                    <span key={idx} className="w-0.5 sm:w-1 h-0.5 bg-slate-700 rounded-full" />
                  ))}
                </div>
                {/* Voice Status Animation Indicator */}
                <div className="w-6 sm:w-8 h-4 bg-slate-900 rounded-lg flex items-center justify-center">
                  <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${voiceEnabled ? 'bg-emerald-500 animate-ping' : 'bg-slate-700'}`} />
                </div>
              </div>

              {/* Touchscreen Glass Screen */}
              <div className={`w-full min-h-[420px] sm:min-h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-slate-900 relative flex flex-col justify-between transition-all duration-300 ${
                highContrast ? 'kiosk-high-contrast' : 'bg-slate-950 text-slate-100'
              }`}>
                
                {/* Kiosk Header */}
                <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[10px] sm:text-xs text-slate-400 font-semibold z-10">
                  <button 
                    onClick={handleHomeClick} 
                    className="flex items-center space-x-1 hover:text-white transition-colors"
                  >
                    <MdHome className="text-sm sm:text-base" />
                    <span>{t('kiosk.home')}</span>
                  </button>
                  
                  {/* Persona Indicator Banner */}
                  {activePersona && (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-850 text-[9px] sm:text-[10px] text-slate-350 font-bold uppercase tracking-wider">
                      {activeData.name} ({activeData.personaName})
                    </span>
                  )}

                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-[8px] sm:text-[9px] tracking-wide text-emerald-500 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/20">GPS Online</span>
                    <span className="font-mono text-[9px] sm:text-[11px]">{kioskTime}</span>
                  </div>
                </div>

                {/* Voice Wave Visualizer Overlay */}
                {voiceEnabled && (
                  <div className="absolute top-12 right-3 sm:right-4 flex items-center space-x-2 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-xl z-20 shadow-md">
                    <span className="text-[9px] text-brandBlue-light font-bold uppercase tracking-wider">{t('kiosk.speaking')}</span>
                    <div className="flex items-end space-x-0.5 h-3.5 w-8 pb-0.5">
                      <span className="w-0.5 bg-brandBlue-light rounded-full wave-bar" />
                      <span className="w-0.5 bg-brandBlue-light rounded-full wave-bar" />
                      <span className="w-0.5 bg-brandBlue-light rounded-full wave-bar" />
                      <span className="w-0.5 bg-brandBlue-light rounded-full wave-bar" />
                    </div>
                  </div>
                )}

                {/* Screen Main Canvas Area */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto relative flex flex-col justify-start">
                  
                  {/* Confined Certificate Scan Overlays */}
                  <AnimatePresence>
                    {certStep === 1 && selectedCertificate && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm z-30 flex items-center justify-center p-4"
                      >
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 max-w-sm w-full text-center space-y-4 sm:space-y-6">
                          <div className="space-y-1">
                            <h5 className="font-extrabold text-xs sm:text-sm font-manrope text-white">Biometric Identification</h5>
                            <p className="text-[10px] sm:text-xs text-slate-400">{selectedCertificate}</p>
                          </div>

                          <div className="flex flex-col items-center justify-center py-2 sm:py-4">
                            <button
                              onClick={startBiometricScan}
                              disabled={isScanning}
                              className={`w-16 sm:w-20 h-16 sm:h-20 rounded-2xl border flex items-center justify-center text-3xl sm:text-4xl shadow-lg transition-all ${
                                isScanning 
                                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 animate-pulse' 
                                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-emerald-500 hover:text-emerald-500 hover:scale-105'
                              }`}
                              aria-label="Fingerprint Sensor Scan Area"
                            >
                              <MdFingerprint className={isScanning ? 'scale-110' : ''} />
                            </button>
                            <p className="text-[9px] sm:text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-wider">
                              {isScanning ? "Verifying..." : "Place thumb to scan & print"}
                            </p>
                          </div>

                          <div className="flex justify-between gap-3">
                            <button
                              onClick={() => setCertStep(0)}
                              className="w-1/2 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 text-[10px] sm:text-xs font-bold"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => {
                                setCertStep(2);
                                speakText("Verification successful. Printing receipt.");
                              }}
                              className="w-1/2 py-2 bg-emerald-600 hover:bg-emerald-755 text-white rounded-xl text-[10px] sm:text-xs font-bold"
                            >
                              Skip Scan
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {certStep === 2 && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm z-30 flex items-center justify-center p-4"
                      >
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 max-w-sm w-full text-center space-y-4 sm:space-y-6">
                          <div className="flex flex-col items-center">
                            <MdCheckCircle className="text-4xl sm:text-5xl text-emerald-500 animate-bounce" />
                            <h5 className="font-extrabold text-xs sm:text-sm font-manrope text-white mt-2">Setu Verification Approved</h5>
                            <p className="text-[10px] sm:text-xs text-slate-400">Application submitted to Nodal Officer.</p>
                          </div>
                          <div className="bg-slate-950/60 p-3 sm:p-4 rounded-xl border border-slate-850/80 text-[10px] sm:text-xs font-mono space-y-1 text-left">
                            <p className="text-slate-450"><strong className="text-slate-200">Ref:</strong> MH-SETU-98011</p>
                            <p className="text-slate-455"><strong className="text-slate-200">Service:</strong> {selectedCertificate}</p>
                            <p className="text-slate-455"><strong className="text-slate-200">Audit Status:</strong> Success / Printed</p>
                          </div>
                          <button
                            onClick={() => setCertStep(0)}
                            className="w-full py-2 bg-brandBlue hover:bg-brandBlue-dark text-white rounded-xl text-[10px] sm:text-xs font-bold"
                          >
                            Done
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    
                    {/* SCREEN 1: Home Profile Selection */}
                    {!activePersona ? (
                      <motion.div
                        key="select-profile"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="w-full flex flex-col items-center justify-center py-2 sm:py-4 space-y-4 sm:space-y-6"
                      >
                        <div className="text-center flex flex-col items-center space-y-3.5">
                          <Logo layout="vertical" size="sm" textColor="text-white" taglineColor="text-slate-400" />
                          <p className={`text-slate-400 font-bold border-t border-slate-800/80 pt-2.5 w-full max-w-[200px] ${getTextSizeClass('desc')}`}>
                            {t('kiosk.selectProfile')}
                          </p>
                        </div>

                        {/* Profile Selection Grid inside kiosk - 6 profiles */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg">
                          {profiles.map((profile) => (
                            <button
                              key={profile.key}
                              onClick={() => handlePersonaSelect(profile.key)}
                              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center transition-all hover:scale-102 hover:shadow-lg bg-slate-900 border-slate-800 hover:border-brandBlue/35"
                            >
                              <div className="p-2 sm:p-3 bg-white/5 rounded-xl mb-1.5 text-white">
                                {profile.icon}
                              </div>
                              <span className={`font-bold tracking-wide text-white ${getTextSizeClass('desc')} line-clamp-1`}>
                                {profile.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      
                      /* SCREEN 2: Dashboard for selected Persona */
                      <motion.div
                        key={activePersona}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="w-full flex flex-col justify-between h-full"
                      >
                        {/* If no sub-service open, show dashboard list */}
                        {!activeService ? (
                          <div className="space-y-4 text-left">
                            {/* Personalized Welcoming Card */}
                            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-4">
                              <span className="text-2xl sm:text-3xl">👋</span>
                              <div>
                                <h4 className={`font-bold font-manrope ${getTextSizeClass('title')} ${highContrast ? 'text-yellow-400' : 'text-white'}`}>
                                  {activeData.welcome}
                                </h4>
                                <p className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase mt-0.5">{activeData.personaTitle}</p>
                              </div>
                            </div>

                            {/* Service Buttons Grid - Custom 4 actions */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              {activeData.actions.map((act) => (
                                <button
                                  key={act.id}
                                  onClick={() => handleServiceClick(act.id, act.title)}
                                  className={`p-3.5 sm:p-4 text-left rounded-xl sm:rounded-2xl border bg-slate-900 border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between h-20 sm:h-24 ${
                                    highContrast ? 'border-yellow-400 text-yellow-400' : ''
                                  }`}
                                >
                                  <div>
                                    <div className="h-1 w-6 bg-brandBlue-light rounded-full mb-1 sm:mb-2" />
                                    <h5 className={`font-bold font-manrope leading-snug ${getTextSizeClass('desc')} ${highContrast ? 'text-yellow-400' : 'text-slate-100'} line-clamp-1`}>
                                      {act.title}
                                    </h5>
                                    <p className="text-[8px] sm:text-[9px] text-slate-500 line-clamp-1 mt-0.5">{act.desc}</p>
                                  </div>
                                  <span className="text-[7px] sm:text-[8px] text-slate-600 font-bold uppercase tracking-wider block">Tap to open →</span>
                                </button>
                              ))}
                            </div>

                            {/* Change Profile button */}
                            <button
                              onClick={() => setActivePersona(null)}
                              className="mt-4 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] sm:text-xs text-slate-400 font-semibold hover:text-white transition-colors"
                            >
                              <MdArrowBack />
                              <span>Change Profile</span>
                            </button>
                          </div>
                        ) : (
                          
                          /* SCREEN 3: Active Sub-Service details inside Kiosk */
                          <div className="text-left flex-1 flex flex-col justify-between">
                            <div>
                              {/* Service Header */}
                              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3 sm:mb-4">
                                <h4 className={`font-extrabold font-manrope text-slate-100 flex items-center space-x-2 ${getTextSizeClass('title')} ${highContrast ? 'text-yellow-400' : ''}`}>
                                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brandGreen-light" />
                                  <span className="line-clamp-1">{activeData.details[activeService].title}</span>
                                </h4>
                                <button
                                  onClick={handleBackClick}
                                  className="flex items-center space-x-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[9px] sm:text-[10px] text-slate-300"
                                >
                                  <MdArrowBack />
                                  <span>{t('kiosk.back')}</span>
                                </button>
                              </div>

                              {/* DYNAMIC RENDER DETAILS FOR NEW SERVICES */}

                              {/* Case 1: Mandi Prices / Scholarship Table / Eligibility Checker / MahaSwayam list */}
                              {(activeService === 'cropPrices' || activeService === 'findScholarships' || activeService === 'checkEligibility' || activeService === 'searchJobs' || activeService === 'exploreSchemes' || activeService === 'checkBenefits') && (
                                <div className="space-y-3">
                                  {activeData.details[activeService].subtitle && (
                                    <p className={`text-slate-400 font-semibold ${getTextSizeClass('desc')}`}>
                                      {activeData.details[activeService].subtitle}
                                    </p>
                                  )}
                                  <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/40">
                                    <table className="w-full text-left border-collapse text-[10px] sm:text-xs min-w-[280px]">
                                      <thead>
                                        <tr className="bg-slate-900 border-b border-white/10 font-bold text-slate-400">
                                          <th className="p-2 sm:p-3">{activeData.details[activeService].headers[0]}</th>
                                          <th className="p-2 sm:p-3">{activeData.details[activeService].headers[1]}</th>
                                          <th className="p-2 sm:p-3 text-right">{activeData.details[activeService].headers[2]}</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {activeData.details[activeService].rows.map((row, idx) => (
                                          <tr key={idx} className="border-b border-white/5 hover:bg-white/5 font-semibold text-slate-300">
                                            <td className="p-2 sm:p-3 font-semibold">{row.name}</td>
                                            <td className="p-2 sm:p-3">{row.val}</td>
                                            <td className="p-2 sm:p-3 text-right">
                                              {/* Action triggers depending on active service */}
                                              {activeService === 'cropPrices' && (
                                                <span className="text-[8px] sm:text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                                                  {row.sub}
                                                </span>
                                              )}
                                              {activeService === 'findScholarships' && (
                                                <button
                                                  onClick={() => {
                                                    setAppliedScholarships(prev => ({...prev, [row.name]: true}));
                                                    speakText(`Application submitted for ${row.name}`);
                                                  }}
                                                  className={`px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-bold ${
                                                    appliedScholarships[row.name] 
                                                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                                                      : 'bg-brandBlue text-white hover:bg-brandBlue-dark'
                                                  }`}
                                                >
                                                  {appliedScholarships[row.name] ? 'Applied ✓' : 'Apply'}
                                                </button>
                                              )}
                                              {activeService === 'checkEligibility' && (
                                                <span className="text-[8px] sm:text-[9px] font-bold text-emerald-450 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/20">
                                                  {row.sub.split(" ")[0]}
                                                </span>
                                              )}
                                              {activeService === 'searchJobs' && (
                                                <button
                                                  onClick={() => {
                                                    setAppliedJobs(prev => ({...prev, [row.name]: true}));
                                                    speakText(`Applied for ${row.name}`);
                                                  }}
                                                  className={`px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-bold ${
                                                    appliedJobs[row.name] 
                                                      ? 'bg-emerald-500/20 text-emerald-400' 
                                                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                                  }`}
                                                >
                                                  {appliedJobs[row.name] ? 'Applied ✓' : 'Apply'}
                                                </button>
                                              )}
                                              {activeService === 'exploreSchemes' && (
                                                <span className="text-[8px] sm:text-[9px] font-bold text-brandOrange-light bg-brandOrange/5 px-2 py-0.5 rounded border border-brandOrange/25">
                                                  {row.sub}
                                                </span>
                                              )}
                                              {activeService === 'checkBenefits' && (
                                                <button
                                                  onClick={() => {
                                                    setSelectedCertificate(row.name);
                                                    setCertStep(1); // Triggers fingerprint scanning for age proof!
                                                    speakText(`Initiated fingerprint scan for ${row.name}`);
                                                  }}
                                                  className="bg-brandOrange hover:bg-brandOrange-dark text-white font-bold px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px]"
                                                >
                                                  Apply
                                                </button>
                                              )}
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}

                              {/* Case 2: Weather updates & tips */}
                              {activeService === 'weatherUpdates' && (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-3 bg-slate-950/40 border border-white/5 rounded-xl flex items-center justify-between">
                                      <div>
                                        <p className="text-2xl sm:text-3xl font-extrabold text-slate-100">{activeData.details.weatherUpdates.current}</p>
                                        <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">Nagpur Meteorological Station</p>
                                      </div>
                                      <FaCloudSun className="text-3xl sm:text-4xl text-amber-400 animate-pulse" />
                                    </div>
                                    <div className="p-3 bg-emerald-500/5 border border-emerald-500/25 rounded-xl text-emerald-400 text-[10px] sm:text-xs font-semibold leading-relaxed text-left">
                                      {activeData.details.weatherUpdates.tip}
                                    </div>
                                  </div>

                                  <div className="border-t border-white/10 pt-3">
                                    <p className="text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">3-Day Advisory Forecast</p>
                                    <div className="grid grid-cols-3 gap-2">
                                      {activeData.details.weatherUpdates.forecast.map((f, idx) => (
                                        <div key={idx} className="p-2 bg-slate-950/30 border border-white/5 rounded-xl text-center">
                                          <p className="text-[9px] sm:text-[10px] font-bold text-slate-400">{f.period}</p>
                                          <p className="text-xs sm:text-sm font-bold text-slate-200 mt-0.5">{f.info.split(" - ")[0]}</p>
                                          <p className="text-[8px] text-slate-500 truncate mt-0.5">{f.info.split(" - ")[1]}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Case 3: PM-KISAN / Career / Safety Helpline / Elder contacts info */}
                              {(activeService === 'schemeEligibility' || activeService === 'careerRoadmap' || activeService === 'expertHelp' || activeService === 'emergencyHelp' || activeService === 'emergencySupport') && (
                                <div className="space-y-4">
                                  {activeData.details[activeService].kisanStatus && (
                                    <div className="p-3.5 bg-slate-950/45 border border-white/5 rounded-xl text-xs space-y-1.5">
                                      <h5 className="font-extrabold text-slate-200 uppercase tracking-wider text-[8px] sm:text-[9px]">PM-KISAN Status</h5>
                                      <p className="text-slate-400 leading-relaxed font-semibold">{activeData.details[activeService].kisanStatus}</p>
                                    </div>
                                  )}
                                  {activeData.details[activeService].insuranceStatus && (
                                    <div className="p-3.5 bg-slate-950/45 border border-white/5 rounded-xl text-xs space-y-1.5">
                                      <h5 className="font-extrabold text-slate-200 uppercase tracking-wider text-[8px] sm:text-[9px]">PMFBY Crop Insurance</h5>
                                      <p className="text-slate-400 leading-relaxed font-semibold">{activeData.details[activeService].insuranceStatus}</p>
                                    </div>
                                  )}

                                  {/* Career tracks */}
                                  {activeService === 'careerRoadmap' && (
                                    <div className="space-y-2.5">
                                      <p className="text-[10px] sm:text-xs text-slate-400 font-medium mb-1">{activeData.details.careerRoadmap.desc}</p>
                                      {activeData.details.careerRoadmap.tracks.map((track, idx) => (
                                        <div key={idx} className="p-2.5 bg-slate-950/40 border border-white/5 rounded-xl">
                                          <p className="text-xs font-bold text-slate-200">{track.name}</p>
                                          <p className="text-[9px] text-slate-500 font-semibold mt-1 leading-normal">{track.steps}</p>
                                        </div>
                                      ))}
                                    </div>
                                  )}

                                  {/* Direct Contact lists (Expert support/Safety/Helpline) */}
                                  {(activeService === 'expertHelp' || activeService === 'emergencyHelp' || activeService === 'emergencySupport') && (
                                    <div className="space-y-3">
                                      <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed">{activeData.details[activeService].desc}</p>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {activeData.details[activeService].contacts.map((contact, idx) => (
                                          <div key={idx} className="p-3 bg-slate-950/40 border border-white/5 rounded-xl flex items-center justify-between">
                                            <div>
                                              <p className="text-[10px] sm:text-xs font-bold text-slate-400">{contact.label}</p>
                                              <p className="text-xs sm:text-sm font-bold text-slate-200 mt-0.5">{contact.val}</p>
                                            </div>
                                            <button
                                              onClick={() => speakText(`Calling helpline ${contact.val}`)}
                                              className="p-2.5 bg-brandBlue text-white hover:bg-brandBlue-dark rounded-xl text-sm"
                                              aria-label="Call helpline"
                                            >
                                              <MdPhone />
                                            </button>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Case 4: Admissions & ITI / Required documents checklist */}
                              {(activeService === 'exploreCourses' || activeService === 'requiredDocs') && (
                                <div className="space-y-3">
                                  {activeService === 'exploreCourses' && (
                                    <>
                                      <p className="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1">{activeData.details.exploreCourses.desc}</p>
                                      <div className="space-y-2">
                                        {activeData.details.exploreCourses.list.map((course, idx) => (
                                          <div key={idx} className="p-3 bg-slate-950/40 border border-white/5 rounded-xl flex items-center justify-between">
                                            <div className="max-w-[80%]">
                                              <p className="text-xs font-bold text-slate-200 line-clamp-1">{course.title}</p>
                                              <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold line-clamp-1 mt-0.5">{course.desc}</p>
                                            </div>
                                            <button
                                              onClick={() => speakText(`Initiated CAP admission inquiry for ${course.title}`)}
                                              className="px-2.5 py-1 bg-brandGreen text-white text-[9px] sm:text-[10px] font-bold rounded-lg"
                                            >
                                              Check Cap
                                            </button>
                                          </div>
                                        ))}
                                      </div>
                                    </>
                                  )}

                                  {activeService === 'requiredDocs' && (
                                    <div className="space-y-3">
                                      {activeData.details.requiredDocs.docs.map((doc, idx) => (
                                        <div key={idx} className="p-3 bg-slate-950/40 border border-white/5 rounded-xl">
                                          <h5 className="font-extrabold text-[9px] sm:text-[10px] text-slate-200 border-b border-white/5 pb-1.5 mb-2">{doc.title}</h5>
                                          <div className="grid grid-cols-2 gap-2 text-[9px] sm:text-[10px] text-slate-400 font-semibold">
                                            {doc.items.map((item, index) => (
                                              <div key={index} className="flex items-center space-x-1">
                                                <span className="text-brandBlue-light">▪</span>
                                                <span className="truncate">{item}</span>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Case 5: Apply Certificates (Biometric Trigger) */}
                              {activeService === 'applyProcess' && (
                                <div className="space-y-4">
                                  <p className="text-[10px] sm:text-xs text-slate-400 font-semibold mb-2">{activeData.details.applyProcess.desc}</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {activeData.details.applyProcess.certificates.map((cert, idx) => (
                                      <button
                                        key={idx}
                                        onClick={() => {
                                          setSelectedCertificate(cert);
                                          setCertStep(1);
                                          speakText(`Initiated Caste/Income application for ${cert}`);
                                        }}
                                        className="p-3.5 bg-slate-900 border border-slate-800 hover:border-brandOrange text-slate-200 hover:text-white rounded-xl text-xs font-bold text-left flex justify-between items-center"
                                      >
                                        <span className="truncate">{cert.split(" (")[0]}</span>
                                        <span className="text-[9px] text-brandOrange-light font-bold">Apply →</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Case 6: Nearby Centers Locator */}
                              {activeService === 'nearbyCenter' && (
                                <div className="space-y-3">
                                  {activeData.details.nearbyCenter.centers.map((center, idx) => (
                                    <div key={idx} className="p-3 bg-slate-950/40 border border-white/5 rounded-xl flex items-center justify-between text-xs">
                                      <div className="text-left space-y-1">
                                        <p className="font-bold text-slate-200">{center.name}</p>
                                        <p className="text-[10px] text-slate-450 flex items-center"><MdLocationOn className="mr-0.5" />{center.address}</p>
                                      </div>
                                      <button
                                        onClick={() => speakText(`Setu center coordinates sent to mobile number.`)}
                                        className="bg-brandBlue text-white font-bold px-2.5 py-1.5 rounded-lg text-[10px]"
                                      >
                                        Send SMS
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Case 7: Entrance exams details */}
                              {activeService === 'entranceGuidance' && (
                                <div className="space-y-3">
                                  {activeData.details.entranceGuidance.notifications.map((notif, idx) => (
                                    <div key={idx} className="p-3.5 bg-slate-950/40 border border-white/5 rounded-xl">
                                      <div className="flex justify-between items-center mb-1.5 border-b border-white/5 pb-1">
                                        <h5 className="text-xs font-bold text-slate-200">{notif.title}</h5>
                                        <span className="text-[8px] bg-blue-500/10 text-brandBlue-light border border-blue-500/20 px-1.5 py-0.5 rounded font-extrabold uppercase">Important</span>
                                      </div>
                                      <p className="text-[9px] sm:text-[10px] text-slate-400 font-semibold leading-relaxed">{notif.details}</p>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Case 8: ITI Apprenticeship application submission form */}
                              {activeService === 'applyOpportunity' && (
                                <div className="space-y-4">
                                  <p className="text-[10px] sm:text-xs text-slate-400 font-semibold leading-relaxed">{activeData.details.applyOpportunity.desc}</p>
                                  <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-4">
                                    <div className="space-y-1">
                                      <label htmlFor="kiosk-app-id" className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-slate-500">ITI Registration Number</label>
                                      <input
                                        id="kiosk-app-id"
                                        type="text"
                                        placeholder={activeData.details.applyOpportunity.placeholderId}
                                        value={appIdInput}
                                        onChange={(e) => setAppIdInput(e.target.value)}
                                        className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs focus:outline-none placeholder:text-slate-600 font-mono"
                                      />
                                    </div>
                                    <button
                                      onClick={() => {
                                        if (appIdInput) {
                                          setSelectedCertificate("Apprenticeship Registration");
                                          setCertStep(1); // Trigger fingerprint verification!
                                        } else {
                                          speakText("Please enter your ITI Registration Number.");
                                        }
                                      }}
                                      className="bg-brandBlue text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-brandBlue-dark"
                                    >
                                      Verify & Submit
                                    </button>
                                  </div>
                                </div>
                              )}

                              {/* Case 9: Trade skill quizzes */}
                              {activeService === 'skillAssessment' && (
                                <div className="space-y-3">
                                  {activeData.details.skillAssessment.assessments.map((ass, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-950/40 border border-white/5 rounded-xl hover:bg-white/5">
                                      <div>
                                        <p className="text-xs font-bold text-slate-200">{ass.title}</p>
                                        <p className="text-[9px] text-slate-500 font-semibold mt-0.5">{ass.questions} Questions | {ass.duration}</p>
                                      </div>
                                      <button
                                        onClick={() => speakText(`Loading mock quiz. Place your finger to auth.`)}
                                        className="px-2.5 py-1 bg-brandGreen text-white text-[9px] sm:text-[10px] font-bold rounded-lg"
                                      >
                                        Start Quiz
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Case 9b: Job Seeker vocational trainings */}
                              {activeService === 'findTraining' && (
                                <div className="space-y-3">
                                  <p className="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1">{activeData.details.findTraining.desc}</p>
                                  {activeData.details.findTraining.trainings.map((course, idx) => (
                                    <div key={idx} className="p-3 bg-slate-950/40 border border-white/5 rounded-xl flex items-center justify-between">
                                      <div className="max-w-[70%]">
                                        <p className="text-xs font-bold text-slate-200 line-clamp-1">{course.title}</p>
                                        <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-0.5">
                                          <strong className="text-slate-400">Duration:</strong> {course.duration} | <strong className="text-slate-400">Eligibility:</strong> {course.eligibility}
                                        </p>
                                        <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold">
                                          <strong className="text-slate-400">Center:</strong> {course.center}
                                        </p>
                                      </div>
                                      <button
                                        onClick={() => {
                                          setAppliedTrainings(prev => ({...prev, [course.title]: true}));
                                          speakText(`Enrolled successfully in ${course.title}`);
                                        }}
                                        className={`px-3 py-1 rounded text-[9px] sm:text-[10px] font-bold ${
                                          appliedTrainings[course.title] 
                                            ? 'bg-emerald-500/20 text-emerald-450 border border-emerald-500/30' 
                                            : 'bg-brandGreen text-white hover:bg-brandGreen-dark'
                                        }`}
                                      >
                                        {appliedTrainings[course.title] ? 'Enrolled ✓' : 'Enroll'}
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Case 10: Bachat Gat Bookkeeping / packaging course selector */}
                              {activeService === 'joinTraining' && (
                                <div className="space-y-3">
                                  <p className="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1">Book bookkeeping and microgrid placements training slots:</p>
                                  {activeData.details.joinTraining.list.map((course, idx) => (
                                    <div key={idx} className="p-3 bg-slate-950/40 border border-white/5 rounded-xl flex items-center justify-between">
                                      <div className="max-w-[70%]">
                                        <p className="text-xs font-bold text-slate-200 line-clamp-1">{course.title}</p>
                                        <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-0.5"><strong className="text-slate-400">Duration:</strong> {course.duration} | <strong className="text-slate-400">Center:</strong> {course.center}</p>
                                      </div>
                                      <button
                                        onClick={() => {
                                          setAppliedTrainings(prev => ({...prev, [course.title]: true}));
                                          speakText(`Slot booked successfully for ${course.title}`);
                                        }}
                                        className={`px-3 py-1 rounded text-[9px] sm:text-[10px] font-bold ${
                                          appliedTrainings[course.title] 
                                            ? 'bg-emerald-500/20 text-emerald-450 border border-emerald-500/30' 
                                            : 'bg-brandGreen text-white hover:bg-brandGreen-dark'
                                        }`}
                                      >
                                        {appliedTrainings[course.title] ? 'Booked ✓' : 'Book Slot'}
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Case 11: Cooperative Dairy officers contact desk */}
                              {activeService === 'connectSupport' && (
                                <div className="space-y-3">
                                  <p className="text-[10px] sm:text-xs text-slate-400 font-semibold mb-2">{activeData.details.connectSupport.desc}</p>
                                  {activeData.details.connectSupport.officers.map((off, idx) => (
                                    <div key={idx} className="p-3 bg-slate-950/40 border border-white/5 rounded-xl flex items-center justify-between text-xs">
                                      <div className="text-left space-y-0.5">
                                        <p className="font-bold text-slate-200">{off.name}</p>
                                        <p className="text-[10px] text-slate-500 font-semibold">{off.phone}</p>
                                      </div>
                                      <button
                                        onClick={() => speakText(`Calling officer ${off.name}`)}
                                        className="p-2 bg-brandBlue hover:bg-brandBlue-dark text-white rounded-lg text-sm"
                                        aria-label="Call officer"
                                      >
                                        <MdPhone />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Case 12: Senior Welfare Card registrations */}
                              {activeService === 'applyAssistance' && (
                                <div className="space-y-4">
                                  <p className="text-[10px] sm:text-xs text-slate-400 font-semibold mb-2">{activeData.details.applyAssistance.desc}</p>
                                  <div className="grid grid-cols-1 gap-2.5">
                                    {activeData.details.applyAssistance.services.map((svc, idx) => (
                                      <button
                                        key={idx}
                                        onClick={() => {
                                          setSelectedCertificate(svc);
                                          setCertStep(1);
                                          speakText(`Initiated enrollment check for ${svc}`);
                                        }}
                                        className="p-3 bg-slate-900 border border-slate-800 hover:border-brandOrange text-slate-200 hover:text-white rounded-xl text-xs font-bold text-left flex justify-between items-center"
                                      >
                                        <span className="truncate">{svc.split(" (")[0]}</span>
                                        <span className="text-[9px] text-brandOrange-light font-bold">Apply →</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                            </div>

                            {/* Service Footer details */}
                            <div className="mt-6 border-t border-white/10 pt-2.5 text-[8px] sm:text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                              <span>Security Mode: Encrypted Session</span>
                            </div>
                          </div>

                        )}
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Kiosk Screen Footer bar */}
                <div className="px-3 sm:px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-500 font-medium">
                  <span>{t('kiosk.liveStatus')}</span>
                  <div className="flex items-center space-x-2.5">
                    {activePersona && (
                      <button 
                        onClick={handleBackClick} 
                        className="text-slate-400 hover:text-white flex items-center space-x-0.5 font-bold uppercase"
                      >
                        <MdArrowBack />
                        <span>{t('kiosk.back')}</span>
                      </button>
                    )}
                    <button 
                      onClick={handleHomeClick} 
                      className="text-slate-400 hover:text-white flex items-center space-x-0.5 font-bold uppercase"
                    >
                      <MdHome />
                      <span>{t('kiosk.home')}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Physical home button below screen */}
              <div className="flex items-center justify-center mt-3 sm:mt-4">
                <button
                  onClick={handleHomeClick}
                  className="w-11 sm:w-14 h-11 sm:h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-slate-750 transition-all hover:scale-105 active:scale-95 shadow-xl group"
                  aria-label="Physical Kiosk Home Button"
                >
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded border-2 border-slate-500 group-hover:border-slate-300 transition-colors" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default KioskDemo;
