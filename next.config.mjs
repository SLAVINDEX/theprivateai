const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/image-*.png",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/private", destination: "/services", permanent: true },
      { source: "/private-home", destination: "/services", permanent: true },
      { source: "/enterprise", destination: "/who-we-help", permanent: true },
      { source: "/solutions", destination: "/services", permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy-Report-Only", value: "default-src 'self'; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://wa.me" },
        ],
      },
    ]
  },
}

export default nextConfig
