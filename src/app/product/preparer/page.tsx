import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tax Preparation Software for Tax Firms | Juno',
  description: 'AI tax prep software that reduces manual prep work. Preparer automates data entry & pushes to Drake, Lacerte, ProConnect, CCH Axcess, and more.',
}

export default function PreparerPage() {
  return (
    <main>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="container px-6 md:px-12">
          <div className="max-w-2xl">
            <div className="badge-green mb-5">AI Tax Prep Software</div>
            <h1 className="heading-1 text-dark-900 mb-6">Handles 95% of data entry on your returns.</h1>
            <p className="text-body mb-8">
              The promise of AI tax preparation software is simple: your team stops keying and starts reviewing.
              Juno reads every document your clients send and handles the data entry, from W-2s, 1099s, and
              brokerage statements for individual returns to QuickBooks and Xero financials for business returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/start" className="btn btn-primary">Start Free Trial</Link>
              <Link href="#demo" className="btn btn-secondary">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-50 border-y border-dark-100">
        <div className="container px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 items-center opacity-40">
            {['intuit-lacerte.png','intuit-proconnect.png','drake.png','cch-axcess.png','taxdome.png','quickbooks.png','xero.png'].map(f => (
              <img key={f} src={`/images/integrations/${f}`} alt="" className="h-6" />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Supported returns</h2>
          <p className="text-body text-center mx-auto mb-14">1040s and business returns. One platform, one price.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card card-hover p-8">
              <h3 className="heading-3 mb-4">1040 Returns</h3>
              <p className="text-body mb-6">Tax prep automation for 1040s, from simple W-2 filers to complex returns with multiple schedules and K-1s.</p>
              <Link href="#learn" className="text-juno-dark-green font-semibold text-sm hover:underline">Learn more →</Link>
            </div>
            <div className="card card-hover p-8">
              <h3 className="heading-3 mb-4">Business Returns</h3>
              <p className="text-body mb-6">Forms 1120, 1120-S, and 1065. Connects to QuickBooks and Xero, handles reclassification and journal entries, and pushes to your tax software.</p>
              <Link href="#learn" className="text-juno-dark-green font-semibold text-sm hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark-50">
        <div className="container px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="heading-2 text-center mb-14">Growth is gated by how fast you can hire.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Headcount limits your growth', desc: 'Every new client is more documents to read, more fields to key, more lines to check. The only way to grow is to add staff. Hiring takes months. Training takes longer.' },
              { title: 'Best people do work that doesn\'t need them', desc: 'CPAs and EAs spend hours keying numbers that shouldn\'t need to be keyed at all. Senior reviewers check every line because the source data can\'t be trusted.' },
              { title: 'Experienced staff are hard to find', desc: 'The pool of trained preparers is shrinking. Firms compete for the same people. And when you do hire, it takes a full season before they\'re productive.' },
            ].map(p => (
              <div key={p.title} className="card card-hover p-7">
                <h3 className="heading-3 mb-4 text-xl">{p.title}</h3>
                <p className="text-sm text-dark-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <div key={s.step} className="flex gap-6 mb-8 last:mb-0">
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

      <section className="section bg-dark-50">
        <div className="container px-6 md:px-12 max-w-3xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What document types does Juno support?', a: 'Juno supports 100+ document types including W-2s, 1099s, K-1s, Schedules C and E, brokerage statements, QuickBooks and Xero financials, and more.' },
              { q: 'How accurate is the data extraction?', a: 'Juno achieves 95%+ data entry automation with dual validation, flagging uncertain fields for manual review.' },
              { q: 'Which tax software does Juno integrate with?', a: 'Juno pushes directly to Drake, Lacerte, ProConnect, CCH Axcess, and more.' },
              { q: 'Can Juno handle business returns?', a: 'Yes. Juno supports Forms 1120, 1120-S, and 1065, connecting to QuickBooks and Xero financials.' },
            ].map(faq => (
              <details key={faq.q} className="card card-hover p-5 group">
                <summary className="font-semibold text-dark-900 cursor-pointer list-none flex justify-between items-center text-sm">
                  {faq.q}
                  <svg className="w-4 h-4 text-dark-400 group-open:rotate-180 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="text-sm text-dark-600 mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-juno-dark-green">
        <div className="container px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-6">See how fast tax prep can be when Juno handles the grunt work.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-juno-dark-green font-semibold text-lg hover:bg-juno-light-green transition-colors shadow-sm">Start Free Trial</Link>
              <Link href="#demo" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
