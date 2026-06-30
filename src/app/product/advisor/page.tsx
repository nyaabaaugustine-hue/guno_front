import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tax Advisor for Firms | Juno',
  description: 'AI tax advisor built for firm workflows. Answers complex tax questions with citations, builds client tax plans, and drafts client communications.',
}

export default function AdvisorPage() {
  return (
    <main>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="container px-6 md:px-12">
          <div className="max-w-2xl">
            <h1 className="heading-1 text-dark-900 mb-6">Give clients Big-4 level tax advisory</h1>
            <p className="text-body mb-8">
              Your AI tax advisor for complex client questions, strategic planning scenarios,
              and regulatory updates. Built so you can focus on growing your practice.
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
            {['drake.png','intuit-lacerte.png','intuit-proconnect.png','cch-axcess.png','quickbooks.png','xero.png'].map(f => (
              <img key={f} src={`/images/integrations/${f}`} alt="" className="h-6" />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="heading-2 text-center mb-4">Your tax planning sidekick</h2>
          <p className="text-body text-center mx-auto mb-14">Who gets strategy — not just math.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Quick, fact-checked answers', desc: 'Get instant, well-researched responses to complex tax questions with proper citations.' },
              { title: 'Keeps up with tax law changes', desc: 'Stay current with the latest tax regulations and how they impact your clients.' },
              { title: 'Drafts emails, blog posts, and more', desc: 'Create professional client communications and content with tax expertise built in.' },
              { title: 'Explains answers in plain English', desc: 'Break down complex tax concepts into clear, client-friendly explanations.' },
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
              { q: 'How is Advisor different from ChatGPT?', a: 'Advisor is built specifically for tax professionals with tax-domain expertise, proper citations, and firm workflow integration.' },
              { q: 'Can Advisor help with tax planning?', a: 'Yes. Advisor handles strategic planning scenarios, multi-year projections, and regulatory impact analysis.' },
              { q: 'Does Advisor cite its sources?', a: 'Yes. Every answer includes proper citations to tax code, regulations, and official guidance.' },
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
