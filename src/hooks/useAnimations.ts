'use client';

import React, { useEffect } from 'react';
import { prefersReducedMotion } from '@/lib/constants';

export const usePrefersReducedMotion = (): boolean => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return () => mediaQuery.removeEventListener('change', () => {});
  }, []);

  return prefersReducedMotion();
};

export const useScrollAnimation = (callback: (scrollY: number) => void) => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const handleScroll = () => {
      callback(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
};

export const useViewportSize = () => {
  useEffect(() => {
    const handleResize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  };
};

export const useScrollProgress = () => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options = {}
) => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};
