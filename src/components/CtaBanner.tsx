'use client'

import Link from 'next/link'
import { SIGNUP_URL } from '@/lib/config'

interface CtaBannerProps {
  heading?: string
  subtitle?: string
  trialText?: string
}

export default function CtaBanner({
  heading = 'See how fast tax prep can be when Juno handles the grunt work.',
  subtitle,
  trialText = '7-day free trial. Start 5 free preparations. No credit card required.',
}: CtaBannerProps) {
  return (
    <section className="section bg-juno-dark-green relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-juno-green/5 rounded-full blur-3xl" />
      <div className="container px-6 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 text-white mb-6">{heading}</h2>
          {subtitle && (
            <p className="text-lg text-juno-light-green/80 mb-8 max-w-xl mx-auto">{subtitle}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-juno-dark-green font-semibold text-lg hover:bg-juno-light-green transition-all duration-200 hover:scale-[1.02] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Start Free Trial
            </a>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-juno-light-green/60 mt-6">{trialText}</p>
        </div>
      </div>
    </section>
  )
}
