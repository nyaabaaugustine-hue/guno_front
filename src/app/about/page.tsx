import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/CtaBanner'
import { SIGNUP_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About Juno | Built for Modern Tax Prep',
  description: 'Founded by a CPA, Juno builds AI tax prep tools designed to support accountants through research, preparation, and review.',
  openGraph: {
    title: 'About Juno | Built for Modern Tax Prep',
    description: 'Founded by a CPA, Juno builds AI tax prep tools designed to support accountants.',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <main>
      <ScrollReveal>
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
          <div className="container px-6 md:px-12">
            <div className="max-w-2xl">
              <h1 className="heading-1 text-dark-900 mb-8">I was drowning. So I built Juno.</h1>
              <blockquote className="text-lg md:text-xl text-dark-700 italic border-l-4 border-juno-dark-green pl-6 mb-6 leading-relaxed">
                &ldquo;I didn&apos;t build this because I love AI. I built it because I was tired of
                double-checking PDFs at midnight. This year, I was able to take my kids on
                spring break — even though it was peak tax season.&rdquo;
              </blockquote>
              <p className="text-sm font-medium text-dark-500">— Dave Haase, Founder & CPA</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <section className="section bg-white">
          <div className="container px-6 md:px-12">
            <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
              <div className="lg:col-span-3">
                <h2 className="heading-2 mb-8">I needed the perfect junior assistant: Juno.</h2>
                <div className="space-y-5 text-dark-700 leading-relaxed">
                  <p>I didn&apos;t set out to build a tech company. I just wanted to fix what was broken — for me, and for my team.</p>
                  <p>As the founder of Golden State Accounting, I&apos;d lived every season of tax firm life: the 14-hour days, the midnight email threads, the weekends lost to manual prep and doc review.</p>
                  <p>It wasn&apos;t just the stress — it was the waste. The double-work. The late-night second-guessing over something as basic as document matching.</p>
                  <p>Juno started as a hack — a way to catch errors in returns before I hit submit. Then it grew. It started answering client questions. Then drafting returns. I kept shaping it to think like someone who&apos;s actually done this work.</p>
                  <p>I didn&apos;t build Juno because I love AI. I built it because I wanted to get home for dinner — and not leave my team behind at their desks.</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="card overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <Image
                    src="/images/team/dave-haase.png"
                    alt="Dave Haase, CPA and Founder of Juno"
                    width={400}
                    height={500}
                    className="w-full"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <p className="font-semibold text-dark-900">Dave Haase</p>
                    <p className="text-sm text-dark-500">CPA and Firm Owner, Golden State Accounting<br />Founder, Juno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12 max-w-5xl mx-auto">
            <h2 className="heading-2 text-center mb-4">Built from the inside out</h2>
            <p className="text-body text-center mx-auto max-w-xl mb-14">
              Most tax tech is built from the outside in — engineers guessing at workflows. That&apos;s not how I work.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Designed by a tax pro', desc: 'I understand the nuances of tax work because I do it. Our tools are designed from challenges I\'ve faced with my staff over the past 10 years.' },
                { title: 'Built to relieve, not replace', desc: 'Juno is a suite of teammates I always wished I had: AI-powered tools that provide backup without compromising accuracy or control.' },
                { title: 'Security I bet my CPA on', desc: 'Juno is SOC 2 certified. Your client data is encrypted in transit and at rest. Regular third-party audits.' },
              ].map((v, i) => (
                <div key={v.title} className="card p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                  <h3 className="text-lg font-bold text-dark-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-dark-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <section className="section bg-white">
          <div className="container px-6 md:px-12 max-w-4xl mx-auto">
            <div className="card p-8 md:p-10 bg-juno-dark-green text-white border-0 hover:shadow-xl transition-shadow duration-300">
              <h2 className="heading-2 mb-5">How I use Juno</h2>
              <p className="text-base leading-relaxed text-juno-light-green/90 mb-5">
                At Golden State Accounting, Juno is embedded in our daily operations. In 2025 alone,
                the team processed over 500 returns using Juno, saving dozens of hours per week and
                surfacing issues they would have otherwise missed.
              </p>
              <p className="text-base leading-relaxed text-juno-light-green/90">
                Juno handles prep drafts, flags errors, and answers real-time client questions — all
                inside the same flow the team already uses. I didn&apos;t just build this tool — I
                battle-tested it at my own firm.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CtaBanner />
    </main>
  )
}
