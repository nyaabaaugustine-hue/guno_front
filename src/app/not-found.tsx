import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="text-center max-w-md py-24">
        <div className="text-7xl font-display font-bold text-dark-200 mb-6">404</div>
        <h1 className="heading-3 text-dark-900 mb-4">Page not found</h1>
        <p className="text-body mb-8 mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </main>
  )
}
