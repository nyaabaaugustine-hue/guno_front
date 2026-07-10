import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-dark-400">
        <li>
          <Link href="/" className="hover:text-juno-dark-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-dark-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-juno-dark-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-dark-900 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
