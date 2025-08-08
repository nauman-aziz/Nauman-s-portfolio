'use client'

import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

export default function Education() {
  const education = [
    {
      institution: 'Punjab University College of Information Technology (PUCIT)',
      degree: 'Bachelor of Information Technology',
      duration: 'Sep 2018 - Jul 2022',
      grade: 'CGPA: 3.51',
      description: 'Comprehensive education in software engineering, algorithms, data structures, and modern web technologies.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop'
    },
    {
      institution: 'Knowledge Inn Preparatory School (KIPS)',
      degree: 'Higher Secondary School Certificate',
      duration: 'Sep 2016 - Jul 2018',
      grade: 'Grade: A+',
      description: 'Pre-engineering with focus on mathematics, physics, and computer science fundamentals.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop'
    }
  ]

  const certifications = [
    {
      title: 'Intermediate Machine Learning Certificate',
      issuer: 'Kaggle',
      icon: '🤖'
    },
    {
      title: 'Python for Data Science Certificate',
      issuer: 'IBM',
      icon: '🐍'
    },
    {
      title: 'Blazor for Absolute Beginners (.NET 5)',
      issuer: 'Microsoft Learn',
      icon: '⚡'
    },
    {
      title: 'Understanding and Complying with HIPAA',
      issuer: 'Healthcare Compliance',
      icon: '🏥'
    },
    {
      title: 'React Advanced Course for Professionals',
      issuer: 'React Training',
      icon: '⚛️'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50" data-id="education-section">
      <div className="container-width section-padding" data-id="education-container">
        <div className="text-center mb-16" data-id="education-header">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-id="education-title">
            Education & <span className="gradient-text" data-id="education-title-accent">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="education-subtitle">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16" data-id="education-timeline">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center" data-id="education-timeline-title">
            <GraduationCap className="mr-3 text-primary-600" size={32} />
            Academic Background
          </h3>
          
          <div className="space-y-8" data-id="education-items">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-id={`education-item-${index}`}
              >
                <div className="grid lg:grid-cols-5 gap-8 items-start" data-id={`education-content-${index}`}>
                  {/* Education Image */}
                  <div className="lg:col-span-2" data-id={`education-image-${index}`}>
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-48 object-cover rounded-xl shadow-md"
                      data-id={`education-img-${index}`}
                    />
                  </div>

                  {/* Education Details */}
                  <div className="lg:col-span-3 space-y-4" data-id={`education-details-${index}`}>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900" data-id={`education-institution-${index}`}>
                      {edu.institution}
                    </h4>
                    
                    <div className="space-y-2" data-id={`education-meta-${index}`}>
                      <p className="text-lg text-primary-600 font-semibold" data-id={`education-degree-${index}`}>
                        {edu.degree}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600" data-id={`education-info-${index}`}>
                        <div className="flex items-center" data-id={`education-duration-${index}`}>
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center" data-id={`education-grade-${index}`}>
                          <Award size={16} className="mr-2" />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed" data-id={`education-description-${index}`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div data-id="certifications-section">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center" data-id="certifications-title">
            <BookOpen className="mr-3 text-primary-600" size={32} />
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="certifications-grid">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                data-id={`certification-${index}`}
              >
                <div className="text-4xl mb-4" data-id={`cert-icon-${index}`}>
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2" data-id={`cert-title-${index}`}>
                  {cert.title}
                </h4>
                <p className="text-primary-600 font-medium" data-id={`cert-issuer-${index}`}>
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white text-center" data-id="learning-philosophy">
          <h3 className="text-2xl font-bold mb-4" data-id="philosophy-title">
            Commitment to Continuous Learning
          </h3>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto" data-id="philosophy-description">
            Technology evolves rapidly, and I believe in staying ahead of the curve through continuous 
            education, hands-on practice, and engaging with the developer community. Every project is 
            an opportunity to learn something new and push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  )
}