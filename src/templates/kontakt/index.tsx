"use client";

import { type FC } from "react";
import C from "@/constants";
import { Header } from "@/components/organisms/header";
import Contact from "@/shared/contact";
import Maps from "./maps";
import Gallery from "@/shared/gallery";

export const KontaktTemplate: FC = () => {
  const { contact } = C.banner;
  return (
    <>
      <Header {...contact} />
      <Contact />
      <Maps />
      <Gallery />
    </>
  );
};
