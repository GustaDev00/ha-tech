import { DescriptionBlackSmall, TitleBlackBig } from "@/styles/components/content";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";
import { LazyImage } from "../lazy-image";

export const Article = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding-bottom: 3.8rem;

  &::after {
    position: absolute;
    content: "";
    bottom: 0rem;
    display: block;
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.15);
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;

    picture {
      order: -1;
    }
  `}
`;

export const Title = styled.h2`
  ${TitleBlackBig}
`;

export const Description = styled.p`
  ${DescriptionBlackSmall}
  opacity: 0.65;
`;

export const Quality = styled(LazyImage)`
  width: 9.5rem;
  height: 9.6rem;
  object-fit: contain;

  ${mediaMaxWidth("mobile")`
    order: -1;
  `}
`;
