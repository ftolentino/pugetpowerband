import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-9xl text-neutral-50">Puget Power</h1>
          <StaticImage 
            className="my-8"
            src="../imgs/PPwedding.jpg" 
            alt="PPWeddingPhoto"
            width={1800}
            loading="eager"
            />
        </div>
      </section>
    </Layout>
  );
}
 