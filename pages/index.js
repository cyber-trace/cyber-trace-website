import React from "react";

import Head from "next/head";

import { SectionBody, Header } from "@/organisms";
import Intro from "@/templates/Intro";

import { SECTIONS_DATA_DIR, SECTIONS_DIR } from "@/paths";

import sectionsMap from "constants/sections-map.json";
import About from "@/templates/About";
import Events from "@/templates/Events";
import Blog from "@/templates/Blog";
import Teams from "@/templates/Teams";
import Slider from "react-slick";
import SimpleSlider from "@/templates/sliderTest";
import { SectionHeader } from "@/molecules";
import { Button } from "@/atoms";

const Home = () => {
  return (
    <div className="w-full bg-black">
      <Head>
        <title>Cyber-Trace</title>
      </Head>
      <Header sections={sectionsMap.map(({ name }) => name)} />
      <main className="max-w-screen-2xl	 mx-auto flex flex-col gap-20">
        <Intro />
        {/* {sectionsMap.map(({ name, title, page }) => {
          const SectionContent =
            require(`../${SECTIONS_DIR}/${name}.js`).default;
          return (
            <SectionBody key={name} name={name} title={title} page={page}>
              <SectionContent
                data={require(`../${SECTIONS_DATA_DIR}/${name}.json`)}
              />
            </SectionBody>
          );
        })} */}
        <SectionBody
          key={"About"}
          name={"About"}
          title={"Who are we ?"}
          page={"#"}
        >
          <About data={require(`../${SECTIONS_DATA_DIR}/${"About"}.json`)} />
        </SectionBody>
        <SectionBody
          key={"Events"}
          name={"Events"}
          title={"Our community"}
          page={"#"}
        >
          <Events data={require(`../${SECTIONS_DATA_DIR}/${"Events"}.json`)} />
        </SectionBody>
        <SectionBody
          key={"Blog"}
          name={"Blog"}
          title={"Top Articles"}
          page={"#"}
        >
          <Blog data={require(`../${SECTIONS_DATA_DIR}/${"Blog"}.json`)} />
        </SectionBody>
      </main>
      <SectionBody
        key={"Teams"}
        name={"Teams"}
        title={"departement"}
        page={"#"}
      >
        <Teams data={require(`../${SECTIONS_DATA_DIR}/${"Teams"}.json`)} />
      </SectionBody>
    </div>
  );
};

export default Home;
