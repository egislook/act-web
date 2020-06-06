import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { AppRegistry } from 'react-native-web'
import { style } from 'actheme'

const styles = {
  html: style('h:100%'),
  body: style('h:100% of:hd')
}

const __html = `#__next { display: flex; flex-direction: column; height: 100%; }`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(process.env.name, () => Main)
    const { getStyleElement } = AppRegistry.getApplication(process.env.name)
    const styles = [ <style dangerouslySetInnerHTML={{ __html }} />, getStyleElement() ]
    return { ...renderPage(), styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <html style={styles.html}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={styles.body}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
