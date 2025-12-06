import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 overflow-hidden" id="cta">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-white" />
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[3rem]"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              {/* Left content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  <span className="text-lg">💚</span>
                  <span className="text-sm font-semibold text-white/90">Ready to Get Started?</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl font-bold text-white font-display sm:text-5xl lg:text-6xl leading-tight"
                >
                  Make Medicine
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">
                    Time Easier
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg"
                >
                  Join thousands of pet parents who trust Akina for custom, flavored
                  medications that their pets actually enjoy taking.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col gap-4 mt-10 sm:flex-row"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors group shadow-xl"
                  >
                    Shop Medications
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-full border-2 border-white/20 hover:bg-white/10 transition-colors"
                  >
                    Refill Prescription
                  </motion.button>
                </motion.div>
              </div>

              {/* Right content - Contact cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                {/* Phone card */}
                <motion.a
                  href="tel:8552349995"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-400 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Call Us</p>
                    <p className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      (855) 234-9995
                    </p>
                  </div>
                </motion.a>

                {/* Email card */}
                <motion.a
                  href="mailto:info@akinaanimalhealth.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Email Us</p>
                    <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      info@akinaanimalhealth.com
                    </p>
                  </div>
                </motion.a>

                {/* Hours & Location */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <Clock className="w-5 h-5 text-primary-400 mb-3" />
                    <p className="text-sm font-medium text-gray-400 mb-1">Hours</p>
                    <p className="text-sm font-semibold text-white">Mon-Fri 8:30-6</p>
                    <p className="text-sm text-gray-400">Sat 9-1 EST</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <MapPin className="w-5 h-5 text-primary-400 mb-3" />
                    <p className="text-sm font-medium text-gray-400 mb-1">Location</p>
                    <p className="text-sm font-semibold text-white">Chantilly, VA</p>
                    <p className="text-sm text-gray-400">Nationwide Delivery</p>
                  </div>
                </div>

                {/* Vet portal CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 text-center rounded-2xl bg-gradient-to-r from-primary-500/20 to-emerald-500/20 border border-primary-500/30"
                >
                  <p className="text-sm font-medium text-gray-300 mb-2">Are you a veterinarian?</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-primary-400 transition-colors"
                  >
                    Access the Vet Portal
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
