import { styled } from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { Article as _Article } from "@/components/atoms/article";
import { WifiIcon } from "@/components/svgs/wifi";

export const TeamContainer = styled.div``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Article = styled(_Article)`
  width: 100%;
  align-items: flex-end;

  &::after {
    display: none;
  }

  ${mediaMaxWidth("mobile")`
    align-items: flex-start;

    &::after {
      display: block;
    }
  `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5.6rem;

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
    margin-top: 5.2rem;
    flex-direction: column;
  `}
`;

export const Person = styled.div``;

export const Shadow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  top: 0.1rem;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0.8rem;
  background: linear-gradient(180deg, rgba(10, 114, 173, 0) 38.5%, #0a72ad 100%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  z-index: 1;
`;

export const Icon = styled(WifiIcon)`
  width: 5.2rem;
  height: 5.2rem;
  margin: 1.6rem;
  path {
    fill: white;
  }
`;

export const Team = styled.div`
  position: relative;
  overflow: hidden;

  &:hover {
    ${Shadow} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Image = styled(LazyImage)`
  width: 100%;
  height: 34.7rem;
  object-fit: cover;
  border-radius: 0.8rem;
  border: 0.1rem solid rgba(12, 66, 97, 0.15);
`;

export const Name = styled.h3`
  color: #0c4261;
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 4.1rem;
`;

export const Position = styled.p`
  color: #566066;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  margin: 1rem 0;
`;

export const Signature = styled(LazyImage)`
  height: 5.8rem;
  object-fit: contain;
`;
