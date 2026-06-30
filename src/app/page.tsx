import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-juno-green/[0.04] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-juno-dark-green/[0.03] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container px-6 md:px-12 relative">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 max-w-xl">
                <div className="badge-green mb-6">AI-Powered Tax Preparation</div>
                <h1 className="heading-1 text-dark-900 mb-6">
                  Tax prep automation built for modern tax pros
                </h1>
                <p className="text-body mb-8 text-dark-700">
                  Automate data entry from source docs, auto-fill tax forms, and review
                  side-by-side. The future of tax preparation is here — and it&apos;s
                  saving firms millions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/start" className="btn btn-primary">Start Free Trial</Link>
                  <Link href="#demo" className="btn btn-secondary">Book a Demo</Link>
                </div>
                <p className="text-xs text-dark-400 mt-4">7-day free trial. 5 free returns. No credit card required.</p>
              </div>

              <div className="flex-1 relative w-full">
                <div className="relative rounded-xl border border-dark-100 bg-white shadow-lg overflow-hidden">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-dark-100 bg-dark-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <span className="text-xs text-dark-400 ml-2">Juno — AI Tax Prep</span>
                  </div>
                  <div className="p-5 md:p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-juno-green rounded-full"></div>
                      <span className="text-xs font-medium text-dark-500 tracking-wide">LIVE — Processing 1040</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'W-2 Income', value: '$127,450.00', status: 'verified' },
                        { label: 'Federal Withholding', value: '$14,892.00', status: 'verified' },
                        { label: 'State Wages', value: '$127,450.00', status: 'verified' },
                        { label: 'SS Wages', value: '$127,450.00', status: 'pending' },
                        { label: 'Medicare Wages', value: '$127,450.00', status: 'pending' },
                        { label: 'Form 1099-INT', value: '$847.32', status: 'verified' },
                      ].map(f => (
                        <div key={f.label} className="flex items-center justify-between p-2.5 rounded-lg bg-dark-50">
                          <div>
                            <div className="text-xs text-dark-500">{f.label}</div>
                            <div className="text-sm font-semibold text-dark-900">{f.value}</div>
                          </div>
                          <div className={`w-1.5 h-1.5 rounded-full ${f.status === 'verified' ? 'bg-juno-green' : 'bg-yellow-400'}`}></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-dark-100">
                      <span className="text-xs text-dark-400">95% auto-extracted</span>
                      <span className="text-xs font-medium text-juno-dark-green">View source doc →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust bar */}
      <ScrollReveal delay={0.1}>
        <section className="py-14 bg-dark-50 border-y border-dark-100">
          <div className="container px-6 md:px-12">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center">
              {[
                { file: 'drake-logo.png', label: 'Drake' },
                { file: 'lacerte-logo.png', label: 'Lacerte' },
                { file: 'proconnect-logo.png', label: 'ProConnect' },
                { file: 'cch-axcess-logo.png', label: 'CCH Axcess' },
                { file: 'quickbooks.png', label: 'QuickBooks' },
                { file: 'xero.png', label: 'Xero' },
              ].map(l => (
                <img key={l.file} src={`/images/integrations/${l.file}`} alt={l.label} className="h-7 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Feature: Extract */}
      <ScrollReveal>
        <section className="section bg-white">
          <div className="container px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="text-xs font-semibold tracking-wider text-juno-dark-green uppercase mb-3">Preparer</div>
                <h2 className="heading-2 text-dark-900 mb-6">Extract data from source docs automatically</h2>
                <p className="text-body mb-8">
                  Juno reads W-2s, 1099s, K-1s, brokerage statements, and 100+ other document types.
                  Blurry iPhone photos, 40-page uploads, handwritten organizers — if your client sent it,
                  Juno reads it. Validate in minutes, not hours.
                </p>
                <ul className="space-y-3">
                  {['OCR + AI pattern recognition', '99% extraction accuracy', '100+ document types supported', 'Every value links back to source'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-dark-700">
                      <div className="w-1.5 h-1.5 bg-juno-green rounded-full shrink-0"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/product/preparer" className="inline-flex items-center gap-1 text-sm font-semibold text-juno-dark-green mt-6 hover:underline">
                  Learn more about Preparer →
                </Link>
              </div>
              <div className="bg-dark-50 rounded-xl border border-dark-100 p-8">
                <img src="/images/cards/card-1.png" alt="Preparer interface" className="w-full rounded-lg shadow-sm" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Feature: Review */}
      <ScrollReveal>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-last lg:order-first">
                <div className="bg-white rounded-xl border border-dark-100 p-8">
                  <img src="/images/cards/card-3.png" alt="Reviewer interface" className="w-full rounded-lg shadow-sm" />
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="text-xs font-semibold tracking-wider text-juno-dark-green uppercase mb-3">Reviewer</div>
                <h2 className="heading-2 text-dark-900 mb-6">Review side-by-side. Catch what others miss.</h2>
                <p className="text-body mb-8">
                  Review AI-extracted data side-by-side with original source documents. Tick marks,
                  notes, and approval workflows — everything your team needs to sign off with confidence.
                </p>
                <ul className="space-y-3">
                  {['Side-by-side comparison view', 'Tick mark system & notes', 'Approval workflows', 'Flags mismatches automatically'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-dark-700">
                      <div className="w-1.5 h-1.5 bg-juno-dark-green rounded-full shrink-0"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/product/reviewer" className="inline-flex items-center gap-1 text-sm font-semibold text-juno-dark-green mt-6 hover:underline">
                  Learn more about Reviewer →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Feature: Binder + Advisor */}
      <ScrollReveal>
        <section className="section bg-white">
          <div className="container px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-dark-100 rounded-xl p-8 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 bg-juno-light-green rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-juno-dark-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="heading-3 mb-3">Binder</h3>
                <p className="text-body mb-6">
                  Organize tax documents with auto-categorization, searchable AI tagging, and
                  secure cloud storage. Build structured workpapers your whole team can use.
                </p>
                <ul className="space-y-2 mb-6">
                  {['AI categorization', 'Search & filters', 'Real-time collaboration', 'Secure storage'].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-dark-600">
                      <div className="w-1 h-1 bg-juno-green rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/product/binder" className="text-sm font-semibold text-juno-dark-green hover:underline">Learn more →</Link>
              </div>
              <div className="border border-dark-100 rounded-xl p-8 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 bg-juno-light-green rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-juno-dark-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="heading-3 mb-3">Advisor</h3>
                <p className="text-body mb-6">
                  Tax planning, optimization, and scenario analysis. Give your clients Big-4 level
                  advisory with AI-powered research and compliance tracking.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Tax planning scenarios', 'Research with citations', 'Client-ready communications', 'Regulatory updates'].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-dark-600">
                      <div className="w-1 h-1 bg-juno-green rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/product/advisor" className="text-sm font-semibold text-juno-dark-green hover:underline">Learn more →</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Integrations summary */}
      <ScrollReveal>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="heading-2 text-dark-900 mb-4">Works with your existing stack</h2>
              <p className="text-body mx-auto">Native integrations with the tax software your firm already runs. No re-keying. No export files.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['drake-logo.png','lacerte-logo.png','proconnect-logo.png','cch-axcess-logo.png','taxdome.png','quickbooks.png','xero.png','karbon.png'].map(f => (
                <img key={f} src={`/images/integrations/${f}`} alt="" className="h-8 opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300" />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/integrations" className="text-sm font-semibold text-juno-dark-green hover:underline">View all integrations →</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="section bg-white">
          <div className="container px-6 md:px-12">
            <h2 className="heading-2 text-center mb-4">What tax pros are saying</h2>
            <p className="text-body text-center mx-auto max-w-xl mb-14">Loved by tax professionals who were sick of 60-hour weeks.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "I could cry with relief. Juno saves me so many late nights during tax season. I used to do 2-3 returns a day manually, but with Juno I've been able to double or triple that.", name: 'Molly Sutz', role: 'Bluesky Wealth Advisors', img: 'molly-sutz.png' },
                { quote: "We brought on a new hire and within the first week they were pushing 8-10 returns a day. That's unheard of without Juno.", name: 'Anthony Amatore', role: 'Firm Owner', img: 'anthony-amatore.png' },
                { quote: "Busy season used to mean long days just getting through the prep work. With Juno handling the busywork, our team can now do in a day what used to take a week.", name: 'Joel Yaeger', role: 'CPA, CMPD Wealth Advisory & Tax', img: 'joel-yaeger.png' },
              ].map((t, i) => (
                <div key={t.name} className="border border-dark-100 rounded-xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <p className="text-dark-700 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <img src={`/images/team/${t.img}`} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-dark-900 text-sm">{t.name}</p>
                      <p className="text-xs text-dark-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Comparison table */}
      <ScrollReveal>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12">
            <h2 className="heading-2 text-center mb-4">Why firms choose Juno</h2>
            <p className="text-body text-center mx-auto max-w-xl mb-14">See how Juno transforms the tax preparation workflow compared to traditional manual methods.</p>
            <div className="overflow-x-auto max-w-3xl mx-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-dark-200">
                    <th className="text-left py-4 pr-6 font-semibold text-dark-900 text-sm">Feature</th>
                    <th className="text-left py-4 px-6 font-semibold text-dark-900 text-sm">Juno</th>
                    <th className="text-left py-4 pl-6 font-semibold text-dark-900 text-sm">Manual Prep</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-100">
                  {[
                    { feature: 'Speed', juno: '8-10 returns/day', manual: '2-3 returns/day' },
                    { feature: 'Cost per return', juno: '$49', manual: '$150+' },
                    { feature: 'Accuracy', juno: '99.5%', manual: '85-90%' },
                    { feature: 'Training time', juno: 'Hours', manual: 'Weeks' },
                    { feature: 'Scalability', juno: 'Unlimited', manual: 'Headcount-limited' },
                    { feature: 'Compliance checks', juno: 'Built-in AI', manual: 'Manual review' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-dark-50/50 transition-colors">
                      <td className="py-3.5 pr-6 font-medium text-dark-900 text-sm">{row.feature}</td>
                      <td className="py-3.5 px-6">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-juno-green rounded-full"></div>
                          <span className="text-sm text-dark-700">{row.juno}</span>
                        </div>
                      </td>
                      <td className="py-3.5 pl-6 text-sm text-dark-500">{row.manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="section bg-juno-dark-green">
          <div className="container px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-2 text-white mb-6">Ready to transform your tax practice?</h2>
              <p className="text-lg text-juno-light-green/80 mb-8 max-w-xl mx-auto">
                Join 1,000+ tax professionals saving time, increasing accuracy, and growing their practice with Juno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-juno-dark-green font-semibold text-lg hover:bg-juno-light-green transition-colors shadow-sm">Start Free Trial</Link>
                <Link href="#demo" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors">Book a Demo</Link>
              </div>
              <p className="text-sm text-juno-light-green/60 mt-6">7-day free trial. Start 5 free preparations. No credit card required.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
