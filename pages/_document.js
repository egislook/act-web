import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import * as RN from 'react-native-web'

// Force Next-generated DOM elements to fill their parent's height
const __html = `#__next { display: flex; flex-direction: column; height: 100%; }`

const config = {
  name: 'with-react-native-web',
  displayName: 'with-react-native-web'
}

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    RN.AppRegistry.registerComponent(config.name, () => Main)
    const { getStyleElement } = RN.AppRegistry.getApplication(config.name)
    const styles = [ <style dangerouslySetInnerHTML={{ __html }} />, getStyleElement() ]
    return { ...renderPage(), styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <html style={{ height: '100%' }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
