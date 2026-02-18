'use client'

import { portfolioData } from '@/data/portfolioData'
import { useEffect, useRef } from 'react'

const About = () => {
  const aboutRef = useRef(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-12 sm:py-16 md:py-24 bg-bg-secondary opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          <span className="bg-gradient-to-r from-accent-primary to-accent-gradient-end bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {portfolioData.about.description}
            </p>
          </div>
          
          <div>
            <ul className="space-y-3 sm:space-y-4">
              {portfolioData.about.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-primary mr-3 mt-1 flex-shrink-0">▸</span>
                  <span className="text-sm sm:text-base text-text-secondary">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
