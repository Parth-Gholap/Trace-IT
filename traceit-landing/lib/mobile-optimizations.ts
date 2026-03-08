// Mobile optimization utilities for TraceIT

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

export const isTouch = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || 
         navigator.maxTouchPoints > 0;
};

export const getViewportHeight = () => {
  if (typeof window === 'undefined') return 0;
  return Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Touch-friendly event handlers
export const addTouchListeners = (element: HTMLElement) => {
  if (isTouch()) {
    element.addEventListener('touchstart', (e) => {
      e.preventDefault();
    }, { passive: true });
    
    element.addEventListener('touchend', (e) => {
      e.preventDefault();
    }, { passive: true });
  }
};

// Mobile performance optimizations
export const optimizeForMobile = () => {
  if (isMobile()) {
    // Reduce motion blur for performance
    document.body.classList.add('no-blur-mobile');
    
    // Optimize animations
    document.body.classList.add('motion-safe');
    
    // Add mobile-specific classes
    document.body.classList.add('mobile-spacing', 'text-responsive');
  } else {
    document.body.classList.remove('no-blur-mobile', 'motion-safe', 'mobile-spacing', 'text-responsive');
  }
};
