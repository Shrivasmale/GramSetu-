import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdLanguage, MdDarkMode, MdLightMode, MdComputer } from 'react-icons/md';
import { Logo } from './Logo';

export const Navbar = () => {
  const { currentLang, changeLanguage, t } = useLanguage();
  const { theme, changeTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.impact'), href: '#impact' },
    { name: t('nav.accessibility'), href: '#accessibility' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'mr', label: 'मराठी' },
  ];

  const themes = [
    { code: 'light', label: 'Light', icon: <MdLightMode className="text-amber-500" /> },
    { code: 'dark', label: 'Dark', icon: <MdDarkMode className="text-blue-400" /> },
    { code: 'system', label: 'System', icon: <MdComputer className="text-slate-500 dark:text-slate-400" /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
      isScrolled 
        ? 'glass-navbar py-3 shadow-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#">
              <Logo layout="horizontal" size="md" />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-650 dark:text-slate-300 hover:text-brandBlue dark:hover:text-brandBlue-light font-bold text-sm tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsThemeDropdownOpen(!isThemeDropdownOpen);
                  setIsLangDropdownOpen(false);
                }}
                className="flex items-center justify-center p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                aria-label="Change Theme"
              >
                {theme === 'light' && <MdLightMode className="text-lg text-amber-500 animate-in spin duration-500" />}
                {theme === 'dark' && <MdDarkMode className="text-lg text-blue-400" />}
                {theme === 'system' && <MdComputer className="text-lg text-slate-500 dark:text-slate-400" />}
              </button>

              {isThemeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black/5 dark:ring-white/10 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {themes.map((tOpt) => (
                    <button
                      key={tOpt.code}
                      onClick={() => {
                        changeTheme(tOpt.code);
                        setIsThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center space-x-2.5 transition-colors ${
                        theme === tOpt.code ? 'text-brandBlue dark:text-brandBlue-light bg-blue-50/50 dark:bg-blue-900/10' : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {tOpt.icon}
                      <span>{tOpt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                  setIsThemeDropdownOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors duration-200"
                aria-label="Select Language"
              >
                <MdLanguage className="text-base text-brandBlue" />
                <span>{languages.find(l => l.code === currentLang)?.label}</span>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black/5 dark:ring-white/10 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                        currentLang === lang.code ? 'text-brandBlue dark:text-brandBlue-light bg-blue-50/50 dark:bg-blue-900/10' : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Request Demo Button */}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-brandBlue hover:bg-brandBlue-dark text-white font-extrabold text-xs shadow-lg shadow-brandBlue/15 hover:shadow-brandBlue/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              {t('nav.requestDemo')}
            </a>
          </div>

          {/* Mobile Menu Actions Bar */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Quick Mobile Theme toggle */}
            <button
              onClick={() => {
                const index = themes.findIndex(tOpt => tOpt.code === theme);
                const nextTheme = themes[(index + 1) % themes.length].code;
                changeTheme(nextTheme);
              }}
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Cycle Theme"
            >
              {theme === 'light' && <MdLightMode className="text-lg text-amber-500" />}
              {theme === 'dark' && <MdDarkMode className="text-lg text-blue-400" />}
              {theme === 'system' && <MdComputer className="text-lg text-slate-500" />}
            </button>

            {/* Quick Lang Switcher for Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                aria-label="Select Language"
              >
                <MdLanguage className="text-lg text-brandBlue" />
              </button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black/5 dark:ring-white/10 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 ${
                        currentLang === lang.code ? 'text-brandBlue dark:text-brandBlue-light' : 'text-slate-750 dark:text-slate-200'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-650 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <HiX className="text-lg" /> : <HiMenu className="text-lg" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-slate-950/40 backdrop-blur-sm z-40 transition-opacity">
          <div className="bg-white dark:bg-slate-900 py-6 px-4 space-y-4 shadow-xl border-t border-slate-100 dark:border-slate-850 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-750 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brandBlue dark:hover:text-brandBlue-light transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex flex-col space-y-3 px-4">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl bg-brandBlue text-white font-bold text-sm shadow-md shadow-brandBlue/10"
              >
                {t('nav.requestDemo')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
