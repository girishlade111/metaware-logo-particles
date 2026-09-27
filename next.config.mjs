/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/metaware-logo-particles',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig