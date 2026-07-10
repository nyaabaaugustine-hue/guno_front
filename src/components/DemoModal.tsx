'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DEMO_API } from '@/lib/config'

export default function DemoModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    setSubmitted(false)
    setError(false)
    setLoading(false)
    window.history.replaceState(null, '', window.location.pathname)
  }, [])

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === '#demo') {
        setOpen(true)
      }
    }
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = new FormData(e.currentTarget)
    const data = {
      firstName: form.get('firstName'),
      lastName: form.get('lastName'),
      email: form.get('email'),
      firm: form.get('firm'),
      returns: form.get('returns'),
    }

    try {
      const res = await fetch(DEMO_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Book a demo"
        >
          <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm" onClick={close} />
          <motion.div
            className="relative bg-white rounded-xl shadow-2xl border border-dark-100 w-full max-w-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-100">
              <h2 className="text-lg font-semibold text-dark-900">Book a Demo</h2>
              <button onClick={close} className="p-1 text-dark-400 hover:text-dark-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded" aria-label="Close dialog">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {submitted ? (
              <motion.div
                className="p-8 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-juno-light-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-juno-dark-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">Thanks for your interest!</h3>
                <p className="text-sm text-dark-500">We&apos;ll be in touch within 24 hours to schedule your demo.</p>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-6 space-y-4"
                noValidate
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-firstName" className="label">First name</label>
                    <input id="demo-firstName" name="firstName" type="text" className="input" placeholder="Jane" required aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="demo-lastName" className="label">Last name</label>
                    <input id="demo-lastName" name="lastName" type="text" className="input" placeholder="Doe" required aria-required="true" />
                  </div>
                </div>
                <div>
                  <label htmlFor="demo-email" className="label">Work email</label>
                  <input id="demo-email" name="email" type="email" className="input" placeholder="jane@firm.com" required aria-required="true" />
                </div>
                <div>
                  <label htmlFor="demo-firm" className="label">Firm name</label>
                  <input id="demo-firm" name="firm" type="text" className="input" placeholder="Your firm" required aria-required="true" />
                </div>
                <div>
                  <label htmlFor="demo-returns" className="label">How many returns do you prepare per year?</label>
                  <select id="demo-returns" name="returns" className="input" required aria-required="true">
                    <option value="">Select...</option>
                    <option value="1-100">1–100</option>
                    <option value="101-500">101–500</option>
                    <option value="501-2000">501–2,000</option>
                    <option value="2000+">2,000+</option>
                  </select>
                </div>
                {error && (
                  <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg" role="alert">
                    Something went wrong. Please try again.
                  </p>
                )}
                <button type="submit" disabled={loading} className="btn btn-primary w-full">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    'Request Demo'
                  )}
                </button>
                <p className="text-xs text-dark-400 text-center">No commitment required. We&apos;ll show you what Juno can do for your firm.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
