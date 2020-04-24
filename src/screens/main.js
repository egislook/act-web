import React from 'react'
import { Elems } from 'bet'
import Actheme, { style } from 'actheme'

function MainScreen(props) {
  return (
    <Styled.Wrap>
      <Styled.Text accessibilityRole="header">
        React Native for Web & Next.js
      </Styled.Text>
      <Elems.Link style={style('c:blue')} href="/alternate">
        Go to Alternate Screen
      </Elems.Link>

      <Styled.Cont>
        <Styled.Text accessibilityRole="header" aria-level="2">
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
  Text: 'fs,mb:s6 fs:24'
})
