import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  return (
    <Layout>
      <section className="h-screen">
        <div className="flex flex-col items-center my-4">
          <h1 className="sm:text-center font-bold tracking-wider text-9xl text-indigo-400">PUGET POWER</h1>
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
 