import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { AppRegistry } from 'react-native'
import Actheme from 'actheme'

const nextStyle = `#__next { display: flex; flex-direction: column; height: 100%; }`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(process.env.name, () => Main)
    const { getStyleElement } = AppRegistry.getApplication(process.env.name)
    const page = renderPage()
    const StyleElements = getStyleElement()
    const styles = [
      StyleElements,
      <style dangerouslySetInnerHTML={{ __html: [nextStyle, Actheme.mediaRules()].join('\n') }} />
    ]
    console.log('rendered style length', StyleElements.props.dangerouslySetInnerHTML.__html.length)
    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <html style={{ height: "100%" }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={{ height: "100%", overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
