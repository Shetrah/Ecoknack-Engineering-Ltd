# Ecoknack Engineering Website

A modern, professional website for Ecoknack Engineering Limited - a leading engineering and construction company based in Nairobi, Kenya.

![Status](https://img.shields.io/badge/status-production--ready-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-16+-green)

## 🌟 Features

### For Users
- 🏗️ **Project Portfolio** - Browse 360+ completed projects with detailed information
- 🏢 **Service Showcase** - Comprehensive service descriptions and industry expertise
- 📸 **Image Gallery** - High-quality project photography
- 💬 **Contact Forms** - Easy quote requests and inquiries
- 📱 **Mobile Responsive** - Perfect on all devices
- 🌙 **Dark Mode** - Comfortable viewing in any lighting
- ⚡ **Fast Loading** - Optimized performance
- 🔍 **SEO Optimized** - Excellent search engine visibility

### For Admins
- 📊 **Dashboard** - Overview of all activities
- 🎨 **Project Management** - Add/edit/delete projects
- 🖼️ **Gallery Management** - Upload and organize images
- 📝 **Blog/News** - Create and publish content
- 👥 **Team Management** - Manage team members
- 💌 **Quote Tracking** - Manage inquiries and leads
- 📧 **Message Management** - Track customer messages
- 📈 **Analytics** - View website statistics

## 🎯 Website Pages

### Public Pages
- **Home** - Hero section, services overview, featured projects, testimonials
- **About** - Company story, mission, vision, core values, team
- **Services** - Detailed service pages
  - Solar Energy Solutions
  - Building Construction
  - Design & Build
  - Civil Engineering
  - Road Construction
  - CNC & Fabrication
  - Equipment Rental
  - Project Management

- **Projects** - Filterable portfolio with 8 categories
- **Industries** - Target industries (Government, Oil & Gas, Commercial, etc.)
- **Equipment** - Machinery and equipment showcase
- **Safety** - Health & Safety policies and commitments
- **Certifications** - NCA, EPRA, ICTA, CAK certifications
- **Careers** - Job postings and internship opportunities
- **News** - Blog and company updates
- **Contact** - Contact form, team contact info, maps integration
- **Sales** - Pricing, special offers, sales team contact

### Admin Pages
- `/admin` - Main dashboard
- `/admin/projects` - Manage projects
- `/admin/gallery` - Manage images
- `/admin/blog` - Manage blog posts
- `/admin/team` - Manage team members
- `/admin/quotes` - Track quote requests
- `/admin/messages` - View contact messages

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation

### Backend & Services
- **Firebase** - Authentication, Firestore database, Storage
- **Cloudinary** - Image management and optimization
- **EmailJS** - Email notifications

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code quality
- **Prettier** - Code formatting

### Deployment
- **Vercel** - Hosting and deployment

## 📦 Installation

See [QUICKSTART.md](./QUICKSTART.md) for detailed setup instructions.

```bash
# Clone repository
git clone https://github.com/yourusername/ecoknack-website.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Environment Variables
Set in Vercel project settings:
- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_CLOUDINARY_CLOUD_NAME
- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_GOOGLE_MAPS_API_KEY

## 📊 Database Schema

### Collections
1. **projects** - Construction and engineering projects
2. **gallery** - Project images and photos
3. **blog** - News and blog posts
4. **team** - Team member profiles
5. **quoteRequests** - Quote request inquiries
6. **contactMessages** - Contact form submissions
7. **testimonials** - Client testimonials
8. **services** - Service descriptions
9. **clients** - Client logos and info
10. **certifications** - Certifications and awards
11. **equipment** - Machinery and equipment
12. **jobs** - Job postings

## 🎨 Design System

### Colors
- **Primary**: #0A3D62 (Deep Blue)
- **Secondary**: #F7941D (Safety Orange)
- **Accent**: #3CB371 (Green)
- **Dark**: #1B1B1B (Dark Gray)
- **Light**: #F5F5F5 (Light Gray)

### Typography
- **Font Family**: Inter, Fira Code (monospace)
- **Headings**: Bold, various sizes
- **Body**: Regular, 16px default

### Components
- Cards, buttons, forms, navigation
- Responsive layouts
- Animations and transitions

## 📱 Responsive Design

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ♿ Accessibility

- WCAG 2.1 Level AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Alt text for images

## 📈 Performance

- **Lighthouse Score**: 90+
- **Page Load Time**: < 2s
- **Core Web Vitals**: Good
- **Image Optimization**: Cloudinary
- **Code Splitting**: Automatic with Vite
- **Caching**: Service Worker

## 🔒 Security

- ✅ HTTPS/SSL (Vercel)
- ✅ Environment variables protection
- ✅ Firebase security rules
- ✅ Input validation
- ✅ CORS configuration
- ✅ Rate limiting (Firebase)
- ✅ Admin authentication

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Visual regression
npm run test:visual

# Lint code
npm run lint
```

## 📚 Documentation

- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) - Full implementation details
- [API Documentation](./docs/api.md) - API endpoints
- [Admin Guide](./docs/admin-guide.md) - Admin dashboard guide

## 🎯 Key Metrics

- **360+** Completed Projects
- **20+** Active Sites
- **16+** Project Managers
- **12+** Heavy Machinery Units

## 🤝 Contact Information

**Ecoknack Engineering Limited**
- 📍 P.O Box 7771 - 00200, Nairobi City Square, Kenya
- 📞 +254 711 203 376
- 📧 info@ecoknack.com
- 🌐 www.the-civil-specialties.com
- 💬 WhatsApp: +254 711 203 376

## 📝 License

MIT License - See LICENSE file for details

## 🙌 Contributing

1. Create feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open Pull Request

## 🐛 Bug Reports

Submit bug reports via GitHub Issues with:
- Description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos

## 💡 Feature Requests

Feature requests welcome! Please include:
- Use case
- Expected behavior
- Design mockups (optional)

## 📞 Support

- GitHub Issues: For bugs and feature requests
- Email: support@ecoknack.com
- WhatsApp: +254 711 203 376

## 🙏 Acknowledgments

- React team for amazing framework
- Firebase for backend services
- Cloudinary for image management
- Vercel for hosting
- All contributors and supporters

## 📅 Roadmap

### Version 1.0 ✅
- [x] Core website pages
- [x] Project portfolio
- [x] Admin dashboard
- [x] Contact forms
- [x] Mobile responsive

### Version 1.1 (Planned)
- [ ] Client portal
- [ ] Equipment booking
- [ ] Quote calculator
- [ ] AI chatbot
- [ ] Advanced analytics

### Version 2.0 (Future)
- [ ] Mobile app
- [ ] Tender system
- [ ] Document management
- [ ] Project tracking
- [ ] Customer reviews

## 📊 Analytics

Integrated with:
- Google Analytics - Page views and user behavior
- Hotjar - User session recordings
- Firebase Analytics - App analytics

## 🔄 Regular Maintenance

- Weekly security updates
- Monthly performance checks
- Quarterly feature reviews
- Annual architecture reviews

## ⭐ Version History

### v1.0.0 (Current)
- Initial release
- All core features
- Admin dashboard
- Mobile responsive
- Dark mode support

---

**Last Updated**: July 2024
**Maintained by**: Ecoknack Engineering Development Team
**Status**: ✅ Production Ready
