import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tax Review Software for Tax Firms | Juno',
  description: 'AI tax review software that catches errors before sign-off. Flags mismatches, checks prior year returns, and surfaces real exceptions for your team.',
}

export default function ReviewerPage() {
  return (
    <main>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="container px-6 md:px-12">
          <div className="max-w-2xl">
            <h1 className="heading-1 text-dark-900 mb-6">Speed up your review process and catch more errors</h1>
            <p className="text-body mb-8">
              Reviewer learns your firm's review process, then checks source documents and prior year
              returns for errors, inconsistencies, and missing information before they reach your desk.
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
        <div className="container px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="heading-2 text-center mb-4">Reviewer never gets sick of checklists</h2>
          <p className="text-body text-center mx-auto mb-14">And spots what others might miss.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Flags mismatches to check', desc: 'Start by checking what Reviewer has already flagged based on comparing source docs to return fields.' },
              { title: 'Dig into the details', desc: 'Click into any flagged item to see side-by-side fields, bounding boxes, and context — no hunting required.' },
              { title: 'Acts as part of your team', desc: 'Assign fields to teammates, mark them as reviewed, and track progress — like digital checkmarks, but better.' },
              { title: 'Catches your firm\'s gotchas', desc: 'Run firm-specific review rules to catch edge cases, missed savings, or high-risk issues before they become problems.' },
            ].map(f => (
              <div key={f.title} className="card card-hover p-7">
                <h3 className="text-lg font-bold text-dark-900 mb-3">{f.title}</h3>
                <p className="text-sm text-dark-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark-50">
        <div className="container px-6 md:px-12 max-w-3xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How does Reviewer catch errors?', a: 'Reviewer compares source documents to return fields, checks prior year returns, and surfaces mismatches, typos, and missing information.' },
              { q: 'Can Reviewer check firm-specific rules?', a: 'Yes. You can configure firm-specific review rules to catch edge cases and issues unique to your practice.' },
              { q: 'Does Reviewer integrate with my tax software?', a: 'Yes. Reviewer works alongside Drake, Lacerte, ProConnect, CCH Axcess, and other major tax software.' },
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
