import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Beaker,
  Truck,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ArrowUpRight,
  Pill
} from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white shadow-sm border border-gray-100"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-gray-700">Why Choose Akina</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 font-display sm:text-5xl lg:text-6xl">
            Everything Your Pet
            <br />
            <span className="gradient-text">Deserves & More</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Pharmaceutical expertise meets genuine compassion. We make pet medication
            simple, personalized, and stress-free.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Large featured card - Custom Compounding */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-600 via-primary-500 to-emerald-500 p-8 lg:p-12"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2230%22 height=%2230%22 viewBox=%220 0 30 30%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z%22 fill=%22rgba(255,255,255,0.07)%22/%3E%3C/svg%3E')] opacity-60" />

            {/* Floating elements */}
            <motion.div
              className="absolute top-8 right-8 text-6xl opacity-20"
              animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              💊
            </motion.div>

            <motion.div
              className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-white/10 blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-8">
                  <Beaker className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white font-display mb-4">
                  Custom Compounding
                </h3>

                <p className="text-lg text-white/80 max-w-md leading-relaxed">
                  Every pet is unique. We create personalized medications tailored to your pet's
                  specific needs—custom flavors, precise dosages, and the perfect form.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Chicken Flavor', 'Beef Flavor', 'Fish Flavor', 'Custom Dose'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-white font-semibold group/link"
                whileHover={{ x: 5 }}
              >
                Learn about compounding
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </motion.a>
            </div>
          </motion.div>

          {/* Same-Day Shipping */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-6">
                <Truck className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 font-display mb-3">
                Same-Day Shipping
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Orders placed by 3PM EST ship the same day. Fast, reliable delivery nationwide.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
                  <span className="text-sm">🚀</span>
                </div>
                <span className="text-sm font-medium text-blue-600">48 States Covered</span>
              </div>
            </div>
          </motion.div>

          {/* Quality Assured */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-400 mb-6">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 font-display mb-3">
                Quality Assured
              </h3>

              <p className="text-gray-600 leading-relaxed">
                PCAB accredited with rigorous quality controls. Your pet's safety is our priority.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                  <span className="text-sm">✓</span>
                </div>
                <span className="text-sm font-medium text-amber-600">PCAB Certified</span>
              </div>
            </div>
          </motion.div>

          {/* KiND Program - Wide card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100/50 p-8 hover:shadow-xl transition-shadow duration-500"
          >
            <div className="absolute -right-10 -bottom-10 text-[150px] opacity-10 group-hover:opacity-20 transition-opacity">
              ❤️
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-400 flex-shrink-0">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 font-display mb-2">
                  The KiND Program
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our unique collaborative approach brings together pharmacists, pet parents, and veterinarians
                  to ensure optimal outcomes for every furry patient.
                </p>
              </div>

              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-semibold whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Expert Pharmacists */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2230%22 height=%2230%22 viewBox=%220 0 30 30%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z%22 fill=%22rgba(255,255,255,0.03)%22/%3E%3C/svg%3E')]" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold font-display mb-3">
                Expert Pharmacists
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Our veterinary pharmacists are available 6 days a week to answer questions.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['👩‍⚕️', '👨‍⚕️', '👩‍⚕️'].map((emoji, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-lg border-2 border-gray-800">
                      {emoji}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-400">Always here to help</span>
              </div>
            </div>
          </motion.div>

          {/* Multiple Formulations */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-400 flex-shrink-0">
                  <Pill className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 font-display mb-3">
                    Multiple Formulations Available
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    From liquids to chewables, capsules to transdermal gels—we find the perfect form for your pet.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: '💧', label: 'Liquids' },
                      { icon: '🍬', label: 'Chews' },
                      { icon: '💊', label: 'Capsules' },
                      { icon: '✨', label: 'Gels' },
                      { icon: '🧴', label: 'Creams' },
                    ].map((form) => (
                      <motion.div
                        key={form.label}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100"
                      >
                        <span>{form.icon}</span>
                        <span className="text-sm font-medium text-violet-700">{form.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
