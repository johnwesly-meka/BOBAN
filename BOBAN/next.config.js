const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  buildExcludes: [
    /middleware-manifest\.json$/,
    /app-build-manifest\.json$/,
    /build-manifest\.json$/,
    /_buildManifest\.js$/,
    /_ssgManifest\.js$/,
    /\.map$/,
    /chunks\/.*\.js$/,
    /webpack-runtime/
  ]
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression
  compress: true,
  // Optimize CSS
  optimizeFonts: true,
  // Enable SWC minification (faster than Terser)
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
