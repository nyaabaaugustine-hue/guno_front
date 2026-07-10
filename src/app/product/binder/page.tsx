import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'
import AnimatedFAQ from '@/components/AnimatedFAQ'
import CtaBanner from '@/components/CtaBanner'
import { SIGNUP_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Automate Tax Workpaper Preparation for Tax Firms | Juno',
  description: 'Automate tax workpaper preparation with Binder. Build structured binders from client docs, annotate with tax-specific markup tools, and review as a team.',
  openGraph: {
    title: 'Automate Tax Workpaper Preparation | Juno Binder',
    description: 'Build structured binders from client docs and review as a team.',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
}

export default function BinderPage() {
  return (
    <main>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="container px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Product' }, { label: 'Binder' }]} />
          <div className="max-w-2xl">
            <div className="badge-green mb-5">Tax Workpaper Preparation</div>
            <h1 className="heading-1 text-dark-900 mb-6">Automate workpaper prep. Review together.</h1>
            <p className="text-body mb-8">
              Binder automates tax workpaper preparation, building a clean structured binder from client documents
              and giving your team tax-specific markup tools inside the same workflow you use for prep and review.
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
            {['drake.png','intuit-lacerte.png','intuit-proconnect.png','cch-axcess.png','taxdome.png','quickbooks.png'].map(f => (
              <Image key={f} src={`/images/integrations/${f}`} alt="" width={100} height={24} className="h-6 w-auto" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="section bg-white">
          <div className="container px-6 md:px-12 max-w-5xl mx-auto">
            <h2 className="heading-2 text-center mb-14">How Binder works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Builds a prep-ready binder automatically', desc: 'Automatically creates a clean, structured binder from all uploaded client documents organized in tax return order so preparers can get started right away.' },
                { title: 'Includes tax-specific markup tools', desc: 'Tick marks, calculator tapes, references, sign-offs, and all the annotation tools tax pros use every day — built directly into the workflow.' },
                { title: 'Annotate without leaving your workflow', desc: 'Review documents, add notes, and mark up PDFs without switching tools or juggling separate software.' },
                { title: 'Supports real-time collaboration', desc: 'Your team can work on the same binder simultaneously, with changes reflected instantly. Assign tasks, track progress, and review together.' },
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
                { q: 'How does Binder organize documents?', a: 'Binder automatically organizes documents in tax return order, creating a clean structured workpaper from all uploaded client documents.' },
                { q: 'Can my team collaborate in real-time?', a: 'Yes. Multiple team members can work on the same binder simultaneously with changes reflected instantly.' },
                { q: 'What markup tools are available?', a: 'Tick marks, calculator tapes, references, sign-offs, and all standard tax annotation tools are built directly into the workflow.' },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <CtaBanner />
    </main>
  )
}
