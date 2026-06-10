import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Logo = ({
  layout = 'vertical', // 'vertical' (stacked) or 'horizontal' (inline)
  size = 'md',        // 'sm', 'md', 'lg', 'xl'
  animate = true,      // enable/disable Framer Motion animation
  textColor = '',      // custom override, e.g. 'text-white'
  taglineColor = '',   // custom override, e.g. 'text-slate-400'
  className = ''
}) => {
  const { t } = useLanguage();

  // Size configurations
  const sizes = {
    vertical: {
      sm: { icon: 'w-16 h-14', text: 'text-2xl', tagline: 'text-[9px] mt-1' },
      md: { icon: 'w-28 h-24', text: 'text-4xl', tagline: 'text-xs mt-2' },
      lg: { icon: 'w-36 h-32', text: 'text-5xl', tagline: 'text-sm mt-2.5' },
      xl: { icon: 'w-48 h-40', text: 'text-6xl', tagline: 'text-base mt-3' }
    },
    horizontal: {
      sm: { icon: 'w-7 h-6', text: 'text-sm font-bold', tagline: 'text-[8px] mt-0.5' },
      md: { icon: 'w-10 h-9', text: 'text-lg sm:text-xl font-logo font-extrabold', tagline: 'text-[9px] sm:text-[10px] mt-0.5' },
      lg: { icon: 'w-14 h-12', text: 'text-2xl font-logo font-extrabold', tagline: 'text-xs mt-1' },
      xl: { icon: 'w-20 h-16', text: 'text-3xl font-logo font-extrabold', tagline: 'text-sm mt-1.5' }
    }
  };

  const currentSize = sizes[layout]?.[size] || sizes[layout]['md'];

  // Framer Motion Animation Variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.4, ease: "easeInOut" }
    }
  };

  const nodeVariants = (delay) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 14,
        delay: delay
      }
    }
  });

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.7
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Abstract Bridge SVG Icon with connected opportunity nodes
  const BridgeIcon = () => (
    <motion.svg
      className={currentSize.icon}
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animate ? "hidden" : "visible"}
      animate="visible"
    >
      <defs>
        <linearGradient id="logo-bridge-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" />   {/* Start: Blue */}
          <stop offset="50%" stopColor="#22C55E" />  {/* Middle: Green */}
          <stop offset="100%" stopColor="#FB923C" /> {/* End: Orange */}
        </linearGradient>
      </defs>

      {/* Ripple wave radiating from central interaction node */}
      <motion.circle
        cx="60"
        cy="25"
        r="14"
        stroke="url(#logo-bridge-gradient)"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: [0.95, 1.4, 0.95],
            opacity: [0.3, 0.7, 0.3],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        }}
      />

      {/* Main Arch representing Setu (Bridge) and citizen-govt connection */}
      <motion.path
        d="M 20 80 C 20 50, 45 25, 60 25 C 75 25, 100 50, 100 80"
        stroke="url(#logo-bridge-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        variants={pathVariants}
      />

      {/* Supporting lower arch representing digital safety/infrastructure */}
      <motion.path
        d="M 32 80 C 32 62, 48 45, 60 45 C 72 45, 88 62, 88 80"
        stroke="url(#logo-bridge-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
        variants={pathVariants}
      />

      {/* Horizontal base deck (The foundation path of access) */}
      <motion.path
        d="M 12 80 L 108 80"
        stroke="url(#logo-bridge-gradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        variants={pathVariants}
      />

      {/* Vertical network nodes connectivity lines */}
      <motion.line
        x1="40" y1="57" x2="40" y2="80"
        stroke="url(#logo-bridge-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={pathVariants}
      />
      <motion.line
        x1="60" y1="45" x2="60" y2="80"
        stroke="url(#logo-bridge-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={pathVariants}
      />
      <motion.line
        x1="80" y1="57" x2="80" y2="80"
        stroke="url(#logo-bridge-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={pathVariants}
      />

      {/* Connected opportunity nodes (represent villages, access, and digital solutions) */}
      
      {/* Node 1: Left base (Villages/Citizens) */}
      <motion.circle
        cx="20"
        cy="80"
        r="6"
        fill="#2563EB"
        stroke="white"
        strokeWidth="2.5"
        variants={nodeVariants(0.6)}
      />

      {/* Node 2: Right base (Opportunities/Jobs/Education) */}
      <motion.circle
        cx="100"
        cy="80"
        r="6"
        fill="#FB923C"
        stroke="white"
        strokeWidth="2.5"
        variants={nodeVariants(0.75)}
      />

      {/* Node 3: Center top peak (Touch point of access / Digital portal) */}
      <motion.circle
        cx="60"
        cy="25"
        r="7.5"
        fill="#22C55E"
        stroke="white"
        strokeWidth="2.5"
        variants={nodeVariants(0.5)}
      />

      {/* Node 4: Left supporting node */}
      <motion.circle
        cx="40"
        cy="57"
        r="3.5"
        fill="url(#logo-bridge-gradient)"
        stroke="white"
        strokeWidth="1.5"
        variants={nodeVariants(0.9)}
      />

      {/* Node 5: Right supporting node */}
      <motion.circle
        cx="80"
        cy="57"
        r="3.5"
        fill="url(#logo-bridge-gradient)"
        stroke="white"
        strokeWidth="1.5"
        variants={nodeVariants(1.0)}
      />
    </motion.svg>
  );

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="flex-shrink-0 mb-4 hover:scale-[1.03] transition-transform duration-300">
          <BridgeIcon />
        </div>
        
        <motion.div
          variants={animate ? textContainerVariants : {}}
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Brand Wordmark: GRAMSETU */}
          <motion.div 
            variants={textItemVariants}
            className={`font-logo font-extrabold ${currentSize.text} tracking-[0.05em] select-none text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#FB923C]`}
          >
            {t('logo.brand')}
          </motion.div>

          {/* Subtitle tagline */}
          <motion.p
            variants={textItemVariants}
            className={`font-sans font-semibold tracking-wider ${taglineColor || 'text-slate-500 dark:text-slate-400'} ${currentSize.tagline} text-center select-none max-w-xs`}
          >
            {t('logo.tagline')}
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Horizontal / Inline Variant
  return (
    <div className={`flex items-center space-x-3.5 group select-none text-left ${className}`}>
      <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-350">
        <BridgeIcon />
      </div>

      <motion.div
        variants={animate ? textContainerVariants : {}}
        initial={animate ? "hidden" : "visible"}
        animate="visible"
        className="flex flex-col leading-none"
      >
        {/* Inline wordmark GRAMSETU */}
        <motion.h3
          variants={textItemVariants}
          className={`${currentSize.text} tracking-tight select-none transition-colors duration-200`}
        >
          <span className="font-logo font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#FB923C]">{t('logo.brand')}</span>
        </motion.h3>

        {/* Small tagline beneath */}
        <motion.p
          variants={textItemVariants}
          className={`font-sans font-medium ${taglineColor || 'text-slate-500 dark:text-slate-450'} tracking-wide transition-colors duration-200 ${currentSize.tagline}`}
        >
          {t('logo.tagline')}
        </motion.p>
      </motion.div>
    </div>
  );
};
