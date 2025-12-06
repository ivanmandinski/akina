import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, ArrowRight, Heart } from 'lucide-react'

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Mission', href: '#' },
      { label: 'Quality Assurance', href: '#' },
      { label: 'Accreditations', href: '#' },
      { label: 'Newsroom', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  veterinarians: {
    title: 'For Veterinarians',
    links: [
      { label: 'Vet Portal', href: '#', highlight: true },
      { label: 'Custom Formulations', href: '#' },
      { label: 'Prescribe Now', href: '#' },
      { label: 'Referral Program', href: '#' },
      { label: 'Ask Our Pharmacists', href: '#' },
    ],
  },
  petParents: {
    title: 'For Pet Parents',
    links: [
      { label: 'Shop Medications', href: '#', highlight: true },
      { label: 'Refill Prescription', href: '#' },
      { label: 'KiND Program', href: '#' },
      { label: 'Pharmacist Consultation', href: '#' },
      { label: 'Share Your Story', href: '#' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Return Policy', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Newsletter section */}
        <div className="py-12 border-b border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get tips for pet health and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 min-w-[280px]"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-emerald-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-shadow flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-6">
            {/* Brand column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-400">
                  <span className="text-xl font-bold text-white">A</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white font-display">Akina</span>
                  <span className="text-[10px] font-semibold tracking-widest text-primary-400 uppercase -mt-0.5">
                    Animal Health
                  </span>
                </div>
              </div>

              <p className="mb-6 text-gray-400 leading-relaxed max-w-xs">
                Kindness Compounded™. Custom veterinary medications made with care,
                shipped with speed, delivered with love.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                <motion.a
                  href="tel:8552349995"
                  className="flex items-center gap-3 text-gray-400 transition-colors hover:text-primary-400 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  (855) 234-9995
                </motion.a>

                <motion.a
                  href="mailto:info@akinaanimalhealth.com"
                  className="flex items-center gap-3 text-gray-400 transition-colors hover:text-primary-400 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  info@akinaanimalhealth.com
                </motion.a>

                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>4080 Lafayette Center Dr #270B<br />Chantilly, VA 20151</span>
                </div>

                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  Mon-Fri 8:30 AM - 6 PM EST
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 text-gray-400 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-emerald-400 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-sm font-bold tracking-wider text-white uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className={`inline-flex items-center gap-2 transition-colors ${
                          link.highlight
                            ? 'text-primary-400 font-semibold hover:text-primary-300'
                            : 'text-gray-400 hover:text-white'
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        {link.label}
                        {link.highlight && <ArrowRight className="w-4 h-4" />}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>© {new Date().getFullYear()} Akina Animal Health.</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-primary-500 fill-primary-500 hidden sm:inline" />
              <span className="hidden sm:inline">for pets everywhere.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="transition-colors hover:text-white">Accessibility</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="transition-colors hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
