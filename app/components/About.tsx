'use client'

import { User, Code, Coffee, Award } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '4+' },
    { icon: Coffee, label: 'Projects Completed', value: '20+' },
    { icon: Award, label: 'Technologies Mastered', value: '15+' },
    { icon: User, label: 'Happy Clients', value: '10+' }
  ]

  return (
    <section id="about" className="py-20 bg-white" data-id="about-section">
      <div className="container-width section-padding" data-id="about-container">
        <div className="text-center mb-16" data-id="about-header">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-id="about-title">
            About <span className="gradient-text" data-id="about-title-accent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="about-subtitle">
            Passionate about creating innovative solutions and exceptional user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" data-id="about-content">
          {/* Left Column - Image */}
          <div className="relative" data-id="about-image-section">
            <div className="relative z-10" data-id="about-image-container">
              <img
                src="https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=600&h=400&fit=crop"
                alt="Working on projects"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                data-id="about-image"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl" data-id="experience-badge">
                <div className="text-center" data-id="experience-content">
                  <div className="text-3xl font-bold" data-id="experience-years">4+</div>
                  <div className="text-sm" data-id="experience-label">Years of Experience</div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-primary-100 w-72 h-72 rounded-full -z-10" data-id="about-bg-circle"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6" data-id="about-text-section">
            <div data-id="about-description">
              <p className="text-lg text-gray-700 leading-relaxed mb-6" data-id="about-paragraph-1">
                I'm a Senior Software Engineer with over 4 years of experience specializing in 
                full-stack development and AI integration. My expertise spans across modern web 
                technologies, with a particular focus on React, Next.js, and TypeScript.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" data-id="about-paragraph-2">
                Throughout my career at Techlogix, I've collaborated on cutting-edge AI healthcare 
                projects, built scalable micro-frontend architectures, and delivered solutions for 
                major clients including Toyota and Blue Cross Blue Shield.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" data-id="about-paragraph-3">
                I'm passionate about clean code, innovative problem-solving, and staying at the 
                forefront of technology trends. When I'm not coding, you'll find me exploring 
                new frameworks or contributing to open-source projects.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8" data-id="about-stats-grid">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300" data-id={`stat-${index}`}>
                    <Icon className="mx-auto mb-2 text-primary-600" size={32} data-id={`stat-icon-${index}`} />
                    <div className="text-2xl font-bold text-gray-900" data-id={`stat-value-${index}`}>{stat.value}</div>
                    <div className="text-sm text-gray-600" data-id={`stat-label-${index}`}>{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}