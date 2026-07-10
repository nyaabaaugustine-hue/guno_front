'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem {
  q: string
  a: string
}

interface AnimatedFAQProps {
  items: FaqItem[]
}

export default function AnimatedFAQ({ items }: AnimatedFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={faq.q}
            className="card card-hover p-5 transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-juno-green/50 rounded"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="font-semibold text-dark-900 text-sm">{faq.q}</span>
              <motion.svg
                className="w-4 h-4 text-dark-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${i}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-dark-600 pt-3 leading-relaxed border-t border-dark-100 mt-3">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
