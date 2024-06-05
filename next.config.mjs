/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  async redirects() {
    return [{
      source: '/user/1',
      destination: '/user/2',
      permanent: true,
    }]
  }
};

export default nextConfig;
