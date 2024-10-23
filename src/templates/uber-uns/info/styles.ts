import { DescriptionBlueSmall, TitleSmallBlue } from "@/styles/components/content";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const AboutUsContainer = styled.section`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  gap: 10.4rem;
  align-items: flex-start;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
  background: #fff;
  padding: 4.8rem 2.2rem;
  box-shadow: 0 1.2rem 1.6rem 0 rgba(12, 66, 97, 0.08);
  display: flex;
  gap: 10.1rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    padding: 5.4rem 0 5.4rem 6.4rem;
  `}
`;

export const Article = styled.article`
  position: relative;
  display: block;
  height: 100%;

  &:not(:last-child)::before {
    position: absolute;
    right: -5rem;
    content: "";
    display: block;
    height: 17.6rem;
    width: 0.1rem;
    background: rgba(0, 0, 0, 0.25);

    ${mediaMaxWidth("mobile")`
      width: 17.6rem;
      height: 0.1rem;
      right: unset;
      left: 1rem;
      bottom: -5rem;
    `}
  }
`;

export const Title = styled.h2`
  ${TitleSmallBlue}
`;

export const Text = styled.p`
  ${DescriptionBlueSmall}

  margin-top: 1rem;
`;
