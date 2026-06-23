# Maskani Deployment Guide

## 🚀 Vercel (Web Hosting)

### Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to Git repo (optional)
# - Select project name: "maskani"
# - Select framework: "Next.js"
# - Select root directory: "./"
```

Your site will be live at: `https://maskani.vercel.app`

**Or deploy with Git:**
1. Push to GitHub: `git push origin main`
2. Go to vercel.com
3. Import GitHub repo
4. Vercel auto-deploys on each push

## 📱 Android App Deployment

### Prerequisites
- Android Studio installed
- Google Play Developer account (KES 3,500)
- Keystore for signing APK

### Step 1: Setup Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npx cap init

# Follow prompts:
# - App name: "Maskani"
# - App Package ID: "com.maskani.realestate"
# - Web app root: "out"
```

### Step 2: Add Android Platform

```bash
npm install @capacitor/android
npx cap add android

# This creates android/ directory
```

### Step 3: Build Web App

```bash
# Build Next.js for production
npm run build

# Copy to Capacitor
npx cap copy android
```

### Step 4: Open in Android Studio

```bash
npx cap open android

# This opens Android Studio automatically
```

### Step 5: Create Signed APK

In Android Studio:

1. **Build → Generate Signed Bundle/APK**
2. Choose **APK**
3. **Create new keystore**:
   - File path: `~/maskani-release.jks`
   - Password: Create strong password
   - Key alias: `maskani-key`
   - Key password: Same as keystore
   - Validity: 50 years (recommended)
   - First name: Your name
   - Organization: Your company

4. **Next** → Select **release** build type
5. **Finish** → Wait for build

APK location: `android/app/release/app-release.apk`

### Step 6: Upload to Play Store

1. **Go to Google Play Console**: https://play.google.com/console
2. **Create new app**:
   - Name: "Maskani - Real Estate"
   - Category: "Real Estate"
   - Select "All" for content rating

3. **Fill out store listing**:
   - Title: "Maskani - Real Estate Marketplace"
   - Short description (80 chars):
     "Find verified properties. Connect with landlords. Secure your ideal home."
   
   - Full description (4,000 chars):
     "Maskani is Kenya's trusted real estate marketplace. Browse verified listings,
      connect with landlords directly, and secure your ideal property with confidence.
      
      Features:
      - 20,000+ verified listings
      - Instant landlord contact
      - Guaranteed response (or refund)
      - Fast & secure M-Pesa payment
      - Transparent pricing"
   
   - Screenshots (5 required, 1080×1920px):
     1. Hero screen with search
     2. Property listing
     3. Property detail
     4. Reveal contact
     5. Dashboard
   
   - Feature graphic (1024×500px)
   
   - Icon (512×512px, with 48px safe zone)
   
   - Video (optional, YouTube link)

4. **Complete rating questionnaire**:
   - Answer all content rating questions
   - Get IARC rating

5. **Privacy policy**:
   - Create and host on website
   - Link to it in app store listing

6. **Release**:
   - Releases → Create release
   - Upload signed APK
   - Set rollout percentage (start at 25%)

7. **Submit for review**:
   - Common rejections:
     - Missing privacy policy (add before submitting)
     - App crashes on launch (test thoroughly)
     - Misleading description (be honest)
   
   - Review time: 24-48 hours (usually)
   - If rejected: Fix issue, resubmit

### Keystores & Security

**Important**: Save your keystore file!
```bash
# Backup keystore
cp ~/maskani-release.jks ~/backups/maskani-release.jks

# You'll need it for future updates
```

**Never commit keystore to Git:**
```bash
# Add to .gitignore
echo "*.jks" >> .gitignore
echo ".env.local" >> .gitignore
```

## 🔐 Environment Variables

Create `.env.local` (never commit to Git):

```env
# Firebase (from Firebase Console)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=maskani-xxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=maskani-xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=maskani-xxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

# Pesapal (from Pesapal Dashboard)
NEXT_PUBLIC_PESAPAL_CONSUMER_KEY=xxx
PESAPAL_CONSUMER_SECRET=xxx

# Twilio (from Twilio Console)
TWILIO_ACCOUNT_SID=ACxxx
TWILIO_AUTH_TOKEN=xxx
TWILIO_PHONE_NUMBER=+1234567890

# Google OAuth (from Google Cloud Console)
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxx
```

### Adding to Vercel

```bash
# Using CLI
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
vercel env add PESAPAL_CONSUMER_SECRET
# ... add all variables

# Or use Vercel Dashboard:
# Project → Settings → Environment Variables
# Add each variable there
```

## 📊 Monitoring & Analytics

### Vercel Analytics
- Automatic deployment tracking
- Performance metrics
- Error logs

### Google Play Console
- Download statistics
- User ratings
- Crash reports
- Install trends

### Firebase Console
- Real-time database status
- Authentication logs
- Storage usage

## 🔄 Update Process

### Update Web App
```bash
# Make changes
git commit -m "Feature X"
git push origin main

# Vercel auto-deploys (no action needed)
```

### Update Android App
```bash
# Make changes to code
npm run build
npx cap copy android

# In Android Studio:
# Build → Generate Signed APK
# Upload new APK to Play Store

# Note: Each update needs version bump
# android/app/build.gradle: versionCode++
```

## 🐛 Troubleshooting

### Android Build Fails
```bash
# Clean and rebuild
npm run build
npx cap sync android

# In Android Studio: Build → Clean Project
# Then: Build → Build Bundle/APK
```

### APK Won't Install
- Check Android version (min API 21)
- Check signing certificate
- Try different Android device/emulator

### App Crashes on Launch
- Check logcat in Android Studio
- Verify Firebase config
- Test on emulator first

### Play Store Rejection
- Check privacy policy (most common)
- Verify app works completely
- Test on multiple devices
- Check content rating accuracy

## 📈 Post-Launch Checklist

- [ ] Vercel domain set up
- [ ] Custom domain (optional)
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Firebase security rules configured
- [ ] M-Pesa payment tested
- [ ] SMS provider tested
- [ ] Google OAuth tested
- [ ] Android app on Play Store
- [ ] Privacy policy published
- [ ] Analytics tracking enabled
- [ ] Error logging configured
- [ ] Backup system in place

---

**Questions?** Check the README.md for more details.
