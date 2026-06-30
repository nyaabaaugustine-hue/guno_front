'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function PricingPage() {
  const [returns, setReturns] = useState(500)
  const costPerReturn = 49
  const annualCost = returns * costPerReturn
  const hoursSavedPerReturn = 2
  const totalHours = returns * hoursSavedPerReturn
  const hourlyRate = 150
  const totalSavings = totalHours * hourlyRate
  const roi = ((totalSavings - annualCost) / annualCost * 100).toFixed(0)

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-juno-green/10 to-juno-dark-green/20 border-b">
        <div className="container px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-dark-900 mb-6">One flat rate. Every return.</h1>
            <p className="text-body mx-auto max-w-2xl mb-8">
              1040s. Business returns. Multi-state. K-1s. Same price, no matter how complex.
              Because your busiest clients shouldn't cost you the most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start" className="btn btn-primary">Start Free Trial</Link>
              <Link href="#demo" className="btn btn-secondary">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section bg-white border-b">
        <div className="container px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-4">Get your hours back</h2>
          <p className="text-body text-center mb-12">How many returns does your firm prepare per year?</p>

          <div className="card p-8 mb-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-dark-700">Returns / year</span>
                <span className="heading-3 text-juno-dark-green">{returns.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={100}
                max={3500}
                step={25}
                value={returns}
                onChange={e => setReturns(parseInt(e.target.value))}
                className="w-full accent-juno-dark-green"
              />
              <div className="flex justify-between text-xs text-dark-400 mt-1">
                <span>100</span>
                <span>3,500</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-dark-50 rounded-xl">
                <div className="text-2xl font-bold text-juno-dark-green">{totalHours.toLocaleString()}</div>
                <div className="text-sm text-dark-600">Hours back / year</div>
              </div>
              <div className="text-center p-4 bg-dark-50 rounded-xl">
                <div className="text-2xl font-bold text-juno-dark-green">${(annualCost / 1000).toFixed(0)}k</div>
                <div className="text-sm text-dark-600">Annual investment</div>
              </div>
              <div className="text-center p-4 bg-juno-dark-green rounded-xl text-white">
                <div className="text-2xl font-bold">{roi}x ROI</div>
                <div className="text-sm text-juno-light-green">Return on investment</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-dark-500">Cost per return: <strong className="text-dark-900">${costPerReturn}</strong></p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-dark-50">
        <div className="container px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-4">Everything your firm needs. One plan.</h2>
          <p className="text-body text-center mb-12">All features included at one flat per-return price.</p>

          <div className="card p-8 md:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'AI-powered data extraction',
                'Auto-fill tax forms',
                'Source document validation',
                'Side-by-side review',
                'Tick mark system',
                'Real-time collaboration',
                'Binder organization',
                'AI tax advisor',
                'Prior year comparison',
                'Error flagging',
                'Business returns support',
                'Multi-state returns',
                'Drake integration',
                'Lacerte integration',
                'ProConnect integration',
                'CCH Axcess integration',
                'QuickBooks & Xero sync',
                'SOC 2 security',
                'Free setup and support',
                'Hands-on onboarding',
              ].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-juno-green rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm text-dark-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-dark-500">7-day free trial. No credit card required.</p>
            <p className="text-xs text-dark-400 mt-2">Discount pricing applies to your first order only.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container px-6 md:px-12 max-w-3xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Everything You Need to Know</h2>
          <div className="space-y-6">
            {[
              { q: 'Is there a minimum commitment?', a: 'No. You can start with a 7-day free trial and 5 free preparations. No credit card required. Cancel anytime.' },
              { q: 'Are business returns the same price as 1040s?', a: 'Yes. One flat rate applies to all returns — 1040s, business returns, multi-state, and K-1s.' },
              { q: 'Do you offer custom volume pricing?', a: 'Yes. Firms preparing over 3,500 returns per year qualify for custom volume pricing with a dedicated onboarding team.' },
              { q: 'What integrations are included?', a: 'All integrations are included at no extra cost — Drake, Lacerte, ProConnect, CCH Axcess, QuickBooks, Xero, and more.' },
              { q: 'Is there onboarding support?', a: 'Yes. Every new firm gets hands-on onboarding and a pilot program built around your firm\'s specific needs.' },
            ].map(faq => (
              <details key={faq.q} className="card p-6 group">
                <summary className="font-semibold text-dark-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-4 h-4 text-dark-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="text-body mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-juno-dark-green">
        <div className="container px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-6">See how fast tax prep can be when Juno handles the grunt work.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-juno-dark-green font-semibold text-lg hover:bg-juno-light-green transition-colors shadow-sm">Start Free Trial</Link>
              <Link href="#demo" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors">Book a Demo</Link>
            </div>
            <p className="text-sm text-juno-light-green/60 mt-6">7-day free trial. Start 5 free preparations. No credit card required.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
