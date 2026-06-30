import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Firms Use AI Tax Prep | Juno Customers',
  description: 'See how accounting firms use AI tax prep to streamline preparation and review while maintaining quality and control.',
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
            <Link href="/start" className="btn btn-primary">Start Free Trial</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container px-6 md:px-12">
          <h2 className="heading-2 text-center mb-14">What tax pros are saying</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="card card-hover p-7 flex flex-col justify-between">
                <p className="text-dark-700 text-sm leading-relaxed mb-6">"{t.quote}"</p>
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

      <section className="section bg-dark-50">
        <div className="container px-6 md:px-12">
          <h2 className="heading-2 text-center mb-4">How firms are putting Juno to work</h2>
          <p className="text-body text-center mx-auto max-w-xl mb-14">
            Hours back on every return, cleaner handoffs, and new capacity without new hires.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map(cs => (
              <div key={cs.title} className="card card-hover p-7">
                <h3 className="text-base font-bold text-dark-900 mb-2">{cs.title}</h3>
                <p className="text-sm text-dark-600 mb-5">{cs.desc}</p>
                <Link href="#" className="text-juno-dark-green font-semibold text-sm hover:underline">Read the story →</Link>
              </div>
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
            <p className="text-sm text-juno-light-green/60 mt-6">7-day free trial. Start 5 free preparations. No credit card required.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
