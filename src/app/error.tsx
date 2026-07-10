'use client'

import Link from 'next/link'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="text-center max-w-md py-24">
        <div className="text-5xl font-display font-bold text-dark-200 mb-6">
          <svg className="w-16 h-16 mx-auto text-dark-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="heading-3 text-dark-900 mb-4">Something went wrong</h1>
        <p className="text-body mb-8 mx-auto">
          An unexpected error occurred. Please try again or contact support if the issue persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={reset} className="btn btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
