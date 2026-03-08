# UI Contracts: TraceIT Landing Page

**Feature ID:** 1-landing-page  
**Date:** 2026-03-07  

---

## Component Interface Contracts

### Base UI Components

#### Button Component
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  glow?: boolean;
}

// Usage Examples
<Button variant="primary" size="lg" glow>
  Report Lost Item
</Button>

<Button variant="secondary" href="/found">
  Found an Item
</Button>
```

#### Card Component
```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'elevated' | 'bordered';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  hover?: boolean;
  glow?: boolean;
  className?: string;
  onClick?: () => void;
}

// Usage Examples
<Card variant="glass" hover glow>
  <FeatureCard data={feature} />
</Card>
```

#### Container Component
```typescript
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// Usage Examples
<Container size="lg" centered>
  <HeroSection />
</Container>
```

#### Section Wrapper Component
```typescript
interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  background?: 'default' | 'dark' | 'gradient' | 'pattern';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// Usage Examples
<SectionWrapper id="features" background="dark" padding="lg">
  <FeaturesSection />
</SectionWrapper>
```

---

## Navigation Component Contracts

### Navbar Component
```typescript
interface NavbarProps {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  links: NavLink[];
  cta: CTAButton;
  isSticky?: boolean;
  isMobile?: boolean;
  isMenuOpen?: boolean;
  onMenuToggle?: () => void;
  className?: string;
}

interface NavLink {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

// Usage Examples
<Navbar
  logo={{
    src: "/logo.svg",
    alt: "TraceIT",
    href: "/"
  }}
  links={navigationLinks}
  cta={{
    text: "Report Lost Item",
    href: "/report-lost",
    variant: "primary"
  }}
  isSticky={true}
  isMenuOpen={isMenuOpen}
  onMenuToggle={toggleMenu}
/>
```

### Mobile Menu Component
```typescript
interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  cta: CTAButton;
  onClose: () => void;
  logo: {
    src: string;
    alt: string;
  };
}

// Usage Examples
<MobileMenu
  isOpen={isMenuOpen}
  links={navigationLinks}
  cta={mobileCTA}
  onClose={closeMenu}
  logo={{ src: "/logo.svg", alt: "TraceIT" }}
/>
```

---

## Section Component Contracts

### Hero Section Component
```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  illustration?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  trustBadges?: TrustBadge[];
  className?: string;
}

interface TrustBadge {
  id: string;
  text: string;
  icon?: string;
}

// Usage Examples
<Hero
  headline="Lost Something? Trace It."
  subheadline="A community-powered platform helping people report and recover lost items quickly."
  primaryCTA={{
    text: "Report Lost Item",
    href: "/report-lost",
    variant: "primary",
    size: "lg"
  }}
  secondaryCTA={{
    text: "Found an Item",
    href: "/report-found",
    variant: "secondary",
    size: "lg"
  }}
  illustration={{
    src: "/hero-illustration.svg",
    alt: "TraceIT platform illustration"
  }}
  trustBadges={[
    { id: "1", text: "1000+ Items Recovered" },
    { id: "2", text: "50+ Active Communities" }
  ]}
/>
```

### Features Section Component
```typescript
interface FeaturesProps {
  features: FeatureData[];
  layout?: 'grid' | 'carousel';
  columns?: 2 | 3 | 4;
  animated?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

// Usage Examples
<Features
  title="Powerful Features"
  subtitle="Everything you need to recover lost items"
  features={featuresData}
  layout="grid"
  columns={3}
  animated={true}
/>
```

### Feature Card Component
```typescript
interface FeatureCardProps {
  feature: FeatureData;
  variant?: 'default' | 'detailed';
  showIcon?: boolean;
  animated?: boolean;
  className?: string;
}

// Usage Examples
<FeatureCard
  feature={{
    id: "1",
    title: "Item Reporting",
    description: "Quickly report lost or found items",
    icon: "file-text",
    category: "reporting"
  }}
  variant="detailed"
  animated={true}
/>
```

### How It Works Component
```typescript
interface HowItWorksProps {
  title: string;
  subtitle?: string;
  steps: StepData[];
  layout?: 'horizontal' | 'vertical';
  animated?: boolean;
  className?: string;
}

// Usage Examples
<HowItWorks
  title="How TraceIT Works"
  subtitle="Simple 3-step process to recover your items"
  steps={stepsData}
  layout="horizontal"
  animated={true}
/>
```

### Step Card Component
```typescript
interface StepCardProps {
  step: StepData;
  variant?: 'numbered' | 'icon';
  animated?: boolean;
  className?: string;
}

// Usage Examples
<StepCard
  step={{
    id: "1",
    step: 1,
    title: "Report Lost Item",
    description: "User reports a lost item including description and image",
    icon: "upload"
  }}
  variant="numbered"
  animated={true}
/>
```

---

## Interactive Component Contracts

### FAQ Component
```typescript
interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  categories?: string[];
  searchable?: boolean;
  allowMultiple?: boolean;
  className?: string;
}

// Usage Examples
<FAQ
  title="Frequently Asked Questions"
  items={faqData}
  searchable={true}
  allowMultiple={false}
/>
```

### FAQ Item Component
```typescript
interface FAQItemProps {
  item: FAQItem;
  expanded?: boolean;
  onToggle?: () => void;
  className?: string;
}

// Usage Examples
<FAQItem
  item={{
    id: "1",
    question: "Is TraceIT free to use?",
    answer: "Yes, TraceIT is completely free for all users.",
    category: "general"
  }}
  expanded={expanded}
  onToggle={toggleExpanded}
/>
```

### Testimonials Component
```typescript
interface TestimonialsProps {
  testimonials: Testimonial[];
  layout?: 'grid' | 'carousel' | 'slider';
  title?: string;
  subtitle?: string;
  showAvatars?: boolean;
  showRatings?: boolean;
  autoPlay?: boolean;
  className?: string;
}

// Usage Examples
<Testimonials
  title="What Users Say"
  subtitle="Real stories from our community"
  testimonials={testimonialsData}
  layout="carousel"
  showAvatars={true}
  showRatings={true}
  autoPlay={true}
/>
```

### Testimonial Card Component
```typescript
interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured';
  showAvatar?: boolean;
  showRating?: boolean;
  className?: string;
}

// Usage Examples
<TestimonialCard
  testimonial={{
    id: "1",
    name: "Sarah Johnson",
    role: "College Student",
    avatar: "/avatars/sarah.jpg",
    quote: "TraceIT helped me recover my lost laptop within hours!",
    rating: 5,
    verified: true
  }}
  variant="featured"
  showAvatar={true}
  showRating={true}
/>
```

---

## Form Component Contracts

### Contact Form Component
```typescript
interface ContactFormProps {
  fields: FormField[];
  submitButton: CTAButton;
  onSubmit: (data: ContactFormData) => Promise<void>;
  successMessage?: string;
  errorMessage?: string;
  className?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

// Usage Examples
<ContactForm
  fields={formFields}
  submitButton={{
    text: "Send Message",
    variant: "primary",
    size: "lg"
  }}
  onSubmit={handleSubmit}
  successMessage="Message sent successfully!"
  errorMessage="Failed to send message. Please try again."
/>
```

### Form Field Component
```typescript
interface FormFieldProps {
  field: FormField;
  value?: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  className?: string;
}

// Usage Examples
<FormField
  field={{
    id: "name",
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "Enter your name"
  }}
  value={formData.name}
  error={errors.name}
  onChange={(value) => setFormData({ ...formData, name: value })}
/>
```

---

## Layout Component Contracts

### Footer Component
```typescript
interface FooterProps {
  logo: {
    src: string;
    alt: string;
  };
  tagline: string;
  sections: FooterSection[];
  socialLinks: SocialLink[];
  legalLinks: LegalLink[];
  copyright: string;
  className?: string;
}

// Usage Examples
<Footer
  logo={{
    src: "/logo-white.svg",
    alt: "TraceIT"
  }}
  tagline="Reconnecting people with their lost belongings"
  sections={footerSections}
  socialLinks={socialLinks}
  legalLinks={legalLinks}
  copyright="© 2026 TraceIT. All rights reserved."
/>
```

### Layout Component
```typescript
interface LayoutProps {
  children: React.ReactNode;
  navigation: NavigationData;
  footer: FooterData;
  className?: string;
}

// Usage Examples
<Layout
  navigation={navigationData}
  footer={footerData}
>
  <main>
    <Hero />
    <Features />
    <Testimonials />
  </main>
</Layout>
```

---

## Animation Contracts

### Animation Variants
```typescript
interface AnimationVariants {
  fadeIn: {
    initial: object;
    animate: object;
    exit?: object;
  };
  slideUp: {
    initial: object;
    animate: object;
    exit?: object;
  };
  scale: {
    initial: object;
    animate: object;
    exit?: object;
  };
  glow: {
    initial: object;
    animate: object;
    exit?: object;
  };
}

// Usage Examples
<motion.div
  variants={animationVariants.fadeIn}
  initial="initial"
  animate="animate"
  exit="exit"
>
  <FeatureCard />
</motion.div>
```

### Scroll Reveal Component
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fadeIn' | 'slideUp' | 'scale' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  className?: string;
}

// Usage Examples
<ScrollReveal variant="slideUp" delay={0.2}>
  <FeatureCard />
</ScrollReveal>
```

---

## Theme Contracts

### Theme Provider
```typescript
interface Theme {
  colors: {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    text: {
      primary: string;
      secondary: string;
    };
    border: string;
    glow: {
      primary: string;
      secondary: string;
    };
  };
  typography: {
    fontFamily: string;
    scale: Record<string, string>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}
```

---

## Error Boundary Contracts

### Error Boundary Component
```typescript
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

// Usage Examples
<ErrorBoundary
  onError={(error, errorInfo) => {
    console.error('Error caught by boundary:', error, errorInfo);
  }}
>
  <LandingPage />
</ErrorBoundary>
```

---

## Performance Contracts

### Lazy Load Component
```typescript
interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

// Usage Examples
<LazyLoad fallback={<div>Loading...</div>}>
  <HeavyComponent />
</LazyLoad>
```

### Image Optimization Component
```typescript
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  className?: string;
}

// Usage Examples
<OptimizedImage
  src="/hero-illustration.svg"
  alt="TraceIT platform illustration"
  width={600}
  height={400}
  priority={true}
  placeholder="blur"
/>
```

---

## Accessibility Contracts

### Accessibility Wrapper
```typescript
interface AccessibilityProps {
  children: React.ReactNode;
  role?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  tabIndex?: number;
  className?: string;
}

// Usage Examples
<Accessibility
  role="region"
  ariaLabel="Features section"
  ariaDescribedBy="features-description"
>
  <FeaturesSection />
</Accessibility>
```

---

*These UI contracts provide comprehensive interface definitions for all TraceIT landing page components, ensuring consistency, type safety, and maintainability throughout the development process.*
