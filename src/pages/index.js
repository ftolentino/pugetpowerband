import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center mx-2 md:h-auto">
        <div className="flex flex-col items-center mx-4 my-8">
          <h1 className="text-center text-8xl font-bold tracking-wider md:text-9xl text-indigo-400">PUGET POWER</h1>
        </div>
        <div>
          <StaticImage
            src="../imgs/PPwedding.jpg" 
            alt="PPWeddingPhoto"
            layout="constrained"
            width={1200}
            height={900}
            loading="eager"
            />
        </div>
      </section>
    </Layout>
  );
}
 