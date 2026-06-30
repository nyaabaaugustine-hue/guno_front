import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white mt-auto">
      <div className="container px-6 md:px-12 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-juno-green rounded-lg flex items-center justify-center">
                <span className="text-dark-900 font-bold text-sm">J</span>
              </div>
              <span className="font-bold text-lg text-white">Juno</span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed max-w-sm">
              AI-powered tax preparation for modern firms. Built by a CPA, trusted by 1,000s of tax professionals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-juno-green uppercase mb-5">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Preparer', href: '/product/preparer' },
                { label: 'Binder', href: '/product/binder' },
                { label: 'Reviewer', href: '/product/reviewer' },
                { label: 'Advisor', href: '/product/advisor' },
                { label: 'Integrations', href: '/integrations' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-dark-400 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-juno-green uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Pricing', href: '/pricing' },
                { label: 'Customers', href: '/customers' },
                { label: 'About Us', href: '/about' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-dark-400 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-juno-green uppercase mb-5">Compare</h4>
            <ul className="space-y-3">
              {[
                { label: 'Vs Manual Prep', href: '#' },
                { label: 'Vs Legacy Prep', href: '#' },
                { label: 'Vs Outsourcing', href: '#' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-dark-400 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-dark-500">© 2024 Juno Tax. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-dark-500 hover:text-dark-300 transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-dark-500 hover:text-dark-300 transition-colors">Terms</Link>
            <Link href="#" className="text-xs text-dark-500 hover:text-dark-300 transition-colors">SOC 2</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
