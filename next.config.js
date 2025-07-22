/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config, { isServer }) => {
    // Fix SSR issues with browser-only code
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('@ffmpeg/ffmpeg', '@ffmpeg/util', 'lenis', 'gsap');
    }
    // Client-side fallbacks for Node.js modules
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        events: false,
        worker_threads: false,
        child_process: false,
      };
    }

    // Enable WebAssembly support
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
}

module.exports = nextConfig
