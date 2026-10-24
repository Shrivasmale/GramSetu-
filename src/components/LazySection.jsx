import { useState, useEffect, useRef, Suspense } from 'react';

/**
 * LazySection
 * Loads components only when scrolled into view or when directly targeted via URL hash or anchor navigation.
 * Prevents preloading of below-the-fold components on initial screen render.
 */
export const LazySection = ({
  id,
  minHeight = '40vh',
  rootMargin = '200px',
  children,
  fallback
}) => {
  const [isLoaded, setIsLoaded] = useState(() => {
    // If the page was loaded with a direct hash anchor matching this section, load immediately
    if (typeof window !== 'undefined' && id && window.location.hash === `#${id}`) {
      return true;
    }
    return false;
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    if (isLoaded) return;

    // Check if the current hash targets this section
    const checkHashMatch = () => {
      if (id && window.location.hash === `#${id}`) {
        setIsLoaded(true);
      }
    };

    // 1. Listen for hashchange events (e.g. user back/forward or programmatic hash update)
    window.addEventListener('hashchange', checkHashMatch);

    // 2. Listen for clicks on links targeting this id (triggers instant loading before smooth scroll reaches it)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href === `#${id}`) {
          setIsLoaded(true);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // 3. Intersection Observer for scroll-triggered loading
    let observer;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsLoaded(true);
              if (observer) {
                observer.disconnect();
              }
            }
          });
        },
        {
          root: null,
          rootMargin: rootMargin,
          threshold: 0.01,
        }
      );
      observer.observe(sectionRef.current);
    } else {
      // Fallback if IntersectionObserver is unsupported
      setIsLoaded(true);
    }

    return () => {
      window.removeEventListener('hashchange', checkHashMatch);
      document.removeEventListener('click', handleAnchorClick);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [id, rootMargin, isLoaded]);

  const defaultSkeleton = (
    <div
      style={{ minHeight }}
      className="w-full flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300 py-16"
      aria-busy="true"
      aria-label={`Loading ${id || 'section'} content`}
    >
      <div className="flex flex-col items-center space-y-4 px-4 text-center max-w-md">
        <div className="w-10 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 border-t-brandBlue animate-spin" />
        <div className="w-32 h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
        <div className="w-48 h-2 bg-slate-150 dark:bg-slate-800/60 rounded-full animate-pulse" />
      </div>
    </div>
  );

  return (
    <div
      ref={sectionRef}
      id={id}
      className="scroll-mt-16 w-full"
    >
      {isLoaded ? (
        <Suspense fallback={fallback || defaultSkeleton}>
          {children}
        </Suspense>
      ) : (
        fallback || defaultSkeleton
      )}
    </div>
  );
};

export default LazySection;
