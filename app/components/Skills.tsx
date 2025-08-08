'use client'

import { Code, Database, Globe, Wrench, TestTube, Palette } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Python'],
      color: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: 'Frontend Technologies',
      skills: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Shadcn'],
      color: 'bg-green-500'
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express', '.NET Core', 'Flask', 'REST APIs', 'GraphQL', 'SOAP'],
      color: 'bg-purple-500'
    },
    {
      icon: TestTube,
      title: 'Testing & Quality',
      skills: ['Jest', 'React Testing Library', 'ESLint', 'SonarQube', 'Unit Testing'],
      color: 'bg-red-500'
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'CI/CD Pipelines', 'Webpack', 'Jira', 'Agile/Scrum'],
      color: 'bg-yellow-500'
    },
    {
      icon: Palette,
      title: 'Design & Additional',
      skills: ['Figma', 'Adobe XD', 'Custom Hooks', 'Context API', 'React Query', 'Formik', 'Yup'],
      color: 'bg-pink-500'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50" data-id="skills-section">
      <div className="container-width section-padding" data-id="skills-container">
        <div className="text-center mb-16" data-id="skills-header">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-id="skills-title">
            Technical <span className="gradient-text" data-id="skills-title-accent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="skills-subtitle">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-id={`skill-category-${index}`}
              >
                <div className="text-center mb-6" data-id={`skill-category-header-${index}`}>
                  <div 
                    className={`inline-flex items-center justify-center w-16 h-16 ${category.color} text-white rounded-full mb-4`}
                    data-id={`skill-category-icon-${index}`}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900" data-id={`skill-category-title-${index}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2" data-id={`skill-category-skills-${index}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300 cursor-default"
                      data-id={`skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Featured Skills Bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg" data-id="featured-skills">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" data-id="featured-skills-title">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="featured-skills-grid">
            {[
              { name: 'React/Next.js', level: 95 },
              { name: 'TypeScript', level: 90 },
              { name: 'Node.js', level: 85 },
              { name: 'AI Integration', level: 80 }
            ].map((skill, index) => (
              <div key={index} className="text-center" data-id={`featured-skill-${index}`}>
                <div className="relative mb-4" data-id={`skill-circle-${index}`}>
                  <svg className="w-24 h-24 mx-auto transform -rotate-90" data-id={`skill-svg-${index}`}>
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                      data-id={`skill-bg-circle-${index}`}
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                      className="text-primary-600"
                      data-id={`skill-progress-circle-${index}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center" data-id={`skill-percentage-${index}`}>
                    <span className="text-lg font-bold text-gray-900">{skill.level}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900" data-id={`skill-name-${index}`}>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}