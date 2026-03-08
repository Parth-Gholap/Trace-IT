# Data Model: TraceIT Landing Page

**Feature ID:** 1-landing-page  
**Date:** 2026-03-07  

---

## Core Data Structures

### Navigation Data
```typescript
interface NavigationData {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  links: NavLink[];
  cta: CTAButton;
}

interface NavLink {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
}
```

### Hero Section Data
```typescript
interface HeroData {
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
}

interface TrustBadge {
  id: string;
  text: string;
  icon?: string;
}
```

### Feature Data
```typescript
interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'reporting' | 'matching' | 'communication' | 'discovery';
  detailedDescription?: string;
  benefits?: string[];
}

interface FeatureGrid {
  features: FeatureData[];
  layout: 'grid' | 'carousel';
  columns?: 2 | 3 | 4;
  animated?: boolean;
}
```

### How It Works Data
```typescript
interface StepData {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  detailedInfo?: string;
}

interface HowItWorksData {
  title: string;
  subtitle?: string;
  steps: StepData[];
  layout: 'horizontal' | 'vertical';
}
```

### Community Impact Data
```typescript
interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description?: string;
  animated?: boolean;
}

interface CommunityData {
  title: string;
  subtitle?: string;
  metrics: ImpactMetric[];
  testimonials?: string[];
  callToAction?: CTAButton;
}
```

### Use Case Data
```typescript
interface UseCase {
  id: string;
  title: string;
  scenario: string;
  solution: string;
  outcome: string;
  icon?: string;
  image?: {
    src: string;
    alt: string;
  };
  targetAudience: 'students' | 'professionals' | 'events' | 'residents';
}

interface UseCasesData {
  title: string;
  subtitle?: string;
  useCases: UseCase[];
  layout: 'grid' | 'carousel';
}
```

### Testimonial Data
```typescript
interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating?: number;
  location?: string;
  verified?: boolean;
}

interface TestimonialsData {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  layout: 'grid' | 'carousel' | 'slider';
  showAvatars?: boolean;
  showRatings?: boolean;
}
```

### FAQ Data
```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'security' | 'features' | 'technical' | 'pricing';
  expanded?: boolean;
}

interface FAQData {
  title: string;
  subtitle?: string;
  items: FAQItem[];
  categories?: string[];
  searchable?: boolean;
}
```

### Contact Data
```typescript
interface ContactForm {
  fields: FormField[];
  submitButton: CTAButton;
  successMessage: string;
  errorMessage: string;
}

interface FormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select';
  required: boolean;
  placeholder?: string;
  options?: string[]; // For select fields
  validation?: ValidationRule[];
}

interface ValidationRule {
  type: 'required' | 'email' | 'minLength' | 'maxLength';
  value?: string | number;
  message: string;
}

interface ContactData {
  title: string;
  subtitle?: string;
  form: ContactForm;
  socialLinks?: SocialLink[];
  contactInfo?: ContactInfo[];
}

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  id: string;
  type: 'email' | 'phone' | 'address';
  value: string;
  label: string;
}
```

### Footer Data
```typescript
interface FooterData {
  logo: {
    src: string;
    alt: string;
  };
  tagline: string;
  sections: FooterSection[];
  socialLinks: SocialLink[];
  legalLinks: LegalLink[];
  copyright: string;
}

interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

interface LegalLink {
  id: string;
  label: string;
  href: string;
}
```

---

## Complete Landing Page Data Structure

```typescript
interface LandingPageData {
  id: string;
  version: string;
  lastUpdated: string;
  
  // Page Metadata
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    canonical?: string;
  };
  
  // Navigation
  navigation: NavigationData;
  
  // Sections
  hero: HeroData;
  problem: {
    title: string;
    subtitle: string;
    content: string;
    scenarios: ProblemScenario[];
    illustration?: string;
  };
  howItWorks: HowItWorksData;
  features: FeatureGrid;
  community: CommunityData;
  useCases: UseCasesData;
  testimonials: TestimonialsData;
  faq: FAQData;
  finalCTA: {
    headline: string;
    subheadline: string;
    primaryCTA: CTAButton;
    secondaryCTA?: CTAButton;
    background?: string;
  };
  contact: ContactData;
  footer: FooterData;
}

interface ProblemScenario {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon?: string;
}
```

---

## Data Validation Rules

### Navigation Validation
```typescript
const navigationSchema = z.object({
  logo: z.object({
    src: z.string().url(),
    alt: z.string().min(1),
    href: z.string().url(),
  }),
  links: z.array(z.object({
    id: z.string(),
    label: z.string().min(1),
    href: z.string().url(),
    isActive: z.boolean().optional(),
  })).min(1),
  cta: z.object({
    text: z.string().min(1),
    href: z.string().url(),
    variant: z.enum(['primary', 'secondary']),
    size: z.enum(['sm', 'md', 'lg']),
  }),
});
```

### Feature Validation
```typescript
const featureSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  icon: z.string(),
  category: z.enum(['reporting', 'matching', 'communication', 'discovery']),
  detailedDescription: z.string().max(1000).optional(),
  benefits: z.array(z.string().max(200)).optional(),
});
```

### Testimonial Validation
```typescript
const testimonialSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(100),
  role: z.string().min(1).max(100),
  avatar: z.string().url(),
  quote: z.string().min(1).max(500),
  rating: z.number().min(1).max(5).optional(),
  location: z.string().max(100).optional(),
  verified: z.boolean().optional(),
});
```

### FAQ Validation
```typescript
const faqSchema = z.object({
  id: z.string(),
  question: z.string().min(1).max(200),
  answer: z.string().min(1).max(1000),
  category: z.enum(['general', 'security', 'features', 'technical', 'pricing']),
  expanded: z.boolean().optional(),
});
```

---

## Data Loading Strategy

### Static Data Loading
```typescript
// Static data for launch (manual updates)
export const landingPageData: LandingPageData = {
  id: 'traceit-landing-v1',
  version: '1.0.0',
  lastUpdated: '2026-03-07',
  // ... complete data structure
};
```

### Future API Integration
```typescript
// Prepared for future backend integration
interface LandingPageAPI {
  getLandingPageData(): Promise<LandingPageData>;
  updateFeature(id: string, data: Partial<FeatureData>): Promise<FeatureData>;
  submitContactForm(data: ContactFormData): Promise<ContactFormResponse>;
  trackEvent(event: AnalyticsEvent): Promise<void>;
}
```

### Environment Configuration
```typescript
interface Config {
  apiBaseUrl?: string;
  enableAnalytics: boolean;
  enableBackendIntegration: boolean;
  mockData: boolean;
}

export const config: Config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL,
  enableAnalytics: process.env.NODE_ENV === 'production',
  enableBackendIntegration: false, // Will be enabled when backend is ready
  mockData: true, // Use mock data for launch
};
```

---

## State Management

### Component State
```typescript
// Local component state for UI interactions
interface ComponentState {
  isMenuOpen: boolean;
  activeSection: string;
  expandedFAQ: string[];
  formData: ContactFormData;
  formErrors: FormErrors;
  isSubmitting: boolean;
}
```

### Global State (if needed)
```typescript
// Minimal global state for cross-component data
interface GlobalState {
  theme: 'dark' | 'light';
  userPreferences: UserPreferences;
  analytics: AnalyticsData;
}
```

---

## Data Migration Strategy

### Version Control
```typescript
interface DataVersion {
  version: string;
  migrationDate: string;
  changes: string[];
  breaking: boolean;
}

const dataVersions: DataVersion[] = [
  {
    version: '1.0.0',
    migrationDate: '2026-03-07',
    changes: ['Initial landing page data structure'],
    breaking: false,
  },
];
```

### Future CMS Integration
```typescript
// Prepared for future CMS integration
interface CMSSchema {
  contentTypes: {
    features: FeatureData;
    testimonials: Testimonial;
    faq: FAQItem;
  };
  fields: {
    richText: string;
    image: string;
    reference: string;
  };
}
```

---

*This data model provides a comprehensive structure for the TraceIT landing page, ensuring type safety, validation, and future extensibility while maintaining alignment with the specification requirements.*
