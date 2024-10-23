import styled from "styled-components";
import { ButtonTransparent } from "@/components/atoms/button-transparent";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { DescriptionBlackSmall, TitleBlackBig, TitleSmallWhite } from "@/styles/components/content";
import { Article as _Article } from "@/components/atoms/article";

export const Services = styled.section``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Article = styled(_Article)``;

export const Container = styled.div`
  position: relative;
  margin-top: 3.8rem;
  display: flex;
  gap: 2.3rem;
  flex-direction: row-reverse;
  padding-bottom: 4.7rem;

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
    flex-direction: column-reverse;
  `}
`;

export const ImgSmall = styled(LazyImage)`
  width: 100%;
  height: 33.9rem;
  object-fit: cover;
`;

export const ImgBig = styled(LazyImage)`
  width: 71.7rem;
  height: 33.9rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 51.7rem;
  `}
`;

export const Slide = styled.div`
  width: 44rem;
  position: absolute;
  bottom: 7.4rem;
  left: 3.8rem;
  background: ${({ theme }) => theme.primary};
  padding: 3.8rem 0.2rem 3.8rem 3.2rem;

  ${mediaMaxWidth("mobile")`
    padding: 2rem 0.2rem 2rem 2rem;
    width: 90%;
    bottom: unset;
    top: 49rem;
    left: 1.8rem;
    transform: translateY(-100%);
  `}
`;

export const ContainerSlide = styled.div<{ $active: boolean }>`
  display: flex;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  gap: 2.7rem;
  align-items: center;
  transition: opacity 0.6s ease, visibility 0.6s ease;

  &:not(:last-child) {
    position: absolute;
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  `}
`;

export const IconContainer = styled.div`
  width: 11.4rem;
  height: 11.4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaMaxWidth("mobile")`
    width: 6rem;
    height: 6rem;
  `}
`;

export const Icon = styled(LazyImage)`
  width: 4.8rem;
  height: 4.8rem;
  object-fit: contain;

  ${mediaMaxWidth("mobile")`
    width: 2.5rem;
    height: 2.5rem;
  `}
`;

export const Content = styled.div``;

export const TitleSlide = styled.h3`
  ${TitleSmallWhite}
`;

export const Dots = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.4rem;
`;

export const Dot = styled.div<{ $active: boolean }>`
  border-radius: 0.8rem;
  width: 1.9rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.white};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: opacity 0.4s ease;
`;

export const Button = styled(ButtonTransparent)`
  margin: 2.7rem 0;
`;
