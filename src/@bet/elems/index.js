import React from 'react'
import NextLink from 'next/link'
import { StyleSheet, Text, View } from 'react-native'

const assetPrefix = process.env.ASSET_PREFIX

console.log({ assetPrefix })

// export const Link = props => <Text accessibilityRole="link" href={assetPrefix + props.href} {...props} />
// export const Link = (props) => <NextJsLink {...props} as={`${assetPrefix}${props.href}`} />
export const Link = ({ href, prefetch, replace, scroll, shallow, ...rest }) => (
	<NextLink as={`${assetPrefix}${href}`} href={href} passHref={true} prefetch={prefetch} replace={replace} scroll={scroll} shallow={shallow}>
	  <Text accessibilityRole="link" {...rest} />
	</NextLink>
)

export default {
	Link
}