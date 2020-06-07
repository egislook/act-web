const withTM = require('next-transpile-modules')(['pack'])
const { version, name, description } = process.env

module.exports = withTM({
  env: { version, name, description },
  webpack: config => {
    config.resolve.alias = {...(config.resolve.alias || {}), 'react-native$': 'react-native-web' }
    config.resolve.extensions = [ '.web.js', ...config.resolve.extensions ]
    return config
  }
});
