import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import StructuredData from '@/components/StructuredData'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Puget Power Band | Official Website',
  description: 'Official website of Puget Power Band. Check out our latest photos, upcoming shows, and more. Book us for live performances and concerts.',
  keywords: ['Puget Power Band', 'live music', 'band', 'concerts', 'shows', 'live performances', 'music events', 'rock band', 'local music'],
  authors: [{ name: 'Puget Power Band' }],
  creator: 'Puget Power Band',
  publisher: 'Puget Power Band',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pugetpowerband.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Puget Power Band | Official Website',
    description: 'Official website of Puget Power Band. Check out our latest photos, upcoming shows, and book us for live performances.',
    siteName: 'Puget Power Band',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Puget Power Band',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puget Power Band | Official Website',
    description: 'Official website of Puget Power Band. Check out our latest photos, upcoming shows, and more.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  )
}
