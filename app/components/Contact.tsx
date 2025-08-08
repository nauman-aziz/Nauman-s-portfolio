'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'm.nauman.aziz.1122@gmail.com',
      href: 'mailto:m.nauman.aziz.1122@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 310 4560430',
      href: 'tel:+923104560430'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pakistan',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white" data-id="contact-section">
      <div className="container-width section-padding" data-id="contact-container">
        <div className="text-center mb-16" data-id="contact-header">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-id="contact-title">
            Let's Work <span className="gradient-text" data-id="contact-title-accent">Together</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12" data-id="contact-content">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8" data-id="contact-info">
            <div data-id="contact-intro">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="contact-intro-title">
                Get in Touch
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6" data-id="contact-intro-text">
                I'm always open to discussing new opportunities, interesting projects, or just having 
                a chat about technology and innovation. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6" data-id="contact-methods">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 group"
                    data-id={`contact-method-${index}`}
                  >
                    <div className="flex-shrink-0" data-id={`contact-icon-${index}`}>
                      <Icon className="text-primary-600 group-hover:text-primary-700" size={24} />
                    </div>
                    <div data-id={`contact-details-${index}`}>
                      <h4 className="font-semibold text-gray-900" data-id={`contact-method-title-${index}`}>
                        {info.title}
                      </h4>
                      <p className="text-gray-600" data-id={`contact-method-value-${index}`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Availability Status */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6" data-id="availability-status">
              <div className="flex items-center mb-3" data-id="availability-indicator">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" data-id="status-dot"></div>
                <h4 className="font-semibold text-green-800" data-id="availability-title">
                  Available for New Projects
                </h4>
              </div>
              <p className="text-green-700 text-sm" data-id="availability-description">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your vision to life.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3" data-id="contact-form-section">
            <div className="bg-gray-50 rounded-2xl p-8" data-id="contact-form-container">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" data-id="form-title">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" data-id="contact-form">
                <div className="grid md:grid-cols-2 gap-6" data-id="form-name-email-row">
                  <div data-id="name-field">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" data-id="name-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Your full name"
                      data-id="name-input"
                    />
                  </div>
                  <div data-id="email-field">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" data-id="email-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                      placeholder="your.email@example.com"
                      data-id="email-input"
                    />
                  </div>
                </div>

                <div data-id="subject-field">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2" data-id="subject-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Project inquiry, job opportunity, etc."
                    data-id="subject-input"
                  />
                </div>

                <div data-id="message-field">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" data-id="message-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project, requirements, timeline, etc."
                    data-id="message-input"
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 border border-green-200 rounded-lg p-4" data-id="success-message">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-4" data-id="error-message">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  data-id="submit-button"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" data-id="loading-spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}