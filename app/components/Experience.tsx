'use client'

import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'Techlogix',
      position: 'Senior Software Engineer',
      duration: 'Jul 2022 - Present',
      location: 'On site',
      projects: [
        {
          title: 'Generative AI for Health Care Projects',
          description: 'Collaborated with US AI Health Care products like AgentGPT, SecureGPT, BenefitsGPT, and ContractualGPT, enhancing AI technology implementations for Blue Cross Blue Shield.',
          technologies: ['Tailwind', 'React', 'Next.js', 'Context API', 'OpenAI', 'REST APIs', 'CI/CD', 'Flask'],
          image: '/images/quantum_sim_mini_logo.png'
        },
        {
          title: 'Micro-Frontend Architecture Projects',
          description: 'Created micro frontends using React for clients like Toyota, Lufox, and others. Developed forms and validations with secure data handling.',
          technologies: ['React.ts', 'Node.js', 'Redux', 'TypeScript', 'REST APIs', 'CI/CD', 'Storybook'],
          image: '/images/atlas.png'
        },
        {
          title: 'Government Projects',
          description: 'Developed the Securities and Exchange Commission of Pakistan portal to facilitate complex legal interactions with robust security implementation.',
          technologies: ['.NET Core', 'SQL', 'Security Implementation', 'Validation'],
          image: '/images/secp.png'
        }
      ]
    },
    {
      company: 'InfoTech Private Limited',
      position: 'Junior Software Engineer',
      duration: 'Jun 2020 - Apr 2021',
      location: 'Lahore, Pakistan',
      projects: [
        {
          title: 'Flight Booking Web Application',
          description: 'Engineered a comprehensive web application for flight search to booking, integrating REST APIs for seamless data exchange and user experience.',
          technologies: ['React.js', 'JavaScript', 'CSS3', 'Bootstrap', 'REST APIs'],
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop'
        }
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white" data-id="experience-section">
      <div className="container-width section-padding" data-id="experience-container">
        <div className="text-center mb-16" data-id="experience-header">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-id="experience-title">
            Work <span className="gradient-text" data-id="experience-title-accent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="experience-subtitle">
            Building innovative solutions across diverse industries and technologies
          </p>
        </div>

        <div className="space-y-12" data-id="experience-timeline">
          {experiences.map((experience, expIndex) => (
            <div key={expIndex} className="relative" data-id={`experience-${expIndex}`}>
              {/* Company Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white mb-8" data-id={`company-header-${expIndex}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between" data-id={`company-info-${expIndex}`}>
                  <div data-id={`company-details-${expIndex}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" data-id={`company-name-${expIndex}`}>
                      {experience.company}
                    </h3>
                    <p className="text-xl text-primary-100 mb-2" data-id={`position-${expIndex}`}>
                      {experience.position}
                    </p>
                  </div>
                  <div className="flex flex-col md:text-right text-primary-100" data-id={`company-meta-${expIndex}`}>
                    <div className="flex items-center mb-1" data-id={`duration-${expIndex}`}>
                      <Calendar size={16} className="mr-2" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center" data-id={`location-${expIndex}`}>
                      <MapPin size={16} className="mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-8" data-id={`projects-${expIndex}`}>
                {experience.projects.map((project, projIndex) => (
                  <div 
                    key={projIndex} 
                    className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                    data-id={`project-${expIndex}-${projIndex}`}
                  >
                    <div className="grid lg:grid-cols-5 gap-8 items-start" data-id={`project-content-${expIndex}-${projIndex}`}>
                      {/* Project Image */}
                      <div className="lg:col-span-2" data-id={`project-image-${expIndex}-${projIndex}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-contain rounded-xl shadow-md"
                          data-id={`project-img-${expIndex}-${projIndex}`}
                        />
                      </div>

                      {/* Project Details */}
                      <div className="lg:col-span-3 space-y-4" data-id={`project-details-${expIndex}-${projIndex}`}>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3" data-id={`project-title-${expIndex}-${projIndex}`}>
                          {project.title}
                        </h4>
                        
                        <p className="text-gray-700 leading-relaxed" data-id={`project-description-${expIndex}-${projIndex}`}>
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div data-id={`project-technologies-${expIndex}-${projIndex}`}>
                          <h5 className="font-semibold text-gray-900 mb-3" data-id={`technologies-label-${expIndex}-${projIndex}`}>
                            Technologies Used:
                          </h5>
                          <div className="flex flex-wrap gap-2" data-id={`technologies-list-${expIndex}-${projIndex}`}>
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                                data-id={`tech-${expIndex}-${projIndex}-${techIndex}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}