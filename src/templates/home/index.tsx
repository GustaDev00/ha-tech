"use client";

import { type FC } from "react";
import Header from "./header";
import Services from "./services";
import AboutUs from "./about-us";
import WhyChooseUs from "./why-choose-us";
import Contact from "@/shared/contact";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <Contact />
    </>
  );
};
