const webpack = require('webpack')
const assetPrefix = !process.env.NODE_ENV || ('production' === process.env.NODE_ENV) ? '/act-web' : ''
const withTM = require('next-transpile-modules')(['pack'])
const package = require('./package.json')

const DOMAIN = 'test.project.com'
const API_URL = 'https://'+ DOMAIN +'/api'

const configs = {
  ENV: process.env.NODE_ENV,
  GQL_URL: 'https://' + DOMAIN + '/v1alpha1/graphql',
  WSS_URL: 'wss://' + DOMAIN + '/v1alpha1/graphql',
  endpoints: {
    areas: API_URL + '/areas/',
    upload: API_URL + '/upload',
    qr: API_URL + '/qr',
    login: API_URL + '/login'
  },
}

const theme = { color: { blue: 'yellow' }}

module.exports = withTM({
  assetPrefix,
  env: {
    version: package.version,
    name: package.name,
    description: package.description,
    assetPrefix,
    configs,
    theme
  },
  generateBuildId: async () => 'current',
  webpack: config => {
    config.resolve.alias = { ...(config.resolve.alias || {}), 'react-native$': 'react-native-web' }
    config.resolve.extensions = [ '.web.js', ...config.resolve.extensions ]
    return config
  }
})
