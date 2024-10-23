"use client";

import { type FC } from "react";
import { Header } from "@/components/organisms/header";
import C from "@/constants";
import Services from "./services";
import Gallery from "@/shared/gallery";

export const DienstleistungenTemplate: FC = () => {
  return (
    <>
      <Header {...C.banner.services} />
      <Services />
      <Gallery />
    </>
  );
};
