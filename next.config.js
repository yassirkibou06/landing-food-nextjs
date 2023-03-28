/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  ssr: {
    noExternal: ["swiper"]
 }
}

module.exports = nextConfig;