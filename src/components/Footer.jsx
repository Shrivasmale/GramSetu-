import { useLanguage } from '../context/LanguageContext';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { Logo } from './Logo';

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
          
          <div className="md:col-span-4 text-left space-y-4">
            <a href="#">
              <Logo layout="horizontal" size="md" textColor="text-white" taglineColor="text-slate-400" />
            </a>
            
            {/* Socials */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2.5 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-white transition-colors border border-slate-700" aria-label="Facebook">
                <FaFacebook className="text-sm text-slate-300" />
              </a>
              <a href="#" className="p-2.5 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-white transition-colors border border-slate-700" aria-label="Twitter">
                <FaTwitter className="text-sm text-slate-300" />
              </a>
              <a href="#" className="p-2.5 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-white transition-colors border border-slate-700" aria-label="LinkedIn">
                <FaLinkedin className="text-sm text-slate-300" />
              </a>
              <a href="#" className="p-2.5 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-white transition-colors border border-slate-700" aria-label="YouTube">
                <FaYoutube className="text-sm text-slate-300" />
              </a>
            </div>
          </div>

          {/* Links Column (3 Cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-slate-100 tracking-wider font-heading">Product Links</h4>
            <div className="flex flex-col space-y-2.5 text-sm font-bold">
              <a href="#features" className="hover:text-white text-slate-200 transition-colors">Kiosk Features</a>
              <a href="#kiosk-demo" className="hover:text-white text-slate-200 transition-colors">Interactive Touch Simulator</a>
              <a href="#accessibility" className="hover:text-white text-slate-200 transition-colors">Accessibility Guidelines</a>
              <a href="#contact" className="hover:text-white text-slate-200 transition-colors">Request a Quote</a>
            </div>
          </div>

          {/* Contact Details Column (3 Cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-slate-100 tracking-wider font-heading">{t('footer.contact')}</h4>
            <div className="text-sm font-medium space-y-2">
              <p className="leading-relaxed text-slate-300">{t('footer.address')}</p>
              <p className="text-slate-200 font-bold">{t('footer.email')}</p>
              <p className="text-slate-200 font-bold">{t('footer.phone')}</p>
            </div>
          </div>

          {/* Language selection Column (2 Cols) */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-slate-100 tracking-wider font-heading">Kiosk Language</h4>
            <div className="relative inline-block w-full">
              <select
                value={currentLang}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-xs font-bold text-slate-200 focus:outline-none hover:border-slate-600 transition-colors"
                aria-label="Select Footer Language"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-slate-900 text-slate-200">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Footer Sub Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-medium text-slate-400">
          <p className="text-center">{t('footer.copyright')}</p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
