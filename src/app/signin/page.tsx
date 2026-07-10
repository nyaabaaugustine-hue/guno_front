'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SIGNUP_URL } from '@/lib/config'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    setError('')
    window.location.href = `https://guno-back.vercel.app/auth/signin?email=${encodeURIComponent(email)}&callbackUrl=/dashboard`
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-50 px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity" aria-label="Juno Home">
            <div className="w-8 h-8 bg-juno-dark-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg text-dark-900">Juno</span>
          </Link>
          <h1 className="heading-3 mb-2">Welcome back</h1>
          <p className="text-muted">Sign in to your account</p>
        </div>
        <div className="card p-8 hover:shadow-md transition-shadow duration-300">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="signin-email" className="label">Email</label>
              <input
                id="signin-email"
                type="email"
                className="input"
                placeholder="you@firm.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setError('') }}
                required
                aria-required="true"
                aria-invalid={!!error}
                aria-describedby={error ? 'signin-error' : undefined}
              />
              {error && <p id="signin-error" className="text-sm text-red-600 mt-1" role="alert">{error}</p>}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-dark-600 cursor-pointer hover:text-dark-900 transition-colors">
                <input type="checkbox" className="rounded border-dark-300 accent-juno-dark-green" />
                Remember me
              </label>
              <a href="https://guno-back.vercel.app/auth/forgot-password" className="text-sm text-juno-dark-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary w-full hover:scale-[1.01] active:scale-[0.99] transition-all duration-200">Continue to Sign In</button>
          </form>
          <p className="text-center text-sm text-dark-500 mt-6">
            Don&apos;t have an account?{' '}
            <a href={SIGNUP_URL} className="text-juno-dark-green hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded">Start Free Trial</a>
          </p>
        </div>
      </div>
    </main>
  )
}
