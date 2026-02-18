import './globals.css'
import { Inter } from 'next/font/google'
import { portfolioData } from '@/data/portfolioData'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
