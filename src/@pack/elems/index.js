import React from 'react'
import { Actheme } from '../theme'

export const Link = React.forwardRef(({ href, prefetch, replace, scroll, shallow, assetPrefix = '', ...rest }, ref) => (
	<Styled.Link as={`${assetPrefix}${href}`} href={href} passHref={true} prefetch={prefetch} replace={replace} scroll={scroll} shallow={shallow}>
	  <Styled.Wrap><Styled.Text accessibilityRole="link" {...rest} /></Styled.Wrap>
	</Styled.Link>
))

const Styled = Actheme.create({
	Text: ['Text', 'c:yellow fb:bold fs:s10'],
	Link: 'Link',
	Wrap: 'View',
})

export default {
	Link
}
