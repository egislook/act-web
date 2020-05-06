import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Elems } from 'bet'
import Actheme, { style } from 'actheme'

function MainScreen(props) {
  return (
    <Styled.Wrap>
      <Styled.Text>
        React Native for Web & Next.js
      </Styled.Text>
      <Styled.Link href="/">
        Go back to Main Screen
      </Styled.Link>

      <Styled.Cont>
        <Styled.Text aria-level="2">
          Subheader
        </Styled.Text>
      </Styled.Cont>
    </Styled.Wrap>
  )
}

export default MainScreen

const Styled = Actheme.create({
  Wrap: 'ai,jc:c fg:1',
  Cont: 'mt:s4',
  Text: 'fs,mb:s6 fs:24',
  Link: [Elems.Link, 'c:pink fb:normal fs:s5']
})


// function AlternateScreen(props) {
//   return (
//     <View style={styles.container}>
//       <Text accessibilityRole="header" style={styles.text}>
//         React Native for Web & Next.js Alt
//       </Text>
//
//       <Elems.Link style={styles.link} href="/">
//         Back to Main Screen
//       </Elems.Link>
//
//       <View style={styles.textContainer}>
//         <Text accessibilityRole="header" aria-level="2" style={styles.text}>
//           Subheader
//         </Text>
//       </View>
//     </View>
//   )
// }
//
// export default AlternateScreen
//
// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   link: {
//     color: 'blue',
//   },
//   textContainer: {
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   text: {
//     alignItems: 'center',
//     fontSize: 24,
//     marginBottom: 24,
//   },
// })
