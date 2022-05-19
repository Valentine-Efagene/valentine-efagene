/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  env: {
    apiBaseUrl: 'https://wdox-backend.herokuapp.com',
  },
  images: {
    path: 'https://res.cloudinary.com',
  },
}

module.exports = nextConfig
