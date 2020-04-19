module.exports = {
  webpack: config => {
    config.resolve.alias = { ...(config.resolve.alias || {}), 'react-native$': 'react-native-web' }
    config.resolve.extensions = [ '.web.js', ...config.resolve.extensions ]

    return config
  },
  assetPrefix: (process.env.NODE_ENV || 'production') === 'production' ? '/bet' : '',
}