import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'
import AnimatedFAQ from '@/components/AnimatedFAQ'
import CtaBanner from '@/components/CtaBanner'
import { SIGNUP_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'AI Tax Advisor for Firms | Juno',
  description: 'AI tax advisor built for firm workflows. Answers complex tax questions with citations, builds client tax plans, and drafts client communications.',
  openGraph: {
    title: 'AI Tax Advisor for Firms | Juno Advisor',
    description: 'Give clients Big-4 level tax advisory with AI-powered research and compliance tracking.',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
}

export default function AdvisorPage() {
  return (
    <main>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="container px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Product' }, { label: 'Advisor' }]} />
          <div className="max-w-2xl">
            <div className="badge-green mb-5">AI Tax Advisory</div>
            <h1 className="heading-1 text-dark-900 mb-6">Give clients Big-4 level tax advisory</h1>
            <p className="text-body mb-8">
              Your AI tax advisor for complex client questions, strategic planning scenarios,
              and regulatory updates. Built so you can focus on growing your practice.
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
            {['drake.png','intuit-lacerte.png','intuit-proconnect.png','cch-axcess.png','quickbooks.png','xero.png'].map(f => (
              <Image key={f} src={`/images/integrations/${f}`} alt="" width={100} height={24} className="h-6 w-auto" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
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
              ].map((f, i) => (
                <div key={f.title} className="card p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                  <h3 className="text-lg font-bold text-dark-900 mb-3">{f.title}</h3>
                  <p className="text-sm text-dark-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12 max-w-3xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Frequently asked questions</h2>
            <AnimatedFAQ
              items={[
                { q: 'How is Advisor different from ChatGPT?', a: 'Advisor is built specifically for tax professionals with tax-domain expertise, proper citations, and firm workflow integration.' },
                { q: 'Can Advisor help with tax planning?', a: 'Yes. Advisor handles strategic planning scenarios, multi-year projections, and regulatory impact analysis.' },
                { q: 'Does Advisor cite its sources?', a: 'Yes. Every answer includes proper citations to tax code, regulations, and official guidance.' },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <CtaBanner />
    </main>
  )
}
