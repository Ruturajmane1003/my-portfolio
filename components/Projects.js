'use client'

import { portfolioData } from '@/data/portfolioData'
import { useEffect, useRef } from 'react'

const Projects = () => {
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-12 sm:py-16 md:py-24 bg-bg-secondary opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          <span className="bg-gradient-to-r from-accent-primary to-accent-gradient-end bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-bg-primary rounded-2xl p-4 sm:p-6 border border-accent-primary/20 hover:border-accent-gradient-end/40 shadow-lg hover:shadow-xl hover:shadow-accent-primary/20 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-text-primary">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary mb-3 sm:mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-accent-primary/10 text-highlight rounded-lg text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] px-4 py-2 bg-bg-secondary border border-accent-primary/30 rounded-xl text-accent-primary text-center font-semibold hover:bg-accent-primary hover:text-white transition-all duration-300 text-sm sm:text-base flex items-center justify-center"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] px-4 py-2 bg-gradient-to-r from-accent-primary to-accent-gradient-end rounded-xl text-white text-center font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300 text-sm sm:text-base flex items-center justify-center"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
