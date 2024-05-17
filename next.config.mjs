/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "projects-findsport.pn32gk.easypanel.host",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.wallpaperscraft.ru",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
