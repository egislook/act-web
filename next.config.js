const webpack = require('webpack')
const assetPrefix = !process.env.NODE_ENV || ('production' === process.env.NODE_ENV) ? '/bet' : ''
const withTM = require('next-transpile-modules')(['bet'])

module.exports = withTM({
  assetPrefix,
  env: { assetPrefix },
  generateBuildId: async () => 'current',
  // exportPathMap: () => ({
  //   '/': { page: '/' },
  //   '/page1': { page: '/page1' },
  // }),
  webpack: config => {
    config.resolve.alias = { ...(config.resolve.alias || {}), 'react-native$': 'react-native-web' }
    config.resolve.extensions = [ '.web.js', ...config.resolve.extensions ]
    return config
  }
})