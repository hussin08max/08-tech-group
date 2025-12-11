# 🚀 Static Site Deployment Guide for Vercel

## ✅ Project Status

Your project has been fully converted to a **100% static website** with:
- ✅ No backend/API routes
- ✅ No server-side code
- ✅ Pure static HTML/CSS/JS output
- ✅ Ready for Vercel Static Hosting

---

## 📁 Final Project Structure

```
platform/
│
├── app/                          # Next.js App Router (Static Pages)
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── robots.ts                # robots.txt generator
│   ├── sitemap.ts               # sitemap.xml generator
│   ├── about/                   # About page
│   ├── services/                # Services page
│   ├── pricing/                 # Pricing page (Stripe links)
│   ├── contact/                 # Contact page (HubSpot/Tally)
│   ├── order/                   # Order page (HubSpot/Tally)
│   └── thank-you/               # Thank you page
│
├── components/                   # React Components
│   ├── navbar.tsx              # Navigation
│   ├── footer.tsx              # Footer (static text)
│   ├── language-switcher.tsx   # Language switcher
│   ├── hubspot-form.tsx        # Form embed
│   └── ui/                     # UI components
│
├── lib/                         # Utilities
│   └── i18n/                   # Translation system
│
├── public/                      # Static assets
│   └── logo.png
│
├── scripts/
│   └── copy-to-dist.js         # Build script (copies /out to /dist)
│
├── next.config.js              # ✅ Static export enabled
├── vercel.json                 # ✅ Vercel configuration
├── package.json                # ✅ Updated scripts
└── tsconfig.json
```

---

## 🔧 Configuration Files

### 1. **next.config.js**
```javascript
{
  output: 'export',           // Static export
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'out'
}
```

### 2. **vercel.json**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": null,
  "cleanUrls": true,
  "trailingSlash": true
}
```

### 3. **package.json Scripts**
```json
{
  "build": "next build && npm run copy-to-dist",
  "copy-to-dist": "node scripts/copy-to-dist.js",
  "export": "next build && npm run copy-to-dist"
}
```

---

## 📋 Pre-Deployment Checklist

### ✅ Required Configuration

1. **HubSpot/Tally Forms:**
   - [ ] Update `YOUR_PORTAL_ID` in `app/contact/page.tsx`
   - [ ] Update `YOUR_FORM_ID` in `app/contact/page.tsx`
   - [ ] Update `YOUR_PORTAL_ID` in `app/order/page.tsx`
   - [ ] Update `YOUR_FORM_ID` in `app/order/page.tsx`

2. **Stripe Payment Links:**
   - [ ] Replace all payment links in `app/pricing/page.tsx`
   - [ ] Test payment links work correctly

3. **Domain Configuration:**
   - [ ] Update `baseUrl` in `app/sitemap.ts`
   - [ ] Update `baseUrl` in `app/robots.ts`

4. **Footer Text:**
   - [ ] Update footer text in `components/footer.tsx` (if needed)

---

## 🛠️ Local Build & Test

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build Static Site
```bash
npm run build
```

This will:
1. Run `next build` → Creates `/out` folder
2. Run `copy-to-dist.js` → Copies `/out` to `/dist`

### Step 3: Verify Build Output
```bash
# Check that /dist folder exists
ls dist/

# You should see:
# - index.html
# - about/
# - services/
# - pricing/
# - contact/
# - order/
# - thank-you/
# - _next/
# - static files
```

### Step 4: Test Locally (Optional)
```bash
# Install serve globally
npm install -g serve

# Serve the dist folder
serve dist

# Or use Python
python -m http.server 8000 --directory dist
```

Visit `http://localhost:3000` (or port shown) to test.

---

## 🚀 Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for static deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Configure Build Settings:**
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - ✅ Your site is live!

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? (your-project-name)
# - Directory? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

---

## 🔍 Build Verification

After deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Language switching works
- [ ] Dark/light theme works
- [ ] Forms submit (HubSpot/Tally)
- [ ] Payment links work (Stripe)
- [ ] Images load correctly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] SEO meta tags present

---

## 📝 Important Notes

### Static Export Limitations
- **No Server-Side Rendering:** All pages pre-rendered at build time
- **No API Routes:** All data must be static or external
- **No Dynamic Routes:** Only static routes supported
- **Image Optimization:** Disabled (uses unoptimized images)

### External Services
- **Forms:** HubSpot or Tally.so (external submission)
- **Payments:** Stripe Payment Links (external processing)
- **Hosting:** Vercel Static Hosting

### Build Output
- Next.js creates `/out` folder
- Script copies `/out` to `/dist`
- Vercel serves from `/dist` folder

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

### Missing Files in /dist
- Check that `scripts/copy-to-dist.js` ran successfully
- Verify `/out` folder exists after `next build`
- Check file permissions

### Vercel Deployment Fails
- Verify `vercel.json` is correct
- Check build logs in Vercel dashboard
- Ensure `outputDirectory` is set to `dist`
- Verify all dependencies are in `package.json`

### Forms Not Working
- Verify HubSpot/Tally IDs are correct
- Check browser console for errors
- Ensure form embed scripts load

### Images Not Loading
- Check image paths in `/public` folder
- Verify `unoptimized: true` in `next.config.js`
- Check image URLs in browser network tab

---

## 📊 Build Output Structure

```
dist/
├── index.html              # Home page
├── about/
│   └── index.html
├── services/
│   └── index.html
├── pricing/
│   └── index.html
├── contact/
│   └── index.html
├── order/
│   └── index.html
├── thank-you/
│   └── index.html
├── _next/
│   ├── static/
│   └── ...
├── logo.png
├── robots.txt
└── sitemap.xml
```

---

## ✅ Final Checklist

Before deploying:

- [ ] All HubSpot/Tally form IDs configured
- [ ] All Stripe payment links updated
- [ ] Domain URLs updated in sitemap/robots
- [ ] Footer text updated (if needed)
- [ ] Build completes successfully: `npm run build`
- [ ] `/dist` folder contains all files
- [ ] Tested locally with `serve dist`
- [ ] No console errors
- [ ] All pages accessible
- [ ] Forms work correctly
- [ ] Payment links work correctly

---

## 🎉 Success!

Your project is now a **100% static website** ready for Vercel!

- ✅ Zero backend dependencies
- ✅ Fully static HTML/CSS/JS
- ✅ Vercel-ready configuration
- ✅ External form/payment integration

Deploy and enjoy! 🚀
