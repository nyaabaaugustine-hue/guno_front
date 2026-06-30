'use client'

import Link from 'next/link'

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-50 px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-juno-dark-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg text-dark-900">Juno</span>
          </Link>
          <h1 className="heading-3 mb-2">Welcome back</h1>
          <p className="text-muted">Sign in to your account</p>
        </div>
        <div className="card p-8">
          <form onSubmit={e => e.preventDefault()} className="space-y-5">
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="you@firm.com" required />
            </div>
            <div>
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="••••••••" required />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-dark-600">
                <input type="checkbox" className="rounded border-dark-300" />
                Remember me
              </label>
              <Link href="#" className="text-sm text-juno-dark-green hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" className="btn btn-primary w-full">Sign In</button>
          </form>
          <p className="text-center text-sm text-dark-500 mt-6">
            Don't have an account? <Link href="/start" className="text-juno-dark-green hover:underline font-medium">Start Free Trial</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
