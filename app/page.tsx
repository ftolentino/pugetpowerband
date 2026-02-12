import Hero from '@/components/Hero'
import About from '@/components/About'
import PhotoGallery from '@/components/PhotoGallery'
import Shows from '@/components/Shows'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { sanityClient, queries, BandInfo, Photo, Show } from '@/lib/sanity'

async function getPageData() {
  const [bandInfo, photos, upcomingShows, pastShows] = await Promise.all([
    sanityClient.fetch<BandInfo>(queries.bandInfo),
    sanityClient.fetch<Photo[]>(queries.photos),
    sanityClient.fetch<Show[]>(queries.upcomingShows),
    sanityClient.fetch<Show[]>(queries.pastShows),
  ])

  return { bandInfo, photos: photos || [], upcomingShows: upcomingShows || [], pastShows: pastShows || [] }
}

export default async function Home() {
  const { bandInfo, photos, upcomingShows, pastShows } = await getPageData()

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navigation />
      <Hero bandInfo={bandInfo} />
      <About bandInfo={bandInfo} />
      <PhotoGallery photos={photos} />
      <Shows upcomingShows={upcomingShows} pastShows={pastShows} />
      <Contact bandInfo={bandInfo} />
      <Footer bandInfo={bandInfo} />
      <StructuredData bandInfo={bandInfo} shows={upcomingShows} />
    </main>
  )
}
