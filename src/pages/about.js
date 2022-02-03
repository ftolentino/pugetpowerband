import React from 'react';
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function about() {
  return (
    <Layout>
      <div className='flex flex-row items-center'>
        <p className='m-5'>Puget Power is a dynamic rock and roll band featuring Dave Samuel, Barry O'Hara, Clinton Fink, Filmer Tolentino, and Clarke Hurlbut.</p>
        <StaticImage
          className='m-6'
          src="../imgs/album art.jpg"
          alt="album art bird monster"
          width={800}
          layout="constrained"
          />
      </div>
    </Layout>
  )
}
