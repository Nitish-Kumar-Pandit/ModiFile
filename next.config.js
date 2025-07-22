/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // WebAssembly support configured in webpack section below
  // Disable caching completely in development
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      maxInactiveAge: 1000,
      pagesBufferLength: 1,
    },
  }),
  turbopack: {
    resolveAlias: {
      '@': '.',
      '@/*': './*',
    },
  },
  webpack: (config, { isServer }) => {
    // Polyfill 'self' for SSR to avoid 'self is not defined' errors
    if (isServer) {
      config.plugins = config.plugins || [];
      config.plugins.push(
        new (require('webpack')).DefinePlugin({
          self: 'globalThis',
        })
      );
    }
    // Handle FFmpeg and other Node.js modules
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

    // Enable WebAssembly support for FFmpeg
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // Handle worker files for FFmpeg
    config.module.rules.push({
      test: /ffmpeg.*\.worker\.js$/,
      use: {
        loader: 'worker-loader',
        options: {
          name: 'static/[hash].worker.js',
          publicPath: '/_next/',
        },
      },
    });

    // Ignore FFmpeg worker and browser-only libraries in server-side builds
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push(
        '@ffmpeg/ffmpeg',
        '@ffmpeg/util',
        'lucide-react',
        'framer-motion'
      );
    }

    // Optimize for faster builds and runtime
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          ffmpeg: {
            test: /[\\/]node_modules[\\/]@ffmpeg[\\/]/,
            name: 'ffmpeg',
            chunks: 'all',
            priority: 10,
          },
        },
      },
    };

    return config;
  },
  headers: async () => {
    const isDev = process.env.NODE_ENV === 'development';

    return [
      {
        // Static assets from _next/static
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: isDev
              ? 'no-cache, no-store, must-revalidate'
              : 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        // All other pages - simplified cache control
        source: '/:path*',
        headers: [
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Simplified cache control
          {
            key: 'Cache-Control',
            value: isDev
              ? 'no-cache, no-store, must-revalidate'
              : 'public, max-age=0, must-revalidate'
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
        ],
      },
    ];
  },
}

module.exports = nextConfig
