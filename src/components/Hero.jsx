import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles, Star, Check, Clock, Shield, Truck } from 'lucide-react'

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
}

const benefits = [
  { icon: '🎨', text: 'Custom Flavors' },
  { icon: '💊', text: 'Any Dosage' },
  { icon: '🚀', text: 'Same-Day Ship' },
]

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-primary-50/30" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-40"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-200/60 via-emerald-100/40 to-transparent blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary-300/50 via-teal-100/30 to-transparent blur-3xl" />
        </motion.div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-32 lg:py-40"
      >
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            {/* Premium badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 shadow-sm">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-4 h-4 text-primary-500" />
                </motion.div>
                <span className="text-sm font-semibold text-primary-700">Kindness Compounded™</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 font-display sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Pet Medications
              <br />
              <span className="gradient-text-animated">Made with Love</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="max-w-xl mx-auto mt-6 text-lg leading-relaxed text-gray-600 lg:mx-0 lg:text-xl text-balance"
            >
              Custom-compounded medications in flavors your pet will love.
              Choose the perfect dosage, strength, and form—shipped same day.
            </motion.p>

            {/* Benefit pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 mt-8 lg:justify-start">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
                >
                  <span className="text-lg">{benefit.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 mt-10 sm:flex-row lg:justify-start justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group text-lg"
              >
                Shop Medications
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary group"
              >
                For Veterinarians
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-6 mt-12 lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">5.0</span>
                <span className="text-sm text-gray-500">from 500+ reviews</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="relative lg:h-[600px]"
          >
            {/* Main visual container */}
            <div className="relative h-full">
              {/* Background decorative elements */}
              <motion.div
                className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary-100/50 via-emerald-50/30 to-teal-100/50"
                animate={{
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Main card */}
              <motion.div
                className="relative h-full p-8 bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-2xl shadow-primary-900/10 border border-white/50 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner gradient accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-200/40 to-transparent rounded-full blur-2xl" />

                {/* Pet visual area */}
                <div className="relative flex flex-col items-center justify-center h-full">
                  {/* Decorative rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-64 h-64 rounded-full border-2 border-dashed border-primary-200/50"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-80 h-80 rounded-full border border-primary-100/30"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  {/* Center content */}
                  <motion.div
                    className="relative z-10 text-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="relative">
                      <div className="text-[120px] leading-none filter drop-shadow-lg">🐕</div>
                      {/* Floating hearts */}
                      <motion.div
                        className="absolute -top-2 -right-2 text-2xl"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        💚
                      </motion.div>
                      <motion.div
                        className="absolute bottom-4 -left-4 text-xl"
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, -10, 0],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        ✨
                      </motion.div>
                    </div>
                    <p className="mt-4 text-lg font-semibold text-gray-800">Happy & Healthy</p>
                    <p className="text-sm text-gray-500">Because they deserve the best</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating feature cards */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-6 top-1/4 z-20"
              >
                <motion.div
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-xl border border-gray-100"
                  whileHover={{ scale: 1.05, x: 5 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-400">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Same-Day Shipping</p>
                    <p className="text-xs text-gray-500">Orders by 3PM EST</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-6 top-1/3 z-20"
              >
                <motion.div
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-xl border border-gray-100"
                  whileHover={{ scale: 1.05, x: -5 }}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400">
                    <span className="text-2xl">🍗</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Flavored Meds</p>
                    <p className="text-xs text-gray-500">Chicken, Beef & more</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20"
              >
                <motion.div
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-xl border border-gray-100"
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">PCAB Accredited</p>
                    <p className="text-xs text-gray-500">Quality guaranteed</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
