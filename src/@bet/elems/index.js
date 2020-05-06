import React from 'react'
import NextLink from 'next/link'
import Actheme from 'actheme'

export const Link = ({ href, prefetch, replace, scroll, shallow, assetPrefix = process.env.assetPrefix, ...rest }) => (
	<NextLink as={`${assetPrefix}${href}`} href={href} passHref={true} prefetch={prefetch} replace={replace} scroll={scroll} shallow={shallow}>
	  <Styled.Text accessibilityRole="link" {...rest} />
	</NextLink>
)

const Styled = Actheme.create({
	Text: ['Text', 'c:yellow fb:bold fs:s10']
})

export default {
	Link
}
