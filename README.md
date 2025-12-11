# UAE Digital Services Agency Website

A modern, fast, SEO-optimized services website built with Next.js 15, TailwindCSS, and shadcn/ui.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **shadcn/ui** components
- **Framer Motion** for animations
- **Dark mode** support
- **SEO optimized** with metadata, sitemap, and robots.txt
- **Analytics ready** (GA4 & Hotjar scripts included)
- **Form integration** (HubSpot/Tally ready)
- **Payment links** (Stripe Payment Links ready)
- **WhatsApp integration** (floating button)
- **Fully responsive** design

## 📋 Pages

- `/` - Home page with hero, services, pricing preview, testimonials, FAQs
- `/services` - All services with detailed descriptions
- `/pricing` - Pricing packages with Stripe payment link buttons
- `/about` - About us, story, mission, values, team
- `/contact` - Contact form (HubSpot/Tally embed), contact info, map
- `/order` - Service selector and order form
- `/thank-you` - Thank you page after form submission

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Analytics:**
   - Update GA4 tracking ID in `app/layout.tsx` (replace `G-XXXXXXXXXX`)
   - Update Hotjar site ID in `app/layout.tsx` (replace `0000000`)

3. **Configure Forms:**
   - For HubSpot: Update `YOUR_PORTAL_ID` and `YOUR_FORM_ID` in:
     - `app/contact/page.tsx`
     - `app/order/page.tsx`
   - For Tally: Replace HubSpot embed with Tally iframe/script

4. **Update Payment Links:**
   - Replace Stripe payment links in `app/pricing/page.tsx` with your actual Stripe Payment Links

5. **Update Contact Information:**
   - Update phone number, email, and WhatsApp number throughout the site
   - Current placeholder: `+971 00 000 0000`, `info@uaedigital.ae`

6. **Update Domain:**
   - Update `baseUrl` in `app/sitemap.ts` and `app/robots.ts` with your actual domain

7. **Add Google Maps:**
   - Replace the map placeholder in `app/contact/page.tsx` with actual Google Maps static image or embed

8. **Run development server:**
   ```bash
   npm run dev
   ```

9. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Deployment

The project is ready for deployment on **Vercel**:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📝 Environment Variables

No environment variables required. All configurations are done directly in the code as specified.

## 🎨 Customization

- **Colors**: Modify color variables in `app/globals.css`
- **Fonts**: Update font imports in `app/layout.tsx`
- **Components**: All UI components are in `components/ui/`
- **Content**: Update content directly in page files

## 📱 WhatsApp Integration

The floating WhatsApp button is automatically included. Update the phone number in:
- `components/whatsapp-button.tsx`
- All WhatsApp links throughout the site

## 🔍 SEO

- Metadata configured for all pages
- Sitemap automatically generated at `/sitemap.xml`
- Robots.txt configured at `/robots.txt`
- OpenGraph and Twitter cards included

## 📊 Analytics

- Google Analytics 4 script in `app/layout.tsx`
- Hotjar script in `app/layout.tsx`
- Update tracking IDs before going live

## 💳 Payments

All payment buttons link to Stripe Payment Links. Replace URLs in `app/pricing/page.tsx` with your actual Stripe Payment Link URLs.

## 📄 License

Private project - All rights reserved

