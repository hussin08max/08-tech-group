/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // Required for static export
    qualities: [75, 100], // Add quality 100 for Next.js 16 compatibility
  },
  trailingSlash: true, // Add trailing slashes for static hosting
}

// Only enable static export for production builds
if (process.env.NODE_ENV === 'production' || process.env.NEXT_PHASE === 'phase-production-build') {
  nextConfig.output = 'export'
  nextConfig.distDir = 'out'
}

module.exports = nextConfig

