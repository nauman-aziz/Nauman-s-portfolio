'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from 'lucide-react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Senior Software Engineer',
    'Full Stack Developer',
    'React & Next.js Expert',
    'AI Integration Specialist',
    'Micro-Frontend Architect'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(texts[currentIndex].substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        
        if (charIndex === 0) {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      } else {
        setCurrentText(texts[currentIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        
        if (charIndex === texts[currentIndex].length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex, texts])

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden"
      data-id="hero-section"
    >
      {/* Background Animation */}
      <div className="absolute inset-0" data-id="hero-bg-animation">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" data-id="bg-circle-1"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{animationDelay: '2s'}} data-id="bg-circle-2"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{animationDelay: '4s'}} data-id="bg-circle-3"></div>
      </div>

      <div className="container-width section-padding relative z-10" data-id="hero-container">
        <div className="text-center" data-id="hero-content">
          {/* Profile Image */}
          <div className="mb-8" data-id="profile-image-container">
            <div className="relative inline-block" data-id="profile-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Muhammad Nauman"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
                data-id="profile-image"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white" data-id="online-status"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in" data-id="hero-title">
            Hi, I'm{' '}
            <span className="gradient-text" data-id="hero-name">
              Muhammad Nauman
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 h-16 flex items-center justify-center" data-id="hero-subtitle">
            <span className="min-h-[1em]" data-id="typewriter-text">
              {currentText}
              <span className="animate-pulse" data-id="cursor">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" data-id="hero-description">
            Senior Software Engineer with 4+ years of experience in full-stack development, 
            AI integration, and modern web technologies. Passionate about creating exceptional 
            user experiences and scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-id="hero-cta-buttons">
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center space-x-2"
              data-id="hire-me-button"
            >
              <Mail size={20} />
              <span>Hire Me</span>
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="btn-secondary inline-flex items-center space-x-2"
              data-id="download-resume-button"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6" data-id="social-links">
            <a
              href="https://linkedin.com/in/muhammad-nauman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300 transform hover:scale-110"
              data-id="linkedin-link"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/muhammadnauman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300 transform hover:scale-110"
              data-id="github-link"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:m.nauman.aziz.1122@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300 transform hover:scale-110"
              data-id="email-link"
            >
              <Mail size={28} />
            </a>
            <a
              href="tel:+923104560430"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300 transform hover:scale-110"
              data-id="phone-link"
            >
              <Phone size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-id="scroll-indicator">
        <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors duration-300" data-id="scroll-arrow">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  )
}