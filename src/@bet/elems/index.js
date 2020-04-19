import React from 'react'
import NextJsLink from 'next/link'

const assetPrefix = process.env.ASSET_PREFIX || ''

export const Link = (props) => <NextJsLink {...props} as={`${assetPrefix}${props.href}`} />

export default {
	Link
}