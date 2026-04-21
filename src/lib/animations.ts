import gsap from 'gsap';
import { ANIMATION_DURATION, ANIMATION_DELAY, EASING, shouldAnimate } from './constants';

// ScrollTrigger animations
export const createScrollReveal = (element: HTMLElement, options = {}) => {
  if (!shouldAnimate()) return;

  const defaults = {
    duration: ANIMATION_DURATION.NORMAL,
    delay: 0,
    y: 30,
    opacity: 0,
    ease: EASING.EASE_OUT,
    ...options,
  };

  return gsap.from(element, {
    ...defaults,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
      markers: false,
    },
  });
};

// Staggered reveal for multiple elements
export const createStaggerReveal = (elements: HTMLElement[], options = {}) => {
  if (!shouldAnimate()) return;

  const defaults = {
    duration: ANIMATION_DURATION.NORMAL,
    delay: ANIMATION_DELAY.STAGGER,
    y: 30,
    opacity: 0,
    ease: EASING.EASE_OUT,
    stagger: ANIMATION_DELAY.STAGGER,
    ...options,
  };

  return gsap.from(elements, {
    ...defaults,
    scrollTrigger: {
      trigger: elements[0].parentElement || elements[0],
      start: 'top 75%',
      toggleActions: 'play none none reverse',
      markers: false,
    },
  });
};

// Parallax effect for scroll
export const createParallax = (element: HTMLElement, speed: number) => {
  if (!shouldAnimate()) return;

  gsap.to(element, {
    y: () => {
      const scrollY = gsap.getProperty(window, 'scrollY') as number;
      return (scrollY || 0) * speed;
    },
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      onUpdate: (self) => {
        gsap.to(element, {
          y: (self.getVelocity() as number) * speed * 0.2,
          overwrite: 'auto',
          duration: 0.8,
          ease: 'power2.out',
        });
      },
    },
  });
};

// Horizontal scroll animation
export const createHorizontalScroll = (container: HTMLElement, content: HTMLElement) => {
  if (!shouldAnimate()) return;

  const contentWidth = content.offsetWidth;
  const containerWidth = container.offsetWidth;
  const distance = contentWidth - containerWidth;

  return gsap.to(content, {
    x: -distance,
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: `+=${distance * 2}`,
      scrub: 1.2,
      pin: true,
      anticipatePin: 1,
    },
  });
};

// Section pin animation
export const createSectionPin = (section: HTMLElement, duration: number = 3) => {
  if (!shouldAnimate()) return;

  return gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: `+=${duration * 100}`,
      pin: true,
      pinSpacing: true,
      markers: false,
    },
  });
};

// Text animation - character reveal
export const createTextReveal = (element: HTMLElement, options = {}) => {
  if (!shouldAnimate()) return;

  const text = element.textContent || '';
  const chars = text.split('');

  element.innerHTML = chars
    .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  const charSpans = element.querySelectorAll('.char');

  const defaults = {
    duration: ANIMATION_DURATION.FAST,
    delay: ANIMATION_DELAY.ITEM,
    y: 20,
    opacity: 0,
    ease: EASING.EASE_OUT,
    stagger: ANIMATION_DELAY.ITEM,
    ...options,
  };

  return gsap.from(charSpans, {
    ...defaults,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
};

// Number counter animation
export const createCounterAnimation = (
  element: HTMLElement,
  target: number,
  duration: number = 2
) => {
  if (!shouldAnimate()) return;

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toString();
    },
  });
};

// Fade and scale on scroll
export const createFadeScale = (element: HTMLElement, options = {}) => {
  if (!shouldAnimate()) return;

  const defaults = {
    duration: ANIMATION_DURATION.NORMAL,
    opacity: 0,
    scale: 0.9,
    ease: EASING.EASE_OUT,
    ...options,
  };

  return gsap.from(element, {
    ...defaults,
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });
};

// Rotate and fade
export const createRotateFade = (element: HTMLElement, options = {}) => {
  if (!shouldAnimate()) return;

  const defaults = {
    duration: ANIMATION_DURATION.NORMAL,
    opacity: 0,
    rotation: 5,
    scale: 0.95,
    ease: EASING.EASE_OUT,
    ...options,
  };

  return gsap.from(element, {
    ...defaults,
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });
};

// Cleanup function for animations
export const killAllAnimations = () => {
  gsap.killTweensOf('*');
};
