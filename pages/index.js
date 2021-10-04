import React from "react";

import Head from "next/head";

import { SectionBody, Header } from "@/organisms";
import Intro from "@/templates/Intro";

import { SECTIONS_DATA_DIR, SECTIONS_DIR } from "@/paths";

import sectionsMap from "constants/sections-map.json";
import About from "@/templates/About";
import Events from "@/templates/Events";
import Blog from "@/templates/Blog";
import Slider from "react-slick";
import SimpleSlider from "@/templates/sliderTest";

const Home = () => {
  return (
    <div className="w-full bg-black">
      <Head>
        <title>Cyber-Trace</title>
      </Head>
      <Header sections={sectionsMap.map(({ name }) => name)} />
      <main className="max-w-screen-2xl	 mx-auto grid gap-20">
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
        {/* <SectionBody key={5} name={"About"} title={"Who are we ?"} page={"#"}>
          <About data={require(`../${SECTIONS_DATA_DIR}/${"About"}.json`)} />
        </SectionBody> */}
        <SectionBody key={5} name={"Events"} title={"Our community"} page={"#"}>
          <Events data={require(`../${SECTIONS_DATA_DIR}/${"Events"}.json`)} />
        </SectionBody>
        <SectionBody key={5} name={"Blog"} title={"Top Articles"} page={"#"}>
          <Blog data={require(`../${SECTIONS_DATA_DIR}/${"Blog"}.json`)} />
        </SectionBody>
      </main>
      {/* <SimpleSlider /> */}
    </div>
  );
};

export default Home;
