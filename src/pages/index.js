import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="flex flex-col items-center">
          <h1 className="text-9xl">Puget Power</h1>
          <StaticImage 
            src="../imgs/PPwedding.jpg" 
            alt="PPWeddingPhoto"
            loading="eager"
            />
        </div>
      </section>
    </Layout>
  );
}
 