'use client'

import { portfolioData } from '@/data/portfolioData'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const heroRef = useRef(null)
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
    // Hero section should animate immediately on mount
    const timer = setTimeout(() => {
      const contentDiv = heroRef.current?.querySelector('.hero-content')
      if (contentDiv) {
        contentDiv.classList.add('visible')
        contentDiv.classList.remove('opacity-0', 'translate-y-8')
      }
    }, 100)

    return () => clearTimeout(timer)
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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-gradient-end/20 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 hero-content opacity-0 transform translate-y-8 transition-all duration-700">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-gradient-end to-highlight rounded-full blur-lg opacity-50 animate-pulse"></div>
              <img
                src="/Ruturaj_profile_photo.jpeg"
                alt={portfolioData.name}
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-accent-primary/30 shadow-2xl hover:border-accent-gradient-end transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Name and Content */}
          <div className="text-center flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-accent-primary via-accent-gradient-end to-highlight bg-clip-text text-transparent">
                {portfolioData.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary mb-3 sm:mb-4">
              {portfolioData.role}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-12">
              {portfolioData.tagline}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 mt-6 sm:mt-8">
          <button
            onClick={(e) => scrollToSection(e, 'projects')}
            className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-gradient-end rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-accent-primary/50 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
          >
            View Projects
          </button>
          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="hero-resume-menu"
              className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 border-2 border-accent-primary rounded-xl text-accent-primary font-semibold hover:bg-accent-primary hover:text-white hover:-translate-y-1 transition-all duration-300 text-center text-sm sm:text-base"
            >
              Check Resume
            </button>
            <div
              id="hero-resume-menu"
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
                aria-labelledby="hero-role-title"
                className={`relative w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                  isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <h3
                  id="hero-role-title"
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
        
        <div className="flex justify-center space-x-6">
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-primary transition-colors duration-200 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-primary transition-colors duration-200 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-text-secondary hover:text-accent-primary transition-colors duration-200 hover:scale-110 transform"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
