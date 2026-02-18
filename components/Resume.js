'use client'

import { portfolioData } from '@/data/portfolioData'
import { useEffect, useRef } from 'react'

const Resume = () => {
  const resumeRef = useRef(null)

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

    if (resumeRef.current) {
      observer.observe(resumeRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="resume"
      ref={resumeRef}
      className="py-12 sm:py-16 md:py-24 opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-accent-primary to-accent-gradient-end bg-clip-text text-transparent">
            Resume
          </span>
        </h2>
        <p className="text-base sm:text-lg text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto">
          Download my resume to learn more about my experience, skills, and achievements.
        </p>
        <a
          href={portfolioData.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block min-h-[44px] px-6 sm:px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-gradient-end rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-accent-primary/50 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Resume
