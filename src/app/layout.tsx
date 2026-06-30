import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import DemoModal from '@/components/DemoModal'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Juno Tax - AI-Powered Tax Preparation for Modern Firms',
  description: 'Automate tax prep with AI. Extract data from source docs, auto-fill forms, and review side-by-side. Integrates with Drake, ProConnect, Lacerte, CCH Axcess.',
  keywords: ['tax preparation', 'AI tax software', 'tax automation', 'CPA software', 'tax practice management'],
  authors: [{ name: 'Juno Tax' }],
  creator: 'Juno Tax',
  publisher: 'Juno Tax',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://juno.tax',
    title: 'Juno Tax - AI-Powered Tax Preparation',
    description: 'Automate tax prep with AI. Trusted by 1000+ firms.',
    siteName: 'Juno Tax',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juno Tax - AI-Powered Tax Preparation',
    description: 'Automate tax prep with AI. Trusted by 1000+ firms.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#013A2F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans`}>
      <head>
        <link rel="preconnect" href="https://juno.tax" />
        <link rel="dns-prefetch" href="https://juno.tax" />
      </head>
      <body className="min-h-screen flex flex-col pt-16 md:pt-20">
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <DemoModal />
      </body>
    </html>
  )
}