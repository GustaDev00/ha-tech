import { LazyImage } from "@/components/atoms/lazy-image";
import { DescriptionGrayMedium, TitleDarkBig } from "@/styles/components/content";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const AboutUsContainer = styled.section`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 8.9rem;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  &:last-child {
    flex-direction: row-reverse;

    &::after {
      position: absolute;
      content: "";
      top: -4.5rem;
      display: block;
      width: 100%;
      height: 0.1rem;
      background: rgba(0, 0, 0, 0.15);
    }
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;

    &:last-child {
      flex-direction: column;
    }

    picture {
      width: 100%;
    }
  `}
`;

export const Image = styled(LazyImage)`
  width: 42.8rem;
  height: 48.8rem;
  border-radius: 0.8rem;
  object-fit: cover;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.6rem 1.8rem 0 rgba(7, 59, 77, 0.1);

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 30.8rem;
  `}
`;

export const Article = styled.article`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  ${TitleDarkBig}
`;

export const Text = styled.p`
  ${DescriptionGrayMedium}
`;
