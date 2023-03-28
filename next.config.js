/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  ssr: {
    noExternal: ["swiper"]
 }
}

module.exports = nextConfig;