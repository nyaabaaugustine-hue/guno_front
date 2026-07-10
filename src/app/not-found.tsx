import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Juno Tax',
}

export default function NotFoundPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="text-center max-w-md py-24">
        <div className="w-16 h-16 bg-juno-light-green rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl font-bold text-juno-dark-green font-display">J</span>
        </div>
        <div className="text-8xl font-display font-bold text-dark-200 mb-4 leading-none">404</div>
        <h1 className="heading-3 text-dark-900 mb-4">This return got lost in the mail</h1>
        <p className="text-body mb-8 mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="#demo" className="btn btn-secondary">
            Book a Demo
          </Link>
        </div>
      </div>
    </main>
  )
}
