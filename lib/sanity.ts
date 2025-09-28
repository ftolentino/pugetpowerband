import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-11-01',
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)

// Helper function to get optimized image URL
export const getImageUrl = (source: any, width = 800, height = 600) => {
  return urlFor(source)
    .width(width)
    .height(height)
    .fit('crop')
    .crop('center')
    .url()
}

// GROQ queries
export const queries = {
  bandInfo: `*[_type == "bandInfo"][0]{
    name,
    description,
    heroImage,
    genre,
    location,
    email,
    socialLinks
  }`,
  
  photos: `*[_type == "photo"] | order(featured desc, date desc){
    _id,
    title,
    image,
    alt,
    category,
    featured,
    date,
    photographer
  }`,
  
  featuredPhotos: `*[_type == "photo" && featured == true] | order(date desc){
    _id,
    title,
    image,
    alt,
    category,
    date,
    photographer
  }`,
  
  upcomingShows: `*[_type == "show" && date >= now()] | order(date asc){
    _id,
    title,
    venue,
    city,
    state,
    date,
    doors,
    showTime,
    ticketPrice,
    ticketUrl,
    ageRestriction,
    description,
    otherBands,
    soldOut
  }`,
  
  pastShows: `*[_type == "show" && date < now()] | order(date desc)[0...6]{
    _id,
    title,
    venue,
    city,
    state,
    date
  }`
}

export interface BandInfo {
  name: string
  description: string
  heroImage: any
  genre: string
  location: string
  email: string
  socialLinks: {
    spotify?: string
    youtube?: string
    instagram?: string
    facebook?: string
  }
}

export interface Photo {
  _id: string
  title: string
  image: any
  alt: string
  category: 'live' | 'band' | 'studio' | 'bts'
  featured: boolean
  date: string
  photographer?: string
}

export interface Show {
  _id: string
  title: string
  venue: string
  city: string
  state?: string
  date: string
  doors?: string
  showTime?: string
  ticketPrice?: string
  ticketUrl?: string
  ageRestriction: 'all-ages' | '18+' | '21+'
  description?: string
  otherBands?: string[]
  soldOut: boolean
}
