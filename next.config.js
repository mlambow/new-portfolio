/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'shorturl.at',
      'github.com',
      'surl.li'
    ]
  }
}

module.exports = nextConfig
