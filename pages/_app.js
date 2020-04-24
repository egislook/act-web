import React from 'react'
import Head from 'next/head'
import App from 'next/app'
import getConfig from 'next/config'
import Actheme from 'actheme'

const { publicRuntimeConfig = {} } = getConfig()
// <ActStore init={init} initialState={{ ready: true }} config={config} router={router} actions={actions} name="App" />

Actheme.set({ color: { blue: 'yellow' }})

export default class extends App {
	render() {
		const { Component, pageProps, router = {}, init } = this.props
		return <Component {...pageProps} init={init} />
	}

	static async getInitialProps({ Component, router, ctx }) {
		const pageProps = Component.getInitialProps && await Component.getInitialProps(ctx) || {}
		const { asPath } = ctx
		const { version, env, theme } = publicRuntimeConfig || {}
		const { route, query } = router
		return { pageProps, route, query, asPath, init: { version, env, theme }, }
	}
}
