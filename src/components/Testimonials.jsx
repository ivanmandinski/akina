import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, Shield, Clock, Award, Phone } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Pet Parent',
    pet: 'Max the Golden Retriever',
    avatar: '🐕',
    image: null,
    rating: 5,
    text: 'Akina has been a lifesaver! Max used to hate taking his thyroid medication, but now with the chicken-flavored chews, he thinks it\'s a treat. The pharmacist even called to check on how he was doing!',
    location: 'Virginia',
    highlight: 'Chicken-flavored chews',
  },
  {
    id: 2,
    name: 'Dr. Jennifer Kim',
    role: 'Veterinarian',
    pet: 'Animal Care Clinic',
    avatar: '👩‍⚕️',
    image: null,
    rating: 5,
    text: 'As a veterinarian, I\'ve recommended Akina to countless clients. Their quality is impeccable, the vet portal is incredibly easy to use, and my patients get their medications quickly.',
    location: 'Maryland',
    highlight: 'Vet portal',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Pet Parent',
    pet: 'Luna the Persian Cat',
    avatar: '🐱',
    image: null,
    rating: 5,
    text: 'Luna is the pickiest cat ever, but she actually likes her transdermal medication from Akina. No more wrestling matches! The team even helped me find the right formulation.',
    location: 'Washington DC',
    highlight: 'Transdermal medication',
  },
  {
    id: 4,
    name: 'Emily Thompson',
    role: 'Pet Parent',
    pet: 'Buddy the Beagle',
    avatar: '🐶',
    image: null,
    rating: 5,
    text: 'The same-day shipping is incredible. I ordered Buddy\'s medication in the morning and it was at my door the next day. The price is also much better than my local pharmacy.',
    location: 'North Carolina',
    highlight: 'Same-day shipping',
  },
]

const trustBadges = [
  { icon: Shield, label: 'PCAB Accredited', sublabel: 'Quality Certified' },
  { icon: Award, label: '5.0 Rating', sublabel: '500+ Reviews' },
  { icon: Clock, label: 'Same-Day Ship', sublabel: 'Orders by 3PM' },
  { icon: Phone, label: 'Expert Support', sublabel: '6 Days a Week' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section className="relative py-32 overflow-hidden" id="testimonials">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-cream-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white shadow-sm border border-gray-100"
          >
            <span className="text-lg">💬</span>
            <span className="text-sm font-semibold text-gray-700">What Our Customers Say</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 font-display sm:text-5xl lg:text-6xl">
            Loved by Pet Parents
            <br />
            <span className="gradient-text">& Vets Alike</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Join thousands of happy pet owners and veterinarians who trust Akina
            for their compounding needs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-gray-100 min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 p-8 md:p-12 lg:p-16"
              >
                <div className="grid lg:grid-cols-[1fr,auto] gap-8 h-full">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    {/* Quote icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-gray-900 leading-relaxed mb-8">
                      "{testimonials[activeIndex].text}"
                    </blockquote>

                    {/* Highlight tag */}
                    <div className="mb-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold">
                        ✨ {testimonials[activeIndex].highlight}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-emerald-100 flex items-center justify-center text-3xl">
                        {testimonials[activeIndex].avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">
                          {testimonials[activeIndex].name}
                        </p>
                        <p className="text-gray-500">
                          {testimonials[activeIndex].pet} • {testimonials[activeIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Side decoration - Desktop only */}
                  <div className="hidden lg:flex flex-col items-center justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-100 via-emerald-50 to-teal-100 flex items-center justify-center">
                        <span className="text-8xl">{testimonials[activeIndex].avatar}</span>
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-primary-200 animate-spin-slow" style={{ animationDuration: '20s' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <badge.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="font-bold text-gray-900 text-center">{badge.label}</p>
                <p className="text-sm text-gray-500 text-center">{badge.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
