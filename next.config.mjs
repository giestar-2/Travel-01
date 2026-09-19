/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The small shared stylesheet can travel with the initial HTML instead of
  // requiring a separate render-blocking request. Applies to production builds.
  experimental: { inlineCss: true },
  async headers() {
    return [{
      source: "/images/travel/:path*",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    }];
  },
};

export default nextConfig;
