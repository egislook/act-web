import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Elems } from 'bet'

function AlternateScreen(props) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js Alt
      </Text>

      <Elems.Link href="/">
        <Text style={styles.link} accessibilityRole="link">
          Back to main screen
        </Text>
      </Elems.Link>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
      </View>
    </View>
  )
}

export default AlternateScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})