/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is caught by this file, including `/studio`.
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
