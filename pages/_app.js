import React from 'react'
import * as RN from 'react-native-web'
import Actheme from 'actheme'
import Actstore from 'actstore'
import Cookies from 'js-cookie'

Actheme.set(process.env.theme)

export default ({ Component, pageProps }) => {
	const { store, act } = Actstore({ actions, configs: process.env.configs, Cookies }, ['ready'])
	React.useEffect(() => { act('APP_INIT') }, [])
  return <Component {...pageProps} />
}

const actions = ({ store }) => ({
  APP_INIT: async () => {
    await store.set({ count: 1, ready: true })
  },
	APP_COUNT: () => store.set({ count: store.get('count') + 1 })
})
