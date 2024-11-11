import { ButtonTransparent } from "@/components/atoms/button-transparent";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Service = styled.section``;

export const Wrapper = styled(_Wrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9.6rem;

  ${mediaMaxWidth("mobile")`
    gap: 2.8rem;
    grid-template-columns: 1fr;
  `}
`;

export const Bg = styled(LazyImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${mediaMaxWidth("mobile")`
    object-fit: cover;
    border-radius: 0.4rem;
  `}
`;

export const List = styled.ul`
  margin: 2.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.li`
  color: #ececec;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 140%;
  list-style-type: disc;
  margin-left: 3rem;
`;

export const Button = styled(ButtonTransparent)`
  border-radius: 50rem;
`;

export const Hidden = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 4.8rem);
  padding: 4.8rem;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  height: 20rem;
  bottom: -16rem;
  left: 4.8rem;
  transition: bottom 0.4s ease;
`;

export const Services = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    border-radius: 0.4rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0c4261 0%, #042335 100%);
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.4s ease,
      visibility 0.4s ease;
  }

  &:first-child {
    ${Container} {
      bottom: -22rem;
    }
  }

  &:nth-child(2) {
    ${Container} {
      bottom: -17rem;
    }
  }

  &:nth-child(3) {
    ${Container} {
      bottom: -25rem;
    }
  }

  &:last-child {
    ${Container} {
      bottom: -22.1rem;
    }
  }

  ${mediaMaxWidth("mobile")`
    height: 48.4rem;
    &:first-child {
      ${Container} {
        bottom: -25rem;
      }
    }

    &:nth-child(2) {
      ${Container} {
        bottom: -20rem;
      }
    }

    &:nth-child(3) {
      ${Container} {
        bottom: -25rem;
      }
    }

    &:last-child {
      ${Container} {
        bottom: -24.6rem;
      }
    }
  `}

  &:hover {
    ${Container} {
      bottom: 0;
    }

    &::before {
      opacity: 0.5;
      visibility: visible;
    }
  }
`;

export const Article = styled.article``;

export const Title = styled.h2`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  line-height: 130%;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
  `}
`;

export const Icon = styled(LazyImage)`
  width: 4.1rem;
  height: 4.1rem;
  object-fit: contain;
  filter: brightness(0) invert(1);
  margin-bottom: 2.4rem;
`;
