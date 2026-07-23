# Ecoknack Website - Quick Start Guide

## Prerequisites

- Node.js 16+ (download from https://nodejs.org/)
- npm or yarn
- Git
- Code editor (VS Code recommended)

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ecoknack-website.git
cd ecoknack-website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your actual values
nano .env.local
```

### 4. Firebase Setup

#### Create a Firebase Project:
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Enter "Ecoknack Engineering" as project name
4. Accept terms and create project
5. Go to Project Settings (gear icon)
6. Copy credentials to your .env.local

#### Set Up Firebase Database:
```javascript
// Enable Firestore Database
// In Firebase Console > Firestore Database
// Create database in production mode
// Add security rules below
```

#### Firebase Security Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read, private write
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Admin only for sensitive data
    match /admin/{document=**} {
      allow read, write: if request.auth.uid in get(/databases/$(database)/documents/admins/allowed).data.users;
    }

    // Quote requests - anyone can write
    match /quotes/{document=**} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Messages - anyone can write
    match /messages/{document=**} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

### 5. Cloudinary Setup

1. Create account at https://cloudinary.com/
2. Go to Dashboard
3. Copy Cloud Name and API Key to .env.local
4. Create upload preset:
   - Settings > Upload > Add upload preset
   - Set to "Unsigned"
   - Copy preset name to .env.local

### 6. EmailJS Setup

1. Create account at https://www.emailjs.com/
2. Add new service (Gmail recommended)
3. Create email templates:
   - Quote Request Template
   - Contact Message Template
   - Admin Notification Template
4. Copy Service ID, Template IDs to .env.local

### 7. Google Maps Setup

1. Go to https://console.cloud.google.com/
2. Create new project
3. Enable Maps JavaScript API
4. Create API key
5. Add to .env.local

## Development

### Start Development Server
```bash
npm run dev
```

The site will open at http://localhost:3000

### Hot Module Replacement
Changes to your code will automatically refresh in the browser.

## Project Structure

```
src/
├── components/        # Reusable components
├── pages/            # Page components
├── admin/            # Admin dashboard
├── services/         # API services
├── hooks/            # Custom React hooks
├── types/            # TypeScript types
├── data/             # Static data
├── styles/           # Global styles
└── App.tsx           # Main app component
```

## Common Tasks

### Add a New Page
```bash
# Create page file
touch src/pages/NewPage.tsx

# Add route in App.tsx
<Route path="/new-page" element={<NewPage />} />
```

### Add a Service
```bash
# Create service file
touch src/services/newService.ts

# Export from services/index.ts
export * from './newService';
```

### Add Database Collection
1. Create collection in Firebase
2. Define TypeScript type in src/types/
3. Create CRUD functions in services/
4. Add admin page to manage collection

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Configure environment variables
vercel env add VITE_FIREBASE_API_KEY
# ... add all other variables
```

## Admin Access

### Create Admin User
1. Go to Firebase Authentication
2. Add user with admin email
3. Add user to `admins` collection:
```javascript
{
  email: "admin@ecoknack.com",
  role: "admin",
  permissions: ["all"],
  createdAt: new Date()
}
```

### Access Admin Dashboard
- Navigate to `/admin`
- Login with admin credentials
- Manage all content

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

### Firebase Connection Error
- Check API keys in .env.local
- Verify Firebase is enabled
- Check internet connection
- Check firestore rules

### Cloudinary Upload Failed
- Verify cloud name
- Check upload preset is unsigned
- Verify API key

### Email Not Sending
- Check EmailJS service is active
- Verify email credentials
- Check spam folder
- View EmailJS dashboard logs

## Performance Tips

### Optimize Images
- Use Cloudinary's automatic optimization
- Compress before uploading
- Use WebP format when possible

### Lazy Loading
- Images use intersection observer
- Routes use code splitting
- Components load on demand

### Caching
- Service worker caches assets
- Browser caches static files
- Firebase caches queries

## Testing

### Run Tests
```bash
npm run test
```

### E2E Testing
```bash
npm run test:e2e
```

### Visual Testing
```bash
npm run test:visual
```

## Building for Production

### Build Static Site
```bash
npm run build
```

Output goes to `dist/` folder

### Preview Production Build
```bash
npm run preview
```

### Check Bundle Size
```bash
npm run analyze
```

## Security Checklist

- [ ] All environment variables set
- [ ] Firebase rules configured
- [ ] Admin user created
- [ ] CORS configured
- [ ] SSL enabled (Vercel handles)
- [ ] Database backups enabled
- [ ] Content security policy set

## Useful Resources

- [React Documentation](https://react.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## Support

For issues and questions:
- Create GitHub issue
- Contact development team
- Check documentation

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up Firebase
3. ✅ Configure environment
4. ✅ Start development server
5. ⏭️ Create project content
6. ⏭️ Upload images
7. ⏭️ Configure admin users
8. ⏭️ Test all features
9. ⏭️ Deploy to production

Happy coding! 🚀
