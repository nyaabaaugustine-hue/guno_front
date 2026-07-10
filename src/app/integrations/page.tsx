import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/CtaBanner'
import { SIGNUP_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Juno Integrations | AI Tax Prep That Fits Your Software',
  description: 'Juno is AI tax prep that works with the software your firm already runs: Drake, Lacerte, ProConnect, CCH Axcess, TaxDome, Quickbooks, and more.',
  openGraph: {
    title: 'Juno Integrations | AI Tax Prep That Fits Your Software',
    description: 'Works with the software your firm already runs: Drake, Lacerte, ProConnect, CCH Axcess, and more.',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
}

const categories = [
  {
    name: 'Practice management',
    items: [
      { name: 'TaxDome', logo: 'taxdome.png' },
      { name: 'Karbon', logo: 'karbon.png' },
      { name: 'Canopy', logo: 'canopy.png' },
      { name: 'Firm360', logo: 'firm360.png' },
      { name: 'Financial Cents', logo: 'financialcents.png' },
    ],
  },
  {
    name: 'Tax software',
    items: [
      { name: 'Drake', logo: 'drake.png' },
      { name: 'Lacerte', logo: 'intuit-lacerte.png' },
      { name: 'ProConnect', logo: 'intuit-proconnect.png' },
      { name: 'CCH Axcess', logo: 'cch-axcess.png' },
    ],
  },
  {
    name: 'Bookkeeping',
    items: [
      { name: 'QuickBooks', logo: 'quickbooks.png' },
      { name: 'Xero', logo: 'xero.png' },
    ],
  },
  {
    name: 'Document storage',
    items: [
      { name: 'SmartVault', logo: 'smartvault.png' },
      { name: 'Rightworks', logo: 'rightworks.png' },
    ],
  },
  {
    name: 'Hosting',
    items: [
      { name: 'Rightworks', logo: 'rightworks.png' },
      { name: 'Verito', logo: 'verito.png' },
    ],
  },
  {
    name: 'Associations',
    items: [
      { name: 'NATP', logo: 'natp.png' },
      { name: 'NAEA', logo: 'naea.png' },
    ],
  },
]

export default function IntegrationsPage() {
  return (
    <main>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="container px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="heading-1 text-dark-900 mb-6">Built to work with the tech you already trust</h1>
            <p className="text-body mx-auto mb-8">
              Built by a CPA, Juno is designed to fit into real tax firm tech stacks,
              working alongside them without forcing you to rebuild your process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={SIGNUP_URL} className="btn btn-primary">Start Free Trial</a>
              <Link href="#demo" className="btn btn-secondary">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-50 border-y border-dark-100">
        <div className="container px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-10 items-center opacity-40">
            {['drake-logo.png','lacerte-logo.png','proconnect-logo.png','cch-axcess-logo.png','taxdome.png','quickbooks.png','xero.png'].map(f => (
              <Image key={f} src={`/images/integrations/${f}`} alt="" width={100} height={28} className="h-7 w-auto" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="section bg-white">
          <div className="container px-6 md:px-12 max-w-5xl mx-auto">
            {categories.map(cat => (
              <div key={cat.name} className="mb-14 last:mb-0">
                <h3 className="text-xs font-semibold tracking-wider text-juno-dark-green uppercase mb-6">{cat.name}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map(item => (
                    <div key={item.name} className="card p-4 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                      <Image
                        src={`/images/integrations/${item.logo}`}
                        alt={`${item.name} integration`}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                        loading="lazy"
                      />
                      <span className="text-sm font-medium text-dark-900">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-2 text-dark-900 mb-4">Not seeing your stack?</h2>
              <p className="text-body mx-auto mb-8">We&apos;re adding new integrations all the time. Let&apos;s talk.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Free Trial</a>
                <Link href="#demo" className="btn btn-secondary btn-lg">Book a Demo</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CtaBanner />
    </main>
  )
}
