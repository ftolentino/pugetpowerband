'use client'

import { useEffect, useState } from 'react'
import { sanityClient, queries, BandInfo, Show } from '@/lib/sanity'

export default function StructuredData() {
  const [bandInfo, setBandInfo] = useState<BandInfo | null>(null)
  const [shows, setShows] = useState<Show[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [info, upcomingShows] = await Promise.all([
          sanityClient.fetch(queries.bandInfo),
          sanityClient.fetch(queries.upcomingShows)
        ])
        setBandInfo(info)
        setShows(upcomingShows || [])
      } catch (error) {
        console.error('Error fetching structured data:', error)
      }
    }

    fetchData()
  }, [])

  if (!bandInfo) return null

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pugetpowerband.vercel.app'

  // Music Group / Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: bandInfo.name || 'Puget Power Band',
    description: bandInfo.description || 'Live music band performing energetic shows',
    genre: bandInfo.genre || 'Rock',
    url: baseUrl,
    email: bandInfo.email,
    address: bandInfo.location ? {
      '@type': 'PostalAddress',
      addressLocality: bandInfo.location,
    } : undefined,
    sameAs: [
      bandInfo.socialLinks?.spotify,
      bandInfo.socialLinks?.youtube,
      bandInfo.socialLinks?.instagram,
      bandInfo.socialLinks?.facebook,
    ].filter(Boolean),
  }

  // Events Schema for upcoming shows
  const eventsSchema = shows.slice(0, 5).map((show) => ({
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: show.title,
    description: show.description || `${bandInfo.name} live at ${show.venue}`,
    startDate: show.date,
    location: {
      '@type': 'Place',
      name: show.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: show.city,
        addressRegion: show.state,
      },
    },
    performer: {
      '@type': 'MusicGroup',
      name: bandInfo.name || 'Puget Power Band',
    },
    offers: show.ticketUrl ? {
      '@type': 'Offer',
      url: show.ticketUrl,
      price: show.ticketPrice?.replace(/[^0-9.-]/g, ''),
      priceCurrency: 'USD',
      availability: show.soldOut ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
    } : undefined,
    eventStatus: 'https://schema.org/EventScheduled',
  }))

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${bandInfo.name || 'Puget Power Band'} Official Website`,
    url: baseUrl,
    description: bandInfo.description || 'Official website featuring photos, show dates, and booking information',
    publisher: {
      '@type': 'MusicGroup',
      name: bandInfo.name || 'Puget Power Band',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      {eventsSchema.length > 0 && eventsSchema.map((event, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(event),
          }}
        />
      ))}
    </>
  )
}

