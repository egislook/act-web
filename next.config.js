const webpack = require('webpack')
const assetPrefix = (process.env.NODE_ENV || 'production') === 'production' ? '/bet' : ''
const withTM = require('next-transpile-modules')(['bet'])

module.exports = withTM({
  assetPrefix,
  // exportPathMap: () => ({
  //   '/': { page: '/' },
  //   '/page1': { page: '/page1' },
  // }),
  webpack: config => {
    config.resolve.alias = { ...(config.resolve.alias || {}), 'react-native$': 'react-native-web' }
    config.resolve.extensions = [ '.web.js', ...config.resolve.extensions ]

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
    }))

    return config
  }
})