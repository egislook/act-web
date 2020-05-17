import React from 'react'
import Actheme from 'actheme'
import NextLink from 'next/link'

export const Link = ({ href, prefetch, replace, scroll, shallow, assetPrefix = process.env.assetPrefix, ...rest }) => (
	<Styled.Link as={`${assetPrefix}${href}`} href={href} passHref={true} prefetch={prefetch} replace={replace} scroll={scroll} shallow={shallow}>
	  <Styled.Text accessibilityRole="link" {...rest} />
	</Styled.Link>
)

const Styled = Actheme.create({
	Text: ['Text', 'c:yellow fb:bold fs:s10'],
	Link: NextLink || 'TouchableOpacity'
})

export default {
	Link
}
