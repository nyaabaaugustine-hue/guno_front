import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'
import AnimatedFAQ from '@/components/AnimatedFAQ'
import CtaBanner from '@/components/CtaBanner'
import { SIGNUP_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'AI Tax Preparation Software for Tax Firms | Juno',
  description: 'AI tax prep software that reduces manual prep work. Preparer automates data entry & pushes to Drake, Lacerte, ProConnect, CCH Axcess, and more.',
  openGraph: {
    title: 'AI Tax Preparation Software for Tax Firms | Juno Preparer',
    description: 'AI tax prep software that automates data entry. Handles 95% of data entry on your returns.',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
}

export default function PreparerPage() {
  return (
    <main>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="container px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Product' }, { label: 'Preparer' }]} />
          <div className="max-w-2xl">
            <div className="badge-green mb-5">AI Tax Prep Software</div>
            <h1 className="heading-1 text-dark-900 mb-6">Handles 95% of data entry on your returns.</h1>
            <p className="text-body mb-8">
              The promise of AI tax preparation software is simple: your team stops keying and starts reviewing.
              Juno reads every document your clients send and handles the data entry, from W-2s, 1099s, and
              brokerage statements for individual returns to QuickBooks and Xero financials for business returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={SIGNUP_URL} className="btn btn-primary">Start Free Trial</a>
              <Link href="#demo" className="btn btn-secondary">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-50 border-y border-dark-100">
        <div className="container px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 items-center opacity-40">
            {['intuit-lacerte.png','intuit-proconnect.png','drake.png','cch-axcess.png','taxdome.png','quickbooks.png','xero.png'].map(f => (
              <Image key={f} src={`/images/integrations/${f}`} alt="" width={100} height={24} className="h-6 w-auto" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="section bg-white">
          <div className="container px-6 md:px-12 max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Supported returns</h2>
            <p className="text-body text-center mx-auto mb-14">1040s and business returns. One platform, one price.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="heading-3 mb-4">1040 Returns</h3>
                <p className="text-body mb-6">Tax prep automation for 1040s, from simple W-2 filers to complex returns with multiple schedules and K-1s.</p>
                <Link href="#learn" className="text-juno-dark-green font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded">Learn more →</Link>
              </div>
              <div className="card p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="heading-3 mb-4">Business Returns</h3>
                <p className="text-body mb-6">Forms 1120, 1120-S, and 1065. Connects to QuickBooks and Xero, handles reclassification and journal entries, and pushes to your tax software.</p>
                <Link href="#learn" className="text-juno-dark-green font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded">Learn more →</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12 max-w-5xl mx-auto">
            <h2 className="heading-2 text-center mb-14">Growth is gated by how fast you can hire.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Headcount limits your growth', desc: 'Every new client is more documents to read, more fields to key, more lines to check. The only way to grow is to add staff. Hiring takes months. Training takes longer.' },
                { title: 'Best people do work that doesn\'t need them', desc: 'CPAs and EAs spend hours keying numbers that shouldn\'t need to be keyed at all. Senior reviewers check every line because the source data can\'t be trusted.' },
                { title: 'Experienced staff are hard to find', desc: 'The pool of trained preparers is shrinking. Firms compete for the same people. And when you do hire, it takes a full season before they\'re productive.' },
              ].map((p, i) => (
                <div key={p.title} className="card p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                  <h3 className="heading-3 mb-4 text-xl">{p.title}</h3>
                  <p className="text-sm text-dark-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="section bg-white">
          <div className="container px-6 md:px-12 max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-4">Your AI tax preparer that eats grunt work for breakfast.</h2>
            <p className="text-body text-center mx-auto mb-14">From the first document upload to the final push to your tax software.</p>

            {[
              { step: '1', title: 'Pulls data from source docs', subtitle: 'Source docs in, data entered. Automatically.', desc: 'Juno connects to your existing tools and picks up documents as they arrive. 100+ document types: W-2s, 1099s, K-1s, Schedules C and E, brokerage statements, QuickBooks and Xero financials, and more.' },
              { step: '2', title: 'Instantly creates binder', subtitle: 'Workpapers your whole team can mark up.', desc: 'Juno automates tax workpaper preparation for every return. Your team can flag fields, assign items to each other, and track what\'s been done. Every data point links back to the source doc.' },
              { step: '3', title: 'Pushes to your tax software', subtitle: '100s of fields you\'ll never type by hand.', desc: 'Juno pushes directly to Drake, Lacerte, ProConnect, CCH Axcess, and more. No re-keying. No export files. Nothing moves until you say it\'s ready.' },
              { step: '4', title: 'Flags what needs your judgement', subtitle: 'Catches what you might miss at 10pm.', desc: 'Juno\'s AI tax review compares source docs to return fields and surfaces mismatches: a missed state return, a typo, income on the wrong line. It also checks prior year and shows what changed.' },
            ].map(s => (
              <div key={s.step} className="flex gap-6 mb-8 last:mb-0 group hover:bg-dark-50/50 p-4 -mx-4 rounded-xl transition-colors duration-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-juno-dark-green text-white flex items-center justify-center font-bold text-sm">{s.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-dark-900 mb-1">{s.title}</h3>
                  <p className="text-juno-dark-green font-medium text-sm mb-2">{s.subtitle}</p>
                  <p className="text-sm text-dark-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12 max-w-3xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Frequently asked questions</h2>
            <AnimatedFAQ
              items={[
                { q: 'What document types does Juno support?', a: 'Juno supports 100+ document types including W-2s, 1099s, K-1s, Schedules C and E, brokerage statements, QuickBooks and Xero financials, and more.' },
                { q: 'How accurate is the data extraction?', a: 'Juno achieves 95%+ data entry automation with dual validation, flagging uncertain fields for manual review.' },
                { q: 'Which tax software does Juno integrate with?', a: 'Juno pushes directly to Drake, Lacerte, ProConnect, CCH Axcess, and more.' },
                { q: 'Can Juno handle business returns?', a: 'Yes. Juno supports Forms 1120, 1120-S, and 1065, connecting to QuickBooks and Xero financials.' },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <CtaBanner />
    </main>
  )
}
