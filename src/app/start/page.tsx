'use client'

import Link from 'next/link'

export default function StartPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-50 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-juno-dark-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg text-dark-900">Juno</span>
          </Link>
          <h1 className="heading-3 mb-2">Start your free trial</h1>
          <p className="text-muted">7 days free. 5 free preparations. No credit card required.</p>
        </div>
        <div className="card p-8">
          <form onSubmit={e => e.preventDefault()} className="space-y-5">
            <div>
              <label className="label">Full name</label>
              <input type="text" className="input" placeholder="Your name" required />
            </div>
            <div>
              <label className="label">Work email</label>
              <input type="email" className="input" placeholder="you@firm.com" required />
            </div>
            <div>
              <label className="label">Firm name</label>
              <input type="text" className="input" placeholder="Your firm" />
            </div>
            <div>
              <label className="label">Phone (optional)</label>
              <input type="tel" className="input" placeholder="(555) 123-4567" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Start Free Trial</button>
          </form>
          <p className="text-center text-xs text-dark-500 mt-6">
            By signing up, you agree to our <Link href="#" className="underline">Terms</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
          </p>
          <p className="text-center text-sm text-dark-500 mt-4">
            Already have an account? <Link href="/signin" className="text-juno-dark-green hover:underline font-medium">Sign In</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
