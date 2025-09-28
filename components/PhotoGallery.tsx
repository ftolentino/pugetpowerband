'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import { sanityClient, queries, getImageUrl, Photo } from '@/lib/sanity'

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentFilter, setCurrentFilter] = useState<string>('all')

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'live', label: 'Live Performance' },
    { value: 'band', label: 'Band Photos' },
    { value: 'studio', label: 'Studio' },
    { value: 'bts', label: 'Behind the Scenes' },
  ]

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await sanityClient.fetch(queries.photos)
        setPhotos(data || [])
        setFilteredPhotos(data || [])
      } catch (error) {
        console.error('Error fetching photos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  useEffect(() => {
    if (currentFilter === 'all') {
      setFilteredPhotos(photos)
    } else {
      setFilteredPhotos(photos.filter(photo => photo.category === currentFilter))
    }
  }, [currentFilter, photos])

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
    document.body.style.overflow = 'unset'
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return
    
    const currentIndex = filteredPhotos.findIndex(photo => photo._id === selectedPhoto._id)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1
    }
    
    setSelectedPhoto(filteredPhotos[newIndex])
  }

  if (loading) {
    return (
      <section id="gallery" className="py-20 px-4">
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
    <>
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-primary-400" />
              <h2 className="text-5xl font-bold text-white">Photo Gallery</h2>
            </div>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Capturing the energy and passion of our live performances
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setCurrentFilter(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  currentFilter === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Photo Grid */}
          {filteredPhotos.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No photos available yet. Check back soon!</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredPhotos.map((photo, index) => (
                  <motion.div
                    key={photo._id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => openLightbox(photo)}
                  >
                    <Image
                      src={getImageUrl(photo.image, 600, 600)}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                      <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                        <h3 className="font-semibold">{photo.title}</h3>
                        {photo.photographer && (
                          <p className="text-sm text-gray-300">Photo by {photo.photographer}</p>
                        )}
                      </div>
                    </div>
                    {photo.featured && (
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={getImageUrl(selectedPhoto.image, 1200, 800)}
                alt={selectedPhoto.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedPhoto.title}</h3>
                {selectedPhoto.photographer && (
                  <p className="text-gray-300">Photo by {selectedPhoto.photographer}</p>
                )}
              </div>

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>

              <button
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PhotoGallery
