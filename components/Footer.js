'use client'

import { portfolioData } from '@/data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="py-12 sm:py-16 md:py-24 bg-bg-secondary border-t border-accent-primary/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-accent-primary to-accent-gradient-end bg-clip-text text-transparent">
              {portfolioData.name}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary">{portfolioData.tagline}</p>
          </div>
          
          {/* Right side */}
          <div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="text-sm sm:text-base text-text-secondary mr-3 min-w-[80px]">Email:</span>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-sm sm:text-base text-accent-primary hover:text-highlight transition-colors break-all"
                >
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="text-sm sm:text-base text-text-secondary mr-3 min-w-[80px]">Phone:</span>
                <a
                  href={`tel:${portfolioData.phone}`}
                  className="text-sm sm:text-base text-accent-primary hover:text-highlight transition-colors"
                >
                  {portfolioData.phone}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="text-sm sm:text-base text-text-secondary mr-3 min-w-[80px]">LinkedIn:</span>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-accent-primary hover:text-highlight transition-colors"
                >
                  Connect
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="text-sm sm:text-base text-text-secondary mr-3 min-w-[80px]">GitHub:</span>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-accent-primary hover:text-highlight transition-colors"
                >
                  View Profile
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="text-sm sm:text-base text-text-secondary mr-3 min-w-[80px]">Location:</span>
                <span className="text-sm sm:text-base text-text-primary">{portfolioData.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent-primary/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-text-secondary">
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
