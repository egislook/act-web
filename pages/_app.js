import React from 'react'
import * as RN from 'react-native-web'
import Actstore from 'actstore'
import Head from 'next/head'
import Settings from 'pack/store'

export default ({ Component, pageProps }) => {
	const { store, act } = Actstore(Settings, ['ready'])
	React.useEffect(() => { act('APP_INIT') }, [])
  return <React.Fragment>
		<Head>
			<title>{process.env.name}</title>
		</Head>
		<Component {...pageProps} />
	</React.Fragment>
}
