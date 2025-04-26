/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Don't use basePath or assetPrefix for local development
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
};

export default nextConfig;