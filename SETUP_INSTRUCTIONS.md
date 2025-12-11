# 🚀 Quick Setup Instructions

## Before Deployment - Update These:

### 1. Analytics IDs (in `app/layout.tsx`)
```typescript
// Line ~25: Replace G-XXXXXXXXXX with your GA4 ID
gtag('config', 'G-XXXXXXXXXX');

// Line ~36: Replace 0000000 with your Hotjar Site ID
h._hjSettings={hjid:0000000,hjsv:6};
```

### 2. HubSpot Forms (in `app/contact/page.tsx` and `app/order/page.tsx`)
```typescript
// Replace YOUR_PORTAL_ID and YOUR_FORM_ID
<HubSpotForm
  portalId="YOUR_PORTAL_ID"
  formId="YOUR_FORM_ID"
  region="na1"
/>
```

### 3. Stripe Payment Links (in `app/pricing/page.tsx`)
Replace all `https://stripe.com/pay/...` URLs with your actual Stripe Payment Links.

### 4. Contact Information
Search and replace throughout the project:
- Phone: `+971 00 000 0000`
- Email: `info@uaedigital.ae`
- WhatsApp: `971000000000`

### 5. Domain (in `app/sitemap.ts` and `app/robots.ts`)
```typescript
const baseUrl = 'https://uaedigital.ae' // Replace with your domain
```

### 6. Google Maps (in `app/contact/page.tsx`)
Replace the placeholder with actual Google Maps static image or embed.

### 7. Social Media Links (in `components/footer.tsx`)
Update social media URLs in the footer.

---

## Installation & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use CLI:
```bash
npm i -g vercel
vercel
```

---

## All Pages Created:

✅ `/` - Home  
✅ `/services` - All services  
✅ `/pricing` - Pricing packages  
✅ `/about` - About us  
✅ `/contact` - Contact form  
✅ `/order` - Order form  
✅ `/thank-you` - Thank you page  

---

## Features Included:

✅ Next.js 15 App Router  
✅ TypeScript  
✅ TailwindCSS + shadcn/ui  
✅ Framer Motion animations  
✅ Dark mode  
✅ SEO optimized  
✅ Analytics ready  
✅ Responsive design  
✅ WhatsApp integration  
✅ Payment link buttons  

---

**Ready to deploy!** 🎉

