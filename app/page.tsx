import { Suspense } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PhotoGallery from '@/components/PhotoGallery'
import Shows from '@/components/Shows'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navigation />
      
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <PhotoGallery />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <Shows />
      </Suspense>
      
      <Contact />
      
      <Footer />
    </main>
  )
}
