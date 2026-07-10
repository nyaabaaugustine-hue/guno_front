import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/CtaBanner'
import { SIGNUP_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'How Firms Use AI Tax Prep | Juno Customers',
  description: 'See how accounting firms use AI tax prep to streamline preparation and review while maintaining quality and control.',
  openGraph: {
    title: 'How Firms Use AI Tax Prep | Juno Customers',
    description: 'See how accounting firms use AI tax prep to streamline preparation and review.',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
}

const testimonials = [
  { quote: "By using Juno, we've turned a new grad into a rock star — he's able to knock out 8-10 returns a day.", name: 'Anthony Amatore', role: 'Firm Owner', img: 'anthony-amatore.png' },
  { quote: "My own firm (Golden State Accounting) uses Juno every day. We did 55% net margins and zero overtime this year. We're never going back.", name: 'Dave Haase', role: 'Juno Founder & Firm Owner', img: 'dave-haase.png' },
  { quote: "When we lost two reviewers right in the middle of our busiest period, I honestly wasn't sure how we were going to manage. Juno stepped in and saved us.", name: 'Josh Bennett', role: 'Firm Owner, Vincere Tax', img: 'josh-bennett.png' },
  { quote: "I could cry with relief. Juno saves me so many late nights. I used to do 2-3 returns a day manually, but with Juno I've been able to double or triple that.", name: 'Molly Sutz', role: 'Bluesky Wealth Advisors', img: 'molly-sutz.png' },
  { quote: "Busy season used to mean long days. With Juno, our team can now do in a day what used to take a week.", name: 'Joel Yaeger', role: 'CPA, CMPD Wealth Advisory & Tax', img: 'joel-yaeger.png' },
  { quote: "The data it pulls from source docs is actually accurate, which saves us a ton of time, not just in prep but during review too.", name: 'Troy Wells', role: 'Blackhawk Accounting', img: 'troy-wells.png' },
  { quote: "With Juno, I'm no longer sitting here typing box numbers... I'm reviewing, and that's a completely different job.", name: 'Yehuda Tenenbaum', role: 'Y10 Tax Solutions', img: 'yehuda-tenenbaum.png' },
]

const caseStudies = [
  { title: 'Freedom Accounting and Tax absorbed an 850-client firm with one new hire', desc: 'Scaling capacity without scaling headcount.' },
  { title: 'Fix My Books automated business return prep with Juno', desc: 'Integrating five acquisitions without breaking the workflow.' },
  { title: 'BlueSky cleared its K-1 bottleneck without hiring', desc: 'Cut advisory research time 10 to 20x.' },
  { title: 'Nomadica Solutions serves smaller clients profitably', desc: 'Turning unprofitable engagements into growth.' },
  { title: 'Allison Accounting scaled tax advisory', desc: 'Reduced planning time by 80%.' },
]

export default function CustomersPage() {
  return (
    <main>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-juno-green/[0.07] to-transparent"></div>
        <div className="container px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="heading-1 text-dark-900 mb-6">Built by a CPA. Trusted by the pros.</h1>
            <p className="text-body mx-auto mb-8">
              See how accounting firms use AI tax prep to streamline preparation and review
              while maintaining quality and control.
            </p>
            <a href={SIGNUP_URL} className="btn btn-primary">Start Free Trial</a>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="section bg-white">
          <div className="container px-6 md:px-12">
            <h2 className="heading-2 text-center mb-14">What tax pros are saying</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div key={t.name} className="card p-7 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <p className="text-dark-700 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/images/team/${t.img}`}
                      alt={`${t.name}, ${t.role}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
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

      <ScrollReveal delay={0.1}>
        <section className="section bg-dark-50">
          <div className="container px-6 md:px-12">
            <h2 className="heading-2 text-center mb-4">How firms are putting Juno to work</h2>
            <p className="text-body text-center mx-auto max-w-xl mb-14">
              Hours back on every return, cleaner handoffs, and new capacity without new hires.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((cs, i) => (
                <div key={cs.title} className="card p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                  <h3 className="text-base font-bold text-dark-900 mb-2">{cs.title}</h3>
                  <p className="text-sm text-dark-600 mb-5">{cs.desc}</p>
                  <Link href="#" className="text-juno-dark-green font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded">Read the story →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CtaBanner />
    </main>
  )
}
