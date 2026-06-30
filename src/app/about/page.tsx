import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Juno | Built for Modern Tax Prep',
  description: 'Founded by a CPA, Juno builds AI tax prep tools designed to support accountants through research, preparation, and review.',
}

export default function AboutPage() {
  return (
    <main>
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

      <section className="section bg-white">
        <div className="container px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="heading-2 mb-8">I needed the perfect junior assistant: Juno.</h2>
              <div className="space-y-5 text-dark-700 leading-relaxed">
                <p>I didn't set out to build a tech company. I just wanted to fix what was broken — for me, and for my team.</p>
                <p>As the founder of Golden State Accounting, I'd lived every season of tax firm life: the 14-hour days, the midnight email threads, the weekends lost to manual prep and doc review.</p>
                <p>It wasn't just the stress — it was the waste. The double-work. The late-night second-guessing over something as basic as document matching.</p>
                <p>Juno started as a hack — a way to catch errors in returns before I hit submit. Then it grew. It started answering client questions. Then drafting returns. I kept shaping it to think like someone who's actually done this work.</p>
                <p>I didn't build Juno because I love AI. I built it because I wanted to get home for dinner — and not leave my team behind at their desks.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="card overflow-hidden">
                <img src="/images/team/dave-haase.png" alt="Dave Haase" className="w-full" />
                <div className="p-5">
                  <p className="font-semibold text-dark-900">Dave Haase</p>
                  <p className="text-sm text-dark-500">CPA and Firm Owner, Golden State Accounting<br />Founder, Juno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark-50">
        <div className="container px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="heading-2 text-center mb-4">Built from the inside out</h2>
          <p className="text-body text-center mx-auto max-w-xl mb-14">
            Most tax tech is built from the outside in — engineers guessing at workflows. That's not how I work.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Designed by a tax pro', desc: 'I understand the nuances of tax work because I do it. Our tools are designed from challenges I\'ve faced with my staff over the past 10 years.' },
              { title: 'Built to relieve, not replace', desc: 'Juno is a suite of teammates I always wished I had: AI-powered tools that provide backup without compromising accuracy or control.' },
              { title: 'Security I bet my CPA on', desc: 'Juno is SOC 2 certified. Your client data is encrypted in transit and at rest. Regular third-party audits.' },
            ].map(v => (
              <div key={v.title} className="card card-hover p-7">
                <h3 className="text-lg font-bold text-dark-900 mb-3">{v.title}</h3>
                <p className="text-sm text-dark-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container px-6 md:px-12 max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 bg-juno-dark-green text-white border-0">
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
