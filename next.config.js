/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT || '',
  }
}

module.exports = nextConfig
