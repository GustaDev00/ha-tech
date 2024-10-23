import { LazyImage } from "@/components/atoms/lazy-image";
import { Slider } from "@/components/molecules/slider";
import { DescriptionWhiteSmall, TitleWhiteBig } from "@/styles/components/content";

import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled, { keyframes } from "styled-components";

export const Gallery = styled.section<{ $bg: string }>`
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    background: url(${({ $bg }) => $bg}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    padding-top: 10rem;
    padding-bottom: 10rem;
  `}
`;

export const Title = styled.h2`
  text-align: center;

  ${TitleWhiteBig}
`;

export const Subtitle = styled.p`
  text-align: center;

  ${DescriptionWhiteSmall}

  margin: 2rem 0 5.1rem;
`;

export const Slide = styled(Slider)`
  width: 80rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

const moveDiagonal = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Brush = styled(LazyImage)`
  width: 58rem;
  height: 58rem;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 20rem;
  z-index: 2;
  animation: ${moveDiagonal} 5s ease-in-out infinite;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    display: none;
  `}
`;
