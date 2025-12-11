/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes for static hosting
  distDir: 'out', // Next.js output directory (will be copied to dist)
}

module.exports = nextConfig

