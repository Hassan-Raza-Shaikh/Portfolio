// Animation constants and timing utilities
export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 1,
  VERY_SLOW: 1.5,
} as const;

export const ANIMATION_DELAY = {
  STAGGER: 0.1,
  ITEM: 0.05,
} as const;

export const EASING = {
  SMOOTH: 'cubic-bezier(0.4, 0, 0.2, 1)',
  EASE_OUT: 'cubic-bezier(0.16, 1, 0.3, 1)',
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

export const SCROLL_TRIGGER_CONFIG = {
  TRIGGER_THRESHOLD: 0.3,
  SCRUB_AMOUNT: 1,
  MARKERS: false,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const;

export const PARALLAX_SPEEDS = {
  SLOW: 0.3,
  NORMAL: 0.5,
  FAST: 0.7,
  VERY_FAST: 0.9,
} as const;

export const HORIZONTAL_SCROLL_CONFIG = {
  SNAP_POINTS: true,
  MOMENTUM: true,
  THRESHOLD: 50,
} as const;

// Utility function to get reduced motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Utility to safely animate with fallback
export const shouldAnimate = (): boolean => {
  return !prefersReducedMotion();
};
