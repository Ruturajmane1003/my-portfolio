'use client'

import { portfolioData } from '@/data/portfolioData'
import { useEffect, useRef, useState } from 'react'

const Resume = () => {
  const resumeRef = useRef(null)
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const roleIcons = [
    (
      <svg
        key="data-scientist"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M7 15l3-3 3 2 4-5" />
      </svg>
    ),
    (
      <svg
        key="ai-engineer"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
      </svg>
    ),
    (
      <svg
        key="data-analyst"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="6" />
        <path d="M16 16l5 5" />
      </svg>
    )
  ]

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

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

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
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="resume-download-menu"
            className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-gradient-end rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-accent-primary/50 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
          >
            Check Resume
          </button>
          <div
            id="resume-download-menu"
            className={`fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 transition-all duration-300 ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
            aria-hidden={!isOpen}
          >
            <div
              className={`absolute inset-0 bg-black/60 backdrop-blur-lg transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div
              ref={dropdownRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-role-title"
              className={`relative w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <h3
                id="resume-role-title"
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent-primary to-accent-gradient-end bg-clip-text text-transparent"
              >
                Choose Your Role
              </h3>
              <p className="mt-2 text-sm sm:text-base text-text-secondary">
                Select the resume tailored to your role.
              </p>
              <div className="mt-6 space-y-3">
                {portfolioData.resumeOptions.map((option, index) => (
                  <a
                    key={option.label}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm sm:text-base font-semibold text-text-primary transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
                  >
                    <span className="text-white/80">{roleIcons[index]}</span>
                    <span>{option.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
