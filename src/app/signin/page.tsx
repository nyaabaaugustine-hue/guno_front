'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SIGNUP_URL } from '@/lib/config'

export default function SignInPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `https://guno-back.vercel.app/auth/signin?email=${encodeURIComponent(email)}&callbackUrl=/dashboard`
  }

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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="you@firm.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-dark-600">
                <input type="checkbox" className="rounded border-dark-300" />
                Remember me
              </label>
              <a href="https://guno-back.vercel.app/auth/forgot-password" className="text-sm text-juno-dark-green hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary w-full">Continue to Sign In</button>
          </form>
          <p className="text-center text-sm text-dark-500 mt-6">
            Don't have an account? <a href={SIGNUP_URL} className="text-juno-dark-green hover:underline font-medium">Start Free Trial</a>
          </p>
        </div>
      </div>
    </main>
  )
}
