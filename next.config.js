/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Client-side configuration
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    } else {
      // Server-side configuration - add global polyfills
      config.resolve.alias = {
        ...config.resolve.alias,
      };
      
      // Define globals for server-side
      config.plugins = config.plugins || [];
      config.plugins.push(
        new config.webpack.DefinePlugin({
          'global.self': 'global',
          'self': 'global',
        })
      );
    }
    return config;
  },
  // You can also add this to ignore build errors temporarily
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

module.exports = nextConfig;