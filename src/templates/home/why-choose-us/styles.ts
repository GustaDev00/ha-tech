import { Article as _Article } from "@/components/atoms/article";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { DescriptionGraySmall, TitleBlackSmall } from "@/styles/components/content";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const WhyChooseUs = styled.section``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Article = styled(_Article)`
  padding-bottom: 5.3rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 6.3rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const List = styled.ul`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7.7rem 1.8rem;

  ${mediaMaxWidth("mobile")`
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;

    &::after {
      position: absolute;
      content: "";
      bottom: -3.5rem;
      display: block;
      width: 100%;
      height: 0.1rem;
      background: rgba(0, 0, 0, 0.15);
    }

    
  `}
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const Icon = styled(LazyImage)``;

export const Title = styled.h3`
  ${TitleBlackSmall}
`;

export const Text = styled.p`
  ${DescriptionGraySmall}
`;

export const Img = styled(LazyImage)`
  width: 36.8rem;
  height: 49.1rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;
