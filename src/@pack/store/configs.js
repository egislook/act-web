const DOMAIN = 'test.project.com'
const API_URL = 'https://'+ DOMAIN +'/api'

export default {
  ENV: process.env.NODE_ENV,
  GQL_URL: 'https://' + DOMAIN + '/v1alpha1/graphql',
  WSS_URL: 'wss://' + DOMAIN + '/v1alpha1/graphql',
  endpoints: {
    areas: API_URL + '/areas/',
    upload: API_URL + '/upload',
    qr: API_URL + '/qr',
    login: API_URL + '/login'
  }
}
