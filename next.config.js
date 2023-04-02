/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      'minimal-blog-next.vercel.app',
      'vg-dev.site',
      "cdn.sanity.io",
    ],
  },
}

module.exports = nextConfig
