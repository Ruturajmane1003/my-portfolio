# Portfolio Website

A modern, premium single-page scrollable portfolio website built with Next.js, Tailwind CSS, and React.

## Features

- 🎨 Dark luxury theme with premium design
- 📱 Fully responsive design
- ✨ Smooth scrolling navigation
- 🎭 Fade-in animations on scroll
- 🚀 Built with Next.js App Router
- 💅 Styled with Tailwind CSS
- 📦 All content editable from `data/portfolioData.js`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Edit your portfolio content in `data/portfolioData.js`:
   - Update personal information
   - Add your projects
   - Update skills and experience
   - Add certifications
   - Update social links and resume URL

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.js            # Root layout with SEO meta tags
│   └── page.js              # Main page with all sections
├── components/
│   ├── Navigation.js        # Sticky navigation bar
│   ├── Hero.js              # Hero section
│   ├── About.js             # About section
│   ├── Skills.js            # Skills section
│   ├── Projects.js          # Projects showcase
│   ├── Experience.js        # Experience timeline
│   ├── Certifications.js    # Certifications grid
│   ├── Resume.js            # Resume download section
│   └── Footer.js            # Contact footer
└── data/
    └── portfolioData.js     # All portfolio content (EDIT HERE)
```

## Customization

All content is managed in `data/portfolioData.js`. Simply edit this file to update:

- Personal information
- Projects (add/remove as needed)
- Skills and categories
- Work experience
- Certifications
- Social links
- SEO metadata

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## Color Palette

- Primary Background: `#0B0F19`
- Secondary Background: `#111827`
- Primary Accent: `#6366F1` (Indigo)
- Gradient Accent: `#6366F1` → `#8B5CF6`
- Highlight: `#22D3EE` (Cyan)
- Primary Text: `#F9FAFB`
- Secondary Text: `#9CA3AF`

## License

This project is open source and available for personal use.
