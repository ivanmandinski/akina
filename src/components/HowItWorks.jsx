import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FileText, FlaskConical, Package, Heart, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Prescription',
    description: 'Your vet sends us the prescription digitally, or transfer an existing one to Akina.',
    color: 'from-primary-500 to-emerald-400',
    bgColor: 'bg-primary-50',
    emoji: '📋',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'We Compound It',
    description: 'Our pharmacists craft your pet\'s custom medication with the perfect flavor and dose.',
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
    emoji: '⚗️',
  },
  {
    number: '03',
    icon: Package,
    title: 'Fast Shipping',
    description: 'Same-day shipping for orders by 3PM EST. Track every step to your door.',
    color: 'from-violet-500 to-purple-400',
    bgColor: 'bg-violet-50',
    emoji: '📦',
  },
  {
    number: '04',
    icon: Heart,
    title: 'Happy Pet',
    description: 'Flavored meds your pet actually likes means less stress for everyone.',
    color: 'from-rose-500 to-pink-400',
    bgColor: 'bg-rose-50',
    emoji: '🐾',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-cream-50 to-white"
      id="how-it-works"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-24 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white shadow-sm border border-gray-100"
          >
            <span className="text-lg">✨</span>
            <span className="text-sm font-semibold text-gray-700">Simple 4-Step Process</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 font-display sm:text-5xl lg:text-6xl">
            How It <span className="gradient-text">Works</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Getting custom medication for your pet is easier than you think.
            <br className="hidden sm:block" />
            Here's our simple process from prescription to delivery.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection line - Desktop */}
          <div className="absolute hidden lg:block top-[140px] left-[10%] right-[10%] h-1 bg-gray-100 rounded-full">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary-400 via-blue-400 via-violet-400 to-rose-400"
              style={{ scaleX: lineProgress, transformOrigin: 'left' }}
            />
          </div>

          {/* Steps Grid */}
          <div className="relative grid gap-8 md:gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full"
                >
                  {/* Step number - positioned on the timeline */}
                  <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Card content */}
                  <div className="relative pt-12 lg:pt-16">
                    <div className="relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 h-full">
                      {/* Mobile step number */}
                      <div className="lg:hidden absolute -top-6 left-8">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                          {step.number}
                        </div>
                      </div>

                      {/* Icon with background */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} mb-6`}
                        whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                      >
                        <span className="text-3xl">{step.emoji}</span>
                      </motion.div>

                      {/* Content */}
                      <h3 className="mb-3 text-xl font-bold text-gray-900 font-display">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-gray-400 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-full bg-gray-100">
            <span className="px-4 text-sm text-gray-600">Ready to get started?</span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
