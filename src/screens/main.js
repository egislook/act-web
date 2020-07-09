import React from 'react'
import { Elems, Actheme } from 'pack'
import Actstore from 'actstore'

function MainScreen(props) {
  const { store, action } = Actstore({ actions }, ['count'])

  return (
    <Styled.Wrap>
      <Styled.Text>{process.env.description}</Styled.Text>
      <Elems.Link href="/alternate">
        Go to Alternate Screen
      </Elems.Link>
      <Styled.Cont>
        <Styled.Button onPress={action('MAIN_COUNT')}>Click Me to increase number {store.get('count')}</Styled.Button>
        <Styled.Text small aria-level="2">
          {process.env.name} {process.env.version}
        </Styled.Text>
      </Styled.Cont>
      <Styled.Scroll>
        <Styled.ScrollWrap>
          <Styled.Box />
          <Styled.Box />
          <Styled.Box />
          <Styled.Box />
          <Styled.Box />
        </Styled.ScrollWrap>
      </Styled.Scroll>
    </Styled.Wrap>
  )
}
//, { contentContainerStyle: Actheme.style('bg:blue ai,jc:c') }
//{ contentContainerStyle: Actheme.style('fd:row') }
export default MainScreen

const Styled = Actheme.create({
  Wrap: 'ai,jc:c fg:1',
  Cont: 'mt:s4',
  Text: ['Text', 'fs,mb:s6 ta:c', { small: 'fs:s3'}],
  Button: 'fs,mb:s6 c:green',
  Box: ['View', 'w,h:s30 bg:green m:s5', { md: 'bg:pink p:s20 m:s3' }],
  Scroll: ['ScrollView', ['bg:blue', { contentContainerStyle: Actheme.style('ai,jc:c') }], { md: [{ horizontal: true }]}],
  ScrollWrap: ['View', 'ai,jc:c', { md: 'fd:row' }]
})

const actions = ({ store, act }) => ({
  MAIN_COUNT: () => {
    act('APP_SET_VALUE', store.get('count') + 2)
    store.set({ count: store.get('count') + 2 })
  }
})
