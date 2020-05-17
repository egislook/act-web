import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import * as RN from 'react-native-web'
import { style } from 'actheme'

const __html = `#__next { display: flex; flex-direction: column; height: 100%; }`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    RN.AppRegistry.registerComponent(process.env.name, () => Main)
    const { getStyleElement } = RN.AppRegistry.getApplication(process.env.name)
    const styles = [ <style dangerouslySetInnerHTML={{ __html }} />, getStyleElement() ]
    return { ...renderPage(), styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <html style={style('h:100%')}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={style('h:100% of:hd')}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
