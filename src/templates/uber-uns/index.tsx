"use client";

import { type FC } from "react";
import { Header } from "@/components/organisms/header";
import C from "@/constants";
import Content from "./content";
import Team from "./team";
import Info from "./info";
import CtaBanner from "./cta-banner";

export const UberUnsTemplate: FC = () => {
  return (
    <>
      <Header {...C.banner.about} />
      <Info />
      <Team />
      <Content />
      <CtaBanner />
    </>
  );
};
