/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuración para Netlify
  output: 'standalone',
  serverExternalPackages: ['@prisma/client'],
  // Evitar problemas con APIs durante el build
  trailingSlash: false,
}

export default nextConfig
