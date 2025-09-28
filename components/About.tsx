'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, MapPin, Mail } from 'lucide-react'
import { sanityClient, queries, BandInfo } from '@/lib/sanity'

const About = () => {
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
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">About The Band</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {bandInfo?.description || 
                "We are passionate musicians dedicated to creating powerful, memorable experiences through our music. Our sound blends energy, emotion, and technical skill to deliver performances that resonate with audiences long after the last note fades."
              }
            </p>

            <div className="space-y-4">
              {bandInfo?.genre && (
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-primary-400" />
                  <span>Genre: {bandInfo.genre}</span>
                </div>
              )}

              {bandInfo?.location && (
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>Based in: {bandInfo.location}</span>
                </div>
              )}

              {bandInfo?.email && (
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>{bandInfo.email}</span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-900/20 to-purple-900/20 p-8 rounded-2xl backdrop-blur-sm border border-primary-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">What We Bring</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold">High-Energy Performances</h4>
                  <p className="text-gray-400">Every show is crafted to create an unforgettable experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold">Original Music</h4>
                  <p className="text-gray-400">Fresh sounds that push creative boundaries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold">Community Connection</h4>
                  <p className="text-gray-400">Building lasting relationships with our audience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
