// Performance optimization utilities for TraceIT

// Core Web Vitals monitoring
export const reportWebVitals = () => {
  if (typeof window === 'undefined') return;

  try {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        const lcpEntry = entry as any;
        if (entry.name === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime, lcpEntry.renderTime || 0);
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        if (entry.name === 'first-input-delay') {
          console.log('FID:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['event'] });

    // Cumulative Layout Shift (CLS)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        if (entry.name === 'cumulative-layout-shift') {
          console.log('CLS:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to Interactive (TTI)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        if (entry.name === 'time-to-interactive') {
          console.log('TTI:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['navigation'] });

    // First Contentful Paint (FCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Total Blocking Time (TBT)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        if (entry.name === 'total-blocking-time') {
          console.log('TBT:', entry.startTime, (entry as any).processingStart || 0);
        }
      }
    }).observe({ entryTypes: ['navigation'] });

  } catch (error) {
    console.error('Error measuring performance:', error);
  }
};

// Lazy loading utilities
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      img.classList.add('lazy');
      imageObserver.observe(img);
    });
  }
};

// Image optimization
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    // Add loading="lazy" for native lazy loading
    if (!img.loading) {
      img.loading = 'lazy';
    }
    
    // Add proper alt text for accessibility
    if (!img.alt) {
      img.alt = img.alt || 'TraceIT platform image';
    }
    
    // Optimize image sizes
    if (img.naturalWidth && img.naturalHeight) {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      // Add aspect ratio preservation logic if needed
    }
  });
};

// Animation performance
export const optimizeAnimations = () => {
  // Reduce motion for users who prefer reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion) {
    document.body.classList.add('reduced-motion');
  } else {
    document.body.classList.remove('reduced-motion');
  }
  
  // Use CSS transforms instead of position changes for better performance
  document.body.classList.add('hardware-accelerated');
};

// Bundle size optimization
export const measureBundleSize = () => {
  if (typeof performance !== 'undefined' && (performance as any).memory) {
    const memoryInfo = (performance as any).memory;
    console.log('Memory usage:', {
      used: memoryInfo.usedJSHeapSize,
      total: memoryInfo.totalJSHeapSize,
      limit: memoryInfo.jsHeapSizeLimit
    });
  }
};

// Network performance optimization
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/styles/main.css',
    '/images/hero-bg.jpg'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Accessibility utilities
export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    if (announcement.parentNode) {
      announcement.parentNode.removeChild(announcement);
    }
  }, 3000);
};

// Focus management
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const firstFocusableElement = element.querySelector(focusableElements) as HTMLElement;
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  });
};

// Color contrast checker
export const checkColorContrast = (foreground: string, background: string) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  if (!context) return { ratio: 0, compliant: false };
  
  // Convert hex colors to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})$/.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  const fg = hexToRgb(foreground);
  const bg = hexToRgb(background);
  
  if (!fg || !bg) return { ratio: 0, compliant: false };
  
  // Calculate contrast ratio
  const luminance = {
    fg: 0.299 * fg.r + 0.587 * fg.g + 0.114 * fg.b,
    bg: 0.299 * bg.r + 0.587 * bg.g + 0.114 * bg.b
  };
  
  const ratio = (luminance.fg + 0.05) / (luminance.bg + 0.05);
  const wcagAA = ratio >= 4.5;
  const wcagAAA = ratio >= 7;
  
  return {
    ratio,
    compliant: wcagAA,
    wcagAAA,
    foreground: fg,
    background: bg
  };
};
