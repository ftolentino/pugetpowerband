import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="flex flex-col items-center my-4">
          <h1 className="text-center text-5xl font-bold tracking-wider md:text-9xl text-indigo-400">PUGET POWER</h1>
        </div>
        <div>
          <StaticImage
            src="../imgs/PPwedding.jpg" 
            alt="PPWeddingPhoto"
            layout="fullWidth"
            loading="eager"
            />
        </div>
      </section>
    </Layout>
  );
}
 