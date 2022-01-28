import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="flex flex-col items-center">
          <h1 className="font-bold tracking-wider text-9xl text-indigo-400">PUGET POWER</h1>
        </div>
        <div className="flex flex-col items-center bg-red-300">
          <StaticImage 
            className="my-8"
            src="../imgs/PPwedding.jpg" 
            alt="PPWeddingPhoto"
            width={1600}
            loading="eager"
            />
        </div>
      </section>
    </Layout>
  );
}
 