'use client'

import Script from 'next/script'
import { PLAUSIBLE_DOMAIN } from '@/lib/config'

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src="https://plausible.io/js/script.js"
      strategy="lazyOnload"
    />
  )
}
