import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import * as ReactNative from 'react-native'
import Actheme from 'actheme'

// Force Next-generated DOM elements to fill their parent's height
const __html = `#__next { display: flex; flex-direction: column; height: 100%; }`

const config = {
  name: 'with-react-native-web',
  displayName: 'with-react-native-web'
}

Actheme.set()

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    ReactNative.AppRegistry.registerComponent(config.name, () => Main)
    const { getStyleElement } = ReactNative.AppRegistry.getApplication(config.name)
    const styles = [ <style dangerouslySetInnerHTML={{ __html }} />, getStyleElement() ]
    return { ...renderPage(), styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <html style={Actheme.style('h:100%')}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={Actheme.style('h:100% of:hd')}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
