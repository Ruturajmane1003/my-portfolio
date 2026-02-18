'use client'

import { portfolioData } from '@/data/portfolioData'
import { useEffect, useRef } from 'react'

const Certifications = () => {
  const certificationsRef = useRef(null)

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

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="certifications"
      ref={certificationsRef}
      className="py-12 sm:py-16 md:py-24 bg-bg-secondary opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          <span className="bg-gradient-to-r from-accent-primary to-accent-gradient-end bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-bg-primary rounded-2xl p-4 sm:p-6 border border-accent-primary/20 hover:border-accent-gradient-end/40 shadow-lg hover:shadow-xl hover:shadow-accent-primary/20 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-text-primary">
                {cert.name}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary mb-1">
                <span className="font-semibold">Issuer:</span> {cert.issuer}
              </p>
              <p className="text-highlight mb-4 text-xs sm:text-sm">
                Year: {cert.year}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full min-h-[44px] px-4 py-2 bg-gradient-to-r from-accent-primary to-accent-gradient-end rounded-xl text-white text-center font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300 text-sm sm:text-base flex items-center justify-center"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
