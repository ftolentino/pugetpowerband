'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Music } from 'lucide-react'
import { sanityClient, queries, getImageUrl, BandInfo } from '@/lib/sanity'

const Hero = () => {
  const [bandInfo, setBandInfo] = useState<BandInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBandInfo = async () => {
      try {
        const data = await sanityClient.fetch(queries.bandInfo)
        setBandInfo(data)
      } catch (error) {
        console.error('Error fetching band info:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBandInfo()
  }, [])

  if (loading) {
    return (
      <section id="home" className="relative h-screen flex items-center justify-center">
        <motion.div
          className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </section>
    )
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {bandInfo?.heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl(bandInfo.heroImage, 1920, 1080)}
            alt="Band Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Fallback gradient background */}
      {!bandInfo?.heroImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900" />
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Music className="w-16 h-16 mx-auto mb-4 text-primary-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent"
        >
          {bandInfo?.name || 'Puget Power Band'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          {bandInfo?.genre && `${bandInfo.genre} • `}
          {bandInfo?.location || 'Live Music Experience'}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
        >
          {bandInfo?.description || 'Experience the power of live music with electrifying performances and unforgettable shows.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            onClick={() => document.getElementById('shows')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play size={20} />
            View Shows
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full font-semibold transition-colors"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Photo Gallery
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
