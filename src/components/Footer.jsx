import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { MdLanguage } from 'react-icons/md';

const BridgeIcon = () => (
  <svg className="w-8 h-8 text-brandBlue dark:text-brandBlue-light transition-colors duration-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22C4 15.3726 9.37258 10 16 10C22.6274 10 28 15.3726 28 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <rect x="3.5" y="21" width="3" height="5" rx="1.5" fill="currentColor" />
    <rect x="25.5" y="21" width="3" height="5" rx="1.5" fill="currentColor" />
    <circle cx="16" cy="10" r="3.5" className="fill-brandOrange" />
    <circle cx="16" cy="10" r="1.2" fill="white" />
    <circle cx="16" cy="10" r="6" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" className="opacity-60 dark:opacity-80" />
  </svg>
);

export const Footer = () => {
  const { currentLang, changeLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'mr', label: 'मराठी' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Logo & Info column (4 Cols) */}
          <div className="md:col-span-4 text-left space-y-4">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <BridgeIcon />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-xl font-logo tracking-tight text-white transition-colors duration-200">
                  {t('nav.brand')}
                </span>
                <span className="text-[10px] font-sans font-medium text-slate-500 mt-1.5 tracking-wide transition-colors duration-200">
                  {t('nav.tagline')}
                </span>
              </div>
            </a>
            
            {/* Socials */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook className="text-sm" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="text-sm" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors" aria-label="YouTube">
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Links Column (3 Cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-slate-100 tracking-wider">Product Links</h4>
            <div className="flex flex-col space-y-2.5 text-sm font-semibold">
              <a href="#features" className="hover:text-white transition-colors">Kiosk Features</a>
              <a href="#kiosk-demo" className="hover:text-white transition-colors">Interactive Touch Simulator</a>
              <a href="#accessibility" className="hover:text-white transition-colors">Accessibility Guidelines</a>
              <a href="#contact" className="hover:text-white transition-colors">Request a Quote</a>
            </div>
          </div>

          {/* Contact Details Column (3 Cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-slate-100 tracking-wider">{t('footer.contact')}</h4>
            <div className="text-sm font-medium space-y-2">
              <p className="leading-relaxed">{t('footer.address')}</p>
              <p className="text-slate-300 font-semibold">{t('footer.email')}</p>
              <p className="text-slate-300 font-semibold">{t('footer.phone')}</p>
            </div>
          </div>

          {/* Language selection Column (2 Cols) */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-slate-100 tracking-wider">Kiosk Language</h4>
            <div className="relative inline-block w-full">
              <select
                value={currentLang}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full bg-slate-850 border border-slate-800 rounded-xl p-2.5 text-xs font-bold text-slate-300 focus:outline-none hover:border-slate-700 transition-colors"
                aria-label="Select Footer Language"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-slate-900">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Footer Sub Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-medium text-slate-500">
          <p className="text-center">{t('footer.copyright')}</p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
