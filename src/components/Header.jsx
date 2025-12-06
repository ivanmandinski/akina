import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react'

const navItems = [
  {
    label: 'About',
    submenu: [
      { label: 'Our Vision', desc: 'What drives us forward' },
      { label: 'Quality Assurance', desc: 'PCAB accredited standards' },
      { label: 'Accreditations', desc: 'Our certifications' },
      { label: 'States Served', desc: 'Where we deliver' },
    ],
  },
  {
    label: 'Veterinarians',
    submenu: [
      { label: 'Vet Portal', desc: 'Prescribe online', highlight: true },
      { label: 'Custom Formulations', desc: 'Tailored medications' },
      { label: 'Ask Our Pharmacists', desc: 'Expert consultation' },
      { label: 'Referral Program', desc: 'Partner with us' },
    ],
  },
  {
    label: 'Pet Parents',
    submenu: [
      { label: 'Shop Medications', desc: 'Browse products', highlight: true },
      { label: 'Refill Prescription', desc: 'Quick refills' },
      { label: 'Pharmacist Consultation', desc: 'Get expert advice' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-400 shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
              <span className="text-xl font-bold text-white">A</span>
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 font-display tracking-tight">Akina</span>
              <span className="text-[10px] font-semibold tracking-widest text-primary-600 uppercase -mt-0.5">
                Animal Health
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="items-center hidden lg:flex">
            <div className="flex items-center bg-gray-50/80 rounded-full px-2 py-1.5">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-all rounded-full ${
                      activeDropdown === index
                        ? 'text-primary-600 bg-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 w-72 p-3 mt-3 bg-white rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-100"
                      >
                        {/* Dropdown arrow */}
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

                        <div className="relative">
                          {item.submenu.map((subItem) => (
                            <motion.a
                              key={subItem.label}
                              href="#"
                              className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                                subItem.highlight
                                  ? 'bg-primary-50 hover:bg-primary-100'
                                  : 'hover:bg-gray-50'
                              }`}
                              whileHover={{ x: 4 }}
                            >
                              <div className="flex-1">
                                <p className={`text-sm font-semibold ${
                                  subItem.highlight ? 'text-primary-700' : 'text-gray-900'
                                }`}>
                                  {subItem.label}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">{subItem.desc}</p>
                              </div>
                              {subItem.highlight && (
                                <ArrowRight className="w-4 h-4 text-primary-500" />
                              )}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="items-center hidden gap-4 lg:flex">
            <a
              href="tel:8552349995"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:text-primary-600 hover:bg-primary-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(855) 234-9995</span>
            </a>

            <div className="w-px h-6 bg-gray-200" />

            <button className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-primary-600">
              Sign In
            </button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10 lg:hidden rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="py-6 space-y-2 border-t border-gray-100">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href || '#'}
                      className="flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                      {item.submenu && <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </a>
                  </div>
                ))}

                <div className="pt-6 space-y-3 border-t border-gray-100 mt-4">
                  <a
                    href="tel:8552349995"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 rounded-xl bg-gray-100"
                  >
                    <Phone className="w-4 h-4" />
                    (855) 234-9995
                  </a>
                  <button className="w-full btn-secondary">Sign In</button>
                  <button className="w-full btn-primary">Get Started</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
