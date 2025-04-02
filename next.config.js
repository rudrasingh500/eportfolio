/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/eportfolio',
  assetPrefix: '/eportfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
