import React from 'react';
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function about() {
  return (
    <Layout>
      <div className='h-screen bg-aqua-teal flex items-center xl:justify-center'>
        <p className='m-5 text-lg text-yellow-100'>Puget Power is a dynamic rock and roll band featuring Dave Samuel(Guitar/Vocals), Barry O'Hara(Guitar/Bass/Vocals), Clinton Fink(Drums), Filmer Tolentino(Guitar/Bass/Vocals), and Clarke Hurlbut(Keys/Vocals).</p>
        <StaticImage
          className='m-6'
          src="../imgs/album art.jpg"
          alt="album art bird monster"
          placeholder='blurred'
          layout="constrained"
          width={900}
          />
      </div>
    </Layout>
  )
}
