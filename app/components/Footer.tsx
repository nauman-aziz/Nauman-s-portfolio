'use client'

import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/muhammad-nauman',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      href: 'https://github.com/muhammadnauman',
      icon: Github
    },
    {
      name: 'Email',
      href: 'mailto:m.nauman.aziz.1122@gmail.com',
      icon: Mail
    },
    {
      name: 'Phone',
      href: 'tel:+923104560430',
      icon: Phone
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative" data-id="main-footer">
      <div className="container-width section-padding py-16" data-id="footer-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="footer-content">
          {/* Brand Section */}
          <div className="lg:col-span-2" data-id="footer-brand">
            <h3 className="text-2xl font-bold mb-4" data-id="footer-logo">
              Muhammad Nauman
            </h3>
            <p className="text-gray-300 mb-6 max-w-md" data-id="footer-description">
              Senior Software Engineer passionate about creating innovative solutions 
              with modern web technologies and AI integration. Let's build something 
              amazing together.
            </p>
            <div className="flex space-x-4" data-id="footer-social-links">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                    data-id={`footer-social-${link.name.toLowerCase()}`}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div data-id="footer-quick-links">
            <h4 className="text-lg font-semibold mb-4" data-id="quick-links-title">
              Quick Links
            </h4>
            <nav className="space-y-2" data-id="quick-links-nav">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                  data-id={`quick-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div data-id="footer-contact">
            <h4 className="text-lg font-semibold mb-4" data-id="contact-info-title">
              Contact Info
            </h4>
            <div className="space-y-3" data-id="contact-info-list">
              <div className="text-gray-300" data-id="footer-email">
                <span className="block font-medium">Email</span>
                <a 
                  href="mailto:m.nauman.aziz.1122@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                  data-id="footer-email-link"
                >
                  m.nauman.aziz.1122@gmail.com
                </a>
              </div>
              <div className="text-gray-300" data-id="footer-phone">
                <span className="block font-medium">Phone</span>
                <a 
                  href="tel:+923104560430"
                  className="hover:text-white transition-colors duration-300"
                  data-id="footer-phone-link"
                >
                  +92 310 4560430
                </a>
              </div>
              <div className="text-gray-300" data-id="footer-location">
                <span className="block font-medium">Location</span>
                <span>Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center" data-id="footer-bottom">
          <p className="text-gray-400 flex items-center justify-center" data-id="copyright">
            © 2024 Muhammad Nauman. Made with{' '}
            <Heart className="mx-1 text-red-500 animate-pulse" size={16} data-id="heart-icon" />{' '}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          data-id="scroll-to-top"
        >
          <ArrowUp size={20} className="mx-auto" />
        </button>
      )}
    </footer>
  )
}