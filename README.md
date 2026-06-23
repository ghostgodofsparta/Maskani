# Maskani - Real Estate Marketplace

A modern, responsive real estate platform connecting landlords and tenants across Kenya.

## 🎯 Project Overview

Maskani is a guaranteed connection broker platform where:
- **Tenants** pay KES 150 to reveal verified landlord contacts
- **Landlords** pay KES 2,500/month for unlimited verified inquiries
- **Platform** ensures connections are verified before payment

## 🏗️ Project Structure

```
maskani/
├── app/
│   ├── page.tsx                 # Main landing page
│   ├── components/
│   │   └── LandingPage.tsx      # Landing page component
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx         # Login page
│   │   └── signup/
│   │       └── page.tsx         # Sign-up with role selection & OTP
│   └── dashboard/
│       ├── tenant/
│       │   └── page.tsx         # Tenant dashboard
│       └── landlord/
│           └── page.tsx         # Landlord dashboard
├── public/                       # Static assets
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Extract the project
cd maskani

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the app.

## 📄 Pages Built

### Public Pages
- **`/`** - Landing page
- **`/auth/login`** - Login page
- **`/auth/signup`** - Multi-step sign-up (role selection → auth method → OTP → details)

### Protected Pages
- **`/dashboard/tenant`** - Tenant dashboard
- **`/dashboard/landlord`** - Landlord dashboard

## 🎨 Design Features

### Color Scheme
- **Primary**: Teal (#059669)
- **Secondary**: Orange (#FF6B35)
- **Background**: Gradient (blue-50 → white → teal-50)

### Responsive
- Mobile, tablet, and desktop optimized
- Touch-friendly (48px+ buttons)
- Single to multi-column layouts

## 🔐 Authentication

### Sign-Up Flow
1. Role selection (Tenant/Landlord)
2. Auth method (Google/Phone)
3. Phone OTP or Email verification
4. Complete profile

### Login
- Email + password

## 💳 Payment Integration (TODO)

- M-Pesa for KES 150 (tenant contact reveals)
- M-Pesa for KES 2,500+ (landlord subscriptions)
- Use Pesapal or Jambopay API

## 📱 Mobile App

Deploy to Android using Capacitor:

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
npm install @capacitor/android
npx cap add android
npm run build
npx cap copy android
npx cap open android
```

Then upload signed APK to Google Play Store (KES 3,500 one-time fee).

## 📦 Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, TypeScript
- **Icons**: Lucide React
- **Database**: Firebase (TODO)
- **Payments**: Pesapal (TODO)
- **SMS**: Twilio/Africa's Talking (TODO)
- **Hosting**: Vercel

## 🔄 Development Roadmap

**Phase 1 (Current)**: UI & Auth pages ✅
**Phase 2 (Week 1-2)**: Firebase, listings, search
**Phase 3 (Week 3-4)**: Payments, OTP, WhatsApp
**Phase 4 (Week 5)**: Android app & Play Store
**Phase 5 (Week 6+)**: Analytics, reviews, scaling

## 📝 Environment Variables (TODO)

Create `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
PESAPAL_CONSUMER_KEY=
PESAPAL_CONSUMER_SECRET=
SMS_API_KEY=
GOOGLE_CLIENT_ID=
```

## 📞 API Endpoints (TODO)

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/send-otp`
- `POST /api/auth/verify-otp`
- `GET /api/properties`
- `POST /api/properties`
- `POST /api/payments/reveal-contact`
- `POST /api/payments/subscribe`

## 🧪 Testing

```bash
npm run test
npm run test:coverage
```

## 📄 License

Proprietary - All rights reserved

---

**Built for East Africa's real estate community** 🏡
