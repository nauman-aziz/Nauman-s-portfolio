'use client'

import { useState, useEffect } from 'react'
import { Menu, X, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      data-id="main-navigation"
    >
      <div className="container-width section-padding" data-id="nav-container">
        <div className="flex items-center justify-between h-16" data-id="nav-content">
          <div className="flex-shrink-0" data-id="nav-logo">
            <a 
              href="#hero" 
              className="text-2xl font-bold gradient-text"
              data-id="logo-link"
            >
              MN
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block" data-id="desktop-nav">
            <div className="ml-10 flex items-baseline space-x-4" data-id="nav-links">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    data-id={`nav-${item.name.toLowerCase()}`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-id="mobile-menu-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              data-id="menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden" data-id="mobile-nav-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg" data-id="mobile-nav-links">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                  data-id={`mobile-nav-${item.name.toLowerCase()}`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}