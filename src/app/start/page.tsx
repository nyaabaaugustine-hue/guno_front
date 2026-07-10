'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SIGNIN_URL, SIGNUP_URL } from '@/lib/config'

export default function StartPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your work email')
      return
    }
    setError('')
    window.location.href = `${SIGNUP_URL}?email=${encodeURIComponent(email)}`
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-50 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity" aria-label="Juno Home">
            <div className="w-8 h-8 bg-juno-dark-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg text-dark-900">Juno</span>
          </Link>
          <h1 className="heading-3 mb-2">Start your free trial</h1>
          <p className="text-muted">7 days free. 5 free preparations. No credit card required.</p>
        </div>
        <div className="card p-8 hover:shadow-md transition-shadow duration-300">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="start-email" className="label">Work email</label>
              <input
                id="start-email"
                type="email"
                className="input"
                placeholder="you@firm.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setError('') }}
                required
                aria-required="true"
                aria-invalid={!!error}
                aria-describedby={error ? 'start-error' : undefined}
              />
              {error && <p id="start-error" className="text-sm text-red-600 mt-1" role="alert">{error}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-full hover:scale-[1.01] active:scale-[0.99] transition-all duration-200">
              Continue to Sign Up
            </button>
          </form>
          <p className="text-center text-xs text-dark-500 mt-6">
            By signing up, you agree to our{' '}
            <Link href="#" className="underline hover:text-dark-700 transition-colors">Terms</Link> and{' '}
            <Link href="#" className="underline hover:text-dark-700 transition-colors">Privacy Policy</Link>.
          </p>
          <p className="text-center text-sm text-dark-500 mt-4">
            Already have an account?{' '}
            <a href={SIGNIN_URL} className="text-juno-dark-green hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded">Sign In</a>
          </p>
        </div>
      </div>
    </main>
  )
}
