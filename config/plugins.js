const withBundleAnalyzer = require('@next/bundle-analyzer');
//const withPWA = require('next-pwa');

module.exports = [
  [
    withBundleAnalyzer,
    {
      enabled: process.env.BUNDLE_ANALYZE === 'true',
    },
  ],
];
