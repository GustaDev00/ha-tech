import { styled } from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { DescriptionWhiteSmall } from "@/styles/components/content";

export const Cta = styled.section`
  position: relative;
  overflow: hidden;
  height: 39.6rem;
  border-radius: 0.8rem;
  margin: 5rem 0;

  ${mediaMaxWidth("mobile")`
    width: calc(100% - 3.6rem);
    margin: 5rem auto;
    height: auto;
  `}
`;

export const Bg = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    border-radius: 0.8rem;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  padding-top: 8.4rem;
  align-items: flex-start;
  gap: 10rem;

  ${mediaMaxWidth("mobile")`
    gap: 2.2rem;
    padding: 10rem 1.2rem 10rem 2.2rem;
  `}
`;

export const Article = styled.article``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.white};
  letter-spacing: normal;
  font-size: 4.2rem;
  font-weight: 800;
  line-height: 6.2rem;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  color: #edf1f4;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.8rem;
`;

export const Button = styled(ButtonSwipe)`
  padding: 2rem 6rem;
  margin-top: 20px;
  background: #fff;
  color: #0a72ad;
  font-weight: 400;

  svg {
    path {
      stroke: #0a72ad;
    }
  }

  ${mediaMaxWidth("mobile")`
    padding: 2rem 4rem;
  `}
`;

export const Circle = styled.div`
  position: absolute;
  width: 64.9rem;
  height: 64.9rem;
  border-radius: 50%;
  background: #063b59;
  right: -20rem;
  top: 3.45rem;

  ${mediaMaxWidth("mobile")`
    width: 28.4rem;
    height: 28.4rem;
    top: unset;
    bottom: -8rem;
    right: -10rem;
  `}
`;
