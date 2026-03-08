# Quickstart Guide: TraceIT Landing Page

**Feature ID:** 1-landing-page  
**Date:** 2026-03-07  
**Estimated Setup Time:** 30-45 minutes  

---

## Prerequisites

### Required Tools
- **Node.js** 18.0+ (LTS version recommended)
- **npm** or **yarn** package manager
- **Git** for version control
- **VS Code** or preferred code editor

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

---

## Project Setup

### 1. Create Next.js Project
```bash
# Using npm
npx create-next-app@latest traceit-landing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Using yarn
yarn create next-app traceit-landing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Navigate to project directory
cd traceit-landing
```

### 2. Install Additional Dependencies
```bash
# Core dependencies
npm install framer-motion lucide-react react-hook-form @hookform/resolvers zod

# UI primitives (optional but recommended)
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu

# Development dependencies
npm install -D @types/node

# If using yarn
yarn add framer-motion lucide-react react-hook-form @hookform/resolvers zod
yarn add @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu
yarn add -D @types/node
```

### 3. Configure Tailwind CSS
Update `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        surface: '#141414',
        primary: '#00E5FF',
        secondary: '#7C4DFF',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        border: '#2A2A2A',
        'glow-primary': 'rgba(0, 229, 255, 0.5)',
        'glow-secondary': 'rgba(124, 77, 255, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 229, 255, 0.3)',
        'glow-secondary': '0 0 20px rgba(124, 77, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '12px',
      },
    },
  },
  plugins: [],
}

export default config
```

### 4. Update Global Styles
Replace contents of `src/app/globals.css`:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

@layer base {
  :root {
    --background: 11 11 11;
    --surface: 20 20 20;
    --primary: 0 229 255;
    --secondary: 124 77 255;
    --text-primary: 255 255 255;
    --text-secondary: 160 160 160;
    --border: 42 42 42;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-text-primary font-sans;
    background: linear-gradient(135deg, #0B0B0B 0%, #141414 100%);
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .glass {
    @apply bg-surface/80 backdrop-blur-glass border border-border;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  .glow-primary {
    @apply shadow-glow-primary;
  }

  .glow-secondary {
    @apply shadow-glow-secondary;
  }

  .text-gradient {
    @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
  }

  .btn-primary {
    @apply bg-primary text-background font-semibold px-6 py-3 rounded-lg hover:glow-primary transition-all duration-300;
  }

  .btn-secondary {
    @apply border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300;
  }
}
```

---

## Project Structure Setup

### 1. Create Component Directories
```bash
mkdir -p src/components/ui
mkdir -p src/components/sections
mkdir -p src/data
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/styles
```

### 2. Create Type Definitions
Create `src/types/index.ts`:

```typescript
export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'reporting' | 'matching' | 'communication' | 'discovery';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'security' | 'features' | 'technical';
}
```

### 3. Create Data Files
Create `src/data/features.ts`:

```typescript
import { FeatureData } from '@/types';

export const features: FeatureData[] = [
  {
    id: '1',
    title: 'Item Reporting',
    description: 'Quickly report lost or found items with detailed descriptions',
    icon: 'FileText',
    category: 'reporting',
  },
  {
    id: '2',
    title: 'Photo Upload',
    description: 'Attach images to help identify items more easily',
    icon: 'Camera',
    category: 'reporting',
  },
  {
    id: '3',
    title: 'Location Tagging',
    description: 'Mark where items were lost or found for better matching',
    icon: 'MapPin',
    category: 'discovery',
  },
  {
    id: '4',
    title: 'Smart Search',
    description: 'Browse and filter reported items efficiently',
    icon: 'Search',
    category: 'discovery',
  },
  {
    id: '5',
    title: 'Community Alerts',
    description: 'Receive notifications when similar items appear',
    icon: 'Bell',
    category: 'communication',
  },
  {
    id: '6',
    title: 'Secure Messaging',
    description: 'Connect safely with item finders through encrypted chat',
    icon: 'MessageSquare',
    category: 'communication',
  },
];
```

Create similar files for testimonials, FAQ, and navigation data.

---

## Core Component Development

### 1. Base Button Component
Create `src/components/ui/Button.tsx`:

```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  href,
  onClick,
  className = '',
  icon,
  glow = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-primary text-background hover:glow-primary',
    secondary: 'border border-primary text-primary hover:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10',
    outline: 'border border-border text-text-primary hover:border-primary',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${glow ? 'shadow-glow-primary' : ''}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {loading ? <span>Loading...</span> : children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  );
};
```

### 2. Card Component
Create `src/components/ui/Card.tsx`:

```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  glow?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  glow = false,
  className = '',
  onClick,
}) => {
  const baseClasses = 'rounded-lg transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-surface border border-border',
    glass: 'glass',
    elevated: 'bg-surface border border-border shadow-lg',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className} ${
    hover ? 'hover:shadow-glow-primary hover:scale-105' : ''
  } ${glow ? 'shadow-glow-primary' : ''}`;

  return (
    <motion.div
      className={classes}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
```

### 3. Container Component
Create `src/components/ui/Container.tsx`:

```typescript
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  centered = true,
  className = '',
  as: Component = 'div',
}) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const classes = `${sizeClasses[size]} ${centered ? 'mx-auto' : ''} px-4 sm:px-6 lg:px-8 ${className}`;

  return <Component className={classes}>{children}</Component>;
};
```

---

## Development Workflow

### 1. Start Development Server
```bash
npm run dev
# or
yarn dev
```

### 2. Build for Production
```bash
npm run build
# or
yarn build
```

### 3. Run Production Server
```bash
npm run start
# or
yarn start
```

### 4. Lint Code
```bash
npm run lint
# or
yarn lint
```

---

## Component Development Order

### Phase 1: Foundation (Day 1-2)
1. **Base UI Components** - Button, Card, Container
2. **Layout Components** - Navbar, Footer
3. **Hero Section** - Main landing page hero

### Phase 2: Content Sections (Day 3-4)
1. **Features Section** - Feature grid with cards
2. **How It Works** - Step-by-step process
3. **Problem Section** - Problem explanation

### Phase 3: Interactive Elements (Day 5-6)
1. **FAQ Section** - Accordion component
2. **Testimonials** - Carousel or grid
3. **Community Impact** - Statistics with animations

### Phase 4: Final Touches (Day 7)
1. **Contact Form** - Form with validation
2. **Final CTA** - Conversion-focused section
3. **Footer** - Complete footer implementation

---

## Performance Optimization

### 1. Image Optimization
```typescript
// src/components/ui/OptimizedImage.tsx
import Image from 'next/image';
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ width: 'auto', height: 'auto' }}
    />
  );
};
```

### 2. Lazy Loading Components
```typescript
// src/components/ui/LazyLoad.tsx
import React, { Suspense } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  fallback = <div>Loading...</div>,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
```

---

## Environment Configuration

### 1. Environment Variables
Create `.env.local`:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# API Configuration (for future backend integration)
NEXT_PUBLIC_API_URL=https://api.traceit.com

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_BACKEND_INTEGRATION=false
```

### 2. Next.js Configuration
Update `next.config.ts`:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
```

---

## Testing Setup

### 1. Install Testing Dependencies
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
# or
yarn add -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

### 2. Jest Configuration
Create `jest.config.js`:

```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
```

---

## Deployment

### 1. Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# For production
vercel --prod
```

### 2. Build Optimization
```bash
# Analyze bundle size
npm install -D @next/bundle-analyzer
npx next-bundle-analyzer
```

---

## Common Issues & Solutions

### 1. Tailwind CSS Not Working
- Ensure `tailwind.config.ts` is properly configured
- Check that `globals.css` imports Tailwind directives
- Restart development server

### 2. Framer Motion Issues
- Import `motion` from `framer-motion`
- Ensure components are wrapped in `AnimatePresence` for exit animations
- Check for conflicting CSS transitions

### 3. TypeScript Errors
- Ensure all type definitions are in `src/types/index.ts`
- Check import paths and aliases
- Run `npm run type-check` to verify types

### 4. Performance Issues
- Use `next/image` for all images
- Implement lazy loading for heavy components
- Check bundle size with bundle analyzer

---

## Next Steps

1. **Complete Component Development** - Build all remaining components
2. **Add Animations** - Implement smooth scroll reveals and micro-interactions
3. **Optimize Performance** - Ensure <3 second load times
4. **Test Accessibility** - Verify WCAG compliance
5. **Deploy to Production** - Set up CI/CD and deploy to Vercel

---

*This quickstart guide provides everything needed to get the TraceIT landing page running quickly while following best practices for performance, accessibility, and maintainability.*
