import { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://08techgroup.com' // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

