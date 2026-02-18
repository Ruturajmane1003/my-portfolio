'use client'

import { portfolioData } from '@/data/portfolioData'
import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsRef = useRef(null)

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-12 sm:py-16 md:py-24 opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          <span className="bg-gradient-to-r from-accent-primary to-accent-gradient-end bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div
              key={category}
              className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-accent-primary/20 hover:border-accent-primary/40 hover:shadow-lg hover:shadow-accent-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-primary/10 text-accent-primary rounded-full text-xs sm:text-sm font-medium hover:bg-accent-primary/20 hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
