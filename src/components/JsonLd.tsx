export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Juno Tax',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'AI-powered tax preparation software that automates data entry from source docs, auto-fills tax forms, and enables side-by-side review.',
    url: 'https://juno.tax',
    author: {
      '@type': 'Organization',
      name: 'Juno Tax',
      description: 'AI-powered tax preparation for modern firms. Built by a CPA, trusted by 1000s of tax professionals.',
      founder: {
        '@type': 'Person',
        name: 'Dave Haase',
      },
    },
    offers: {
      '@type': 'Offer',
      price: '49',
      priceCurrency: 'USD',
      description: 'Per-return pricing. All features included.',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000+',
      bestRating: '5',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What document types does Juno support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Juno supports 100+ document types including W-2s, 1099s, K-1s, Schedules C and E, brokerage statements, QuickBooks and Xero financials, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is the data extraction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Juno achieves 95%+ data entry automation with dual validation, flagging uncertain fields for manual review.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which tax software does Juno integrate with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Juno pushes directly to Drake, Lacerte, ProConnect, CCH Axcess, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Juno handle business returns?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Juno supports Forms 1120, 1120-S, and 1065, connecting to QuickBooks and Xero financials.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a minimum commitment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. You can start with a 7-day free trial and 5 free preparations. No credit card required. Cancel anytime.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
