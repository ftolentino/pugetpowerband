'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, DollarSign, ExternalLink, Users, Ticket } from 'lucide-react'
import { format, parseISO, isPast } from 'date-fns'
import { sanityClient, queries, Show } from '@/lib/sanity'

const Shows = () => {
  const [upcomingShows, setUpcomingShows] = useState<Show[]>([])
  const [pastShows, setPastShows] = useState<Show[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const [upcoming, past] = await Promise.all([
          sanityClient.fetch(queries.upcomingShows),
          sanityClient.fetch(queries.pastShows)
        ])
        setUpcomingShows(upcoming || [])
        setPastShows(past || [])
      } catch (error) {
        console.error('Error fetching shows:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchShows()
  }, [])

  const formatShowDate = (dateString: string) => {
    try {
      const date = parseISO(dateString)
      return {
        day: format(date, 'dd'),
        month: format(date, 'MMM'),
        full: format(date, 'EEEE, MMMM do, yyyy')
      }
    } catch {
      return { day: '00', month: 'TBD', full: 'Date TBD' }
    }
  }

  const ShowCard = ({ show, isPastShow = false }: { show: Show, isPastShow?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all ${
        isPastShow ? 'opacity-75' : ''
      }`}
    >
      <div className="flex gap-6">
        {/* Date */}
        <div className="text-center flex-shrink-0">
          <div className="bg-primary-600 text-white rounded-lg p-3 min-w-[80px]">
            <div className="text-2xl font-bold">{formatShowDate(show.date).day}</div>
            <div className="text-sm uppercase">{formatShowDate(show.date).month}</div>
          </div>
          {show.soldOut && (
            <div className="bg-red-600 text-white text-xs py-1 px-2 rounded-full mt-2 font-medium">
              SOLD OUT
            </div>
          )}
        </div>

        {/* Show Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{show.title}</h3>
              <p className="text-gray-300">{formatShowDate(show.date).full}</p>
            </div>
            {!isPastShow && show.ticketUrl && !show.soldOut && (
              <motion.a
                href={show.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Ticket size={16} />
                Tickets
                <ExternalLink size={14} />
              </motion.a>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} className="text-primary-400 flex-shrink-0" />
                <span className="truncate">
                  {show.venue}, {show.city}{show.state && `, ${show.state}`}
                </span>
              </div>
              
              {(show.doors || show.showTime) && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} className="text-primary-400 flex-shrink-0" />
                  <span>
                    {show.doors && `Doors: ${show.doors}`}
                    {show.doors && show.showTime && ' • '}
                    {show.showTime && `Show: ${show.showTime}`}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              {show.ticketPrice && (
                <div className="flex items-center gap-2 text-gray-300">
                  <DollarSign size={16} className="text-primary-400 flex-shrink-0" />
                  <span>{show.ticketPrice}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-gray-300">
                <Users size={16} className="text-primary-400 flex-shrink-0" />
                <span>{show.ageRestriction === 'all-ages' ? 'All Ages' : show.ageRestriction}</span>
              </div>
            </div>
          </div>

          {show.description && (
            <p className="text-gray-400 mb-3">{show.description}</p>
          )}

          {show.otherBands && show.otherBands.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-400 text-sm">With:</span>
              {show.otherBands.map((band, index) => (
                <span
                  key={index}
                  className="bg-primary-600/20 text-primary-300 px-2 py-1 rounded text-sm"
                >
                  {band}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (loading) {
    return (
      <section id="shows" className="py-20 px-4 bg-black/20">
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
    <section id="shows" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary-400" />
            <h2 className="text-5xl font-bold text-white">Shows</h2>
          </div>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for electrifying live performances that you won't forget
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 rounded-lg p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Upcoming Shows ({upcomingShows.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'past'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Past Shows
            </button>
          </div>
        </div>

        {/* Shows Content */}
        <div className="space-y-6">
          {activeTab === 'upcoming' ? (
            upcomingShows.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <p className="text-gray-400 text-lg">No upcoming shows scheduled yet.</p>
                <p className="text-gray-500">Check back soon for new dates!</p>
              </div>
            ) : (
              upcomingShows.map((show) => (
                <ShowCard key={show._id} show={show} />
              ))
            )
          ) : (
            pastShows.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <p className="text-gray-400 text-lg">No past shows to display.</p>
              </div>
            ) : (
              pastShows.map((show) => (
                <ShowCard key={show._id} show={show} isPastShow />
              ))
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Shows
