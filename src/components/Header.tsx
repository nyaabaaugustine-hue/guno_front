'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const navItems = [
  {
    label: 'Product',
    href: '#',
    dropdown: [
      { label: 'Preparer', href: '/product/preparer' },
      { label: 'Binder', href: '/product/binder' },
      { label: 'Reviewer', href: '/product/reviewer' },
      { label: 'Advisor', href: '/product/advisor' },
      { label: 'Integrations', href: '/integrations' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Customers', href: '/customers' },
  { label: 'About Us', href: '/about' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setHidden(y > 200 && y > lastY.current)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg border-dark-100 shadow-sm' : 'bg-white/60 backdrop-blur-sm border-transparent'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-juno-dark-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg text-dark-900 font-display">Juno</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-dark-600 hover:text-dark-900 rounded-lg hover:bg-dark-50 transition-colors">
                    {item.label}
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-dark-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-dark-600 hover:text-juno-dark-green hover:bg-juno-light-green/40 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-dark-600 hover:text-dark-900 rounded-lg hover:bg-dark-50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/signin"
              className="text-sm font-medium text-dark-500 hover:text-dark-900 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/start"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-juno-dark-green text-white text-sm font-semibold hover:bg-juno-mid-green transition-colors shadow-sm"
            >
              Start Free Trial
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-dark-600 hover:text-dark-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-dark-100 bg-white/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-dark-900 font-medium rounded-lg hover:bg-dark-50 transition-colors"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-3 mt-1 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-3 py-2 text-sm text-dark-600 hover:text-juno-dark-green rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm text-dark-900 font-medium rounded-lg hover:bg-dark-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 space-y-2 border-t border-dark-100 mt-4">
              <Link
                href="/signin"
                className="block px-3 py-2.5 text-sm text-dark-600 font-medium rounded-lg hover:bg-dark-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/start"
                className="block px-3 py-2.5 text-sm text-white font-semibold rounded-lg bg-juno-dark-green text-center"
                onClick={() => setMobileOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
