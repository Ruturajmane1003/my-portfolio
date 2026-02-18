'use client'

import { portfolioData } from '@/data/portfolioData'
import { useEffect, useRef } from 'react'

const Experience = () => {
  const experienceRef = useRef(null)

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-12 sm:py-16 md:py-24 opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          <span className="bg-gradient-to-r from-accent-primary to-accent-gradient-end bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-gradient-end to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent-primary rounded-full border-4 border-bg-primary transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 sm:ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:pr-12 md:text-right' : 'md:ml-auto md:pl-8 md:pl-12'}`}>
                  <div className="bg-bg-secondary rounded-2xl p-4 sm:p-6 border border-accent-primary/20 hover:border-accent-primary/40 hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-accent-primary">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary mb-2 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-highlight text-xs sm:text-sm mb-3">
                      {exp.duration}
                    </p>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
