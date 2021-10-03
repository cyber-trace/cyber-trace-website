import React from "react";

import Head from "next/head";

import { SectionBody, Header } from "@/organisms";
import Intro from "@/templates/Intro";

import { SECTIONS_DATA_DIR, SECTIONS_DIR } from "@/paths";

import sectionsMap from "constants/sections-map.json";

const Home = () => {
  return (
    <div className="w-full bg-black">
      <Head>
        <title>Cyber-Trace</title>
      </Head>
      <Header sections={sectionsMap.map(({ name }) => name)} />
      <main className="max-w-screen-2xl	 mx-auto grid gap-20">
        <Intro />
        {sectionsMap.map(({ name, title, page }) => {
          const SectionContent =
            require(`../${SECTIONS_DIR}/${name}.js`).default;
          return (
            <SectionBody key={name} name={name} title={title} page={page}>
              <SectionContent
                data={require(`../${SECTIONS_DATA_DIR}/${name}.json`)}
              />
            </SectionBody>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
