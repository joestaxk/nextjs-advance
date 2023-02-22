/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.scdn.co', port: '', pathname: '/image/**' }
    ]
  }
}

module.exports = nextConfig
