import React from 'react'
import NextLink from 'next/link'
import { StyleSheet, Text, View } from 'react-native'

export const Link = ({ href, prefetch, replace, scroll, shallow, assetPrefix = process.env.assetPrefix, ...rest }) => (
	<NextLink as={`${assetPrefix}${href}`} href={href} passHref={true} prefetch={prefetch} replace={replace} scroll={scroll} shallow={shallow}>
	  <Text accessibilityRole="link" {...rest} />
	</NextLink>
)

export default {
	Link
}