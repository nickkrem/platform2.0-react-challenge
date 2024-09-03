//Allowed all hostnames and paths just for the purposes of this project
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRereshes: true,
    },
  },
};

export default nextConfig;
