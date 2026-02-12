'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is caught by this file, including `/studio`.
 */

import dynamic from 'next/dynamic'

const Studio = dynamic(() => import('./Studio'), { ssr: false })

export default function StudioPage() {
  return <Studio />
}
