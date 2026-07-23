# Ecoknack Website - Complete Implementation Guide

## Database Schema (Firebase/Supabase)

### 1. Projects Collection
```javascript
{
  id: string,
  title: string,
  slug: string,
  description: string,
  longDescription: string,
  category: "solar" | "commercial" | "residential" | "petrol-stations" | "warehouses" | "roads" | "civil" | "fabrication",
  location: string,
  completionDate: timestamp,
  client: string,
  budget: number,
  servicesOffered: string[],
  galleryImages: string[],
  beforeAfterImages: { before: string, after: string }[],
  videos: string[],
  status: "completed" | "ongoing" | "planning",
  teamSize: number,
  equipment: string[],
  sustainability: string,
  awards: string[],
  createdAt: timestamp,
  updatedAt: timestamp,
  featured: boolean,
}
```

### 2. Gallery Collection
```javascript
{
  id: string,
  title: string,
  description: string,
  imageUrl: string,
  thumbnailUrl: string,
  projectId: string (reference),
  category: string,
  tags: string[],
  size: number,
  dimensions: { width: number, height: number },
  uploadedBy: string,
  uploadedAt: timestamp,
  public: boolean,
}
```

### 3. Blog/News Collection
```javascript
{
  id: string,
  title: string,
  slug: string,
  content: string,
  excerpt: string,
  author: string,
  category: "project-update" | "industry-news" | "company-news" | "tips" | "sustainability",
  featuredImage: string,
  tags: string[],
  published: boolean,
  publishedAt: timestamp,
  updatedAt: timestamp,
  views: number,
}
```

### 4. Team Members Collection
```javascript
{
  id: string,
  name: string,
  title: string,
  department: string,
  email: string,
  phone: string,
  bio: string,
  image: string,
  specialization: string[],
  experience: number,
  certifications: string[],
  social: { linkedin?: string, twitter?: string },
  visible: boolean,
}
```

### 5. Quote Requests Collection
```javascript
{
  id: string,
  name: string,
  email: string,
  phone: string,
  company?: string,
  service: string,
  description: string,
  budget?: string,
  timeline?: string,
  attachments?: string[],
  status: "new" | "contacted" | "quoted" | "won" | "lost",
  notes?: string,
  submittedAt: timestamp,
  followUpAt?: timestamp,
  assignedTo?: string,
}
```

### 6. Contact Messages Collection
```javascript
{
  id: string,
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string,
  service?: string,
  status: "new" | "read" | "responded",
  respondedAt?: timestamp,
  response?: string,
  submittedAt: timestamp,
}
```

### 7. Testimonials Collection
```javascript
{
  id: string,
  clientName: string,
  clientCompany: string,
  clientPosition: string,
  clientImage: string,
  testimonial: string,
  rating: 1 | 2 | 3 | 4 | 5,
  projectId?: string,
  featured: boolean,
  verified: boolean,
  date: timestamp,
}
```

### 8. Services Collection
```javascript
{
  id: string,
  title: string,
  slug: string,
  description: string,
  longDescription: string,
  icon: string,
  image: string,
  features: string[],
  benefits: string[],
  process: { step: number, title: string, description: string }[],
  relatedProjects: string[],
  pricing?: string,
  faq: { question: string, answer: string }[],
}
```

### 9. Client Logos Collection
```javascript
{
  id: string,
  name: string,
  logo: string,
  website?: string,
  category: "government" | "private" | "ngo" | "commercial" | "industrial",
  featured: boolean,
}
```

### 10. Certifications Collection
```javascript
{
  id: string,
  name: string,
  issuer: string,
  certificateId: string,
  issuedDate: timestamp,
  expiryDate?: timestamp,
  description: string,
  documentUrl: string,
  category: "nca" | "epra" | "icta" | "cak" | "other",
}
```

### 11. Equipment Collection
```javascript
{
  id: string,
  name: string,
  type: "tipper" | "excavator" | "roller" | "crane" | "cnc" | "other",
  description: string,
  image: string,
  specifications: Record<string, string>,
  quantity: number,
  rentalRate?: number,
  operator?: string,
  condition: "excellent" | "good" | "fair",
  lastMaintenance?: timestamp,
  nextMaintenance?: timestamp,
}
```

### 12. Careers/Jobs Collection
```javascript
{
  id: string,
  title: string,
  department: string,
  description: string,
  responsibilities: string[],
  requirements: string[],
  benefits: string[],
  salary?: string,
  location: string,
  jobType: "full-time" | "part-time" | "contract" | "internship",
  posted: timestamp,
  closes: timestamp,
  featured: boolean,
  applications: number,
}
```

## API Endpoints Structure

### Public API
```
GET  /api/projects                    # List projects
GET  /api/projects/:id                # Get project details
GET  /api/gallery                     # List gallery items
GET  /api/blog                        # List blog posts
GET  /api/blog/:slug                  # Get blog post
GET  /api/services                    # List services
GET  /api/team                        # List team members
GET  /api/clients                     # List clients
GET  /api/careers                     # List open positions
POST /api/quotes                      # Submit quote request
POST /api/contact                     # Submit contact form
POST /api/newsletter                  # Subscribe to newsletter
```

### Admin API (Protected)
```
CRUD /api/admin/projects              # Manage projects
CRUD /api/admin/gallery               # Manage gallery
CRUD /api/admin/blog                  # Manage blog
CRUD /api/admin/team                  # Manage team
CRUD /api/admin/services              # Manage services
CRUD /api/admin/quotes                # Manage quotes
CRUD /api/admin/jobs                  # Manage job postings
GET  /api/admin/analytics             # Analytics dashboard
```

## Setup Instructions

### 1. Firebase Setup
```bash
# Initialize Firebase
npm install firebase

# Create firebaseConfig.ts
export const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
```

### 2. Cloudinary Setup
```bash
# For image management
npm install next-cloudinary cloudinary

# In your component:
import { CldUploadWidget } from 'next-cloudinary';
```

### 3. Authentication Setup
```javascript
// Admin auth with Firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export const loginAdmin = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
```

## Features Implementation Checklist

### Core Features
- [x] Responsive Design
- [x] Dark Mode Support
- [x] SEO Optimization
- [x] Contact Forms with validation
- [x] Project Portfolio with filtering
- [x] Image Gallery with lazy loading
- [x] Blog/News Section
- [x] Team Page
- [x] Services Pages

### Admin Dashboard
- [x] Project Management
- [x] Gallery Management
- [x] Blog Management
- [x] Team Management
- [x] Quote Request Tracking
- [x] Message Management
- [x] Analytics Dashboard
- [x] User Management

### Advanced Features
- [ ] Client Portal
- [ ] Tender Download Center
- [ ] Document Management
- [ ] Online Quote Calculator
- [ ] Equipment Booking System
- [ ] Supplier Registration
- [ ] Project Progress Tracking
- [ ] AI Assistant Chatbot

### Integrations
- [ ] Google Maps Integration
- [ ] EmailJS/Resend Email Service
- [ ] WhatsApp Business API
- [ ] YouTube Video Embedding
- [ ] Social Media Integration
- [ ] Google Analytics
- [ ] Hotjar Analytics

## Performance Optimization

### Image Optimization
```javascript
// Use Cloudinary for automatic optimization
import { CldImage } from 'next-cloudinary';

<CldImage
  src="path/to/image"
  width={500}
  height={500}
  quality="auto"
  format="auto"
/>
```

### Code Splitting
```javascript
// Lazy load components
const ProjectDetail = lazy(() => import('./ProjectDetail'));
const AdminDashboard = lazy(() => import('./admin/Dashboard'));
```

### Caching Strategy
```javascript
// Service Worker caching
// Implement with Workbox
npm install workbox-window
```

## SEO Implementation

### Meta Tags
```javascript
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Ecoknack Engineering - Building Kenya's Future</title>
  <meta name="description" content="..." />
  <meta property="og:image" content="..." />
</Helmet>
```

### Structured Data
```javascript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ecoknack Engineering",
  "logo": "...",
  "description": "...",
  "url": "https://ecoknack.com"
}
</script>
```

## Deployment

### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Configure environment variables
vercel env add VITE_FIREBASE_API_KEY
```

### Build for Production
```bash
# Build
npm run build

# Preview
npm run preview

# Check bundle size
npm run analyze
```

## Security Considerations

1. **Environment Variables** - Never commit .env files
2. **Firebase Security Rules** - Restrict database access
3. **Input Validation** - Validate all form inputs
4. **Rate Limiting** - Implement on API endpoints
5. **CORS Configuration** - Restrict API access
6. **SSL/TLS** - Always use HTTPS
7. **Admin Authentication** - Implement 2FA for admin

## Testing

```bash
# Unit Tests
npm run test

# E2E Tests
npm run test:e2e

# Visual Regression
npm run test:visual
```

## Maintenance

- Regular database backups
- Security updates
- Performance monitoring
- SEO audits
- User feedback collection
- A/B testing
- Analytics review

## Support & Documentation

- API Documentation: `/docs/api`
- Admin Guide: `/docs/admin`
- Component Library: Storybook
- Deployment Guide: `/docs/deployment`
