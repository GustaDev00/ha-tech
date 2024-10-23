import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import {
  DescriptionBlueWhiteBig,
  DescriptionGrayBig,
  TitleDarkBig,
  TitleWhiteExtraBig,
} from "@/styles/components/content";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const AboutUs = styled.section``;

export const Wrapper = styled(_Wrapper)`
  gap: 9.5rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: row;
  `}

  ${mediaMaxWidth("mobile")`
    padding-top: 0;
    flex-direction: column;
    gap: 4.4rem;
  `}
`;

export const Container = styled.div`
  position: relative;
  width: 60%;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const Bg = styled(LazyImage)`
  position: absolute;
  top: -1.9rem;
  right: -4.5rem;
  width: 12.4rem;
  height: 12.4rem;
  object-fit: contain;
  z-index: 1;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Img = styled(LazyImage)`
  position: relative;
  width: 100%;
  height: 56.8rem;
  object-fit: cover;
  z-index: 2;
`;

export const Project = styled.div`
  position: absolute;
  bottom: 0.2rem;
  left: 0;
  background: ${({ theme }) => theme.primary};
  padding: 2rem 3.9rem;
  z-index: 2;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const TitleProject = styled.h3`
  ${TitleWhiteExtraBig}
`;

export const DescriptionProject = styled.p`
  ${DescriptionBlueWhiteBig}
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  ${TitleDarkBig}
`;

export const Description = styled.p`
  ${DescriptionGrayBig}
  margin-top: 2rem;
`;

export const Icon = styled(LazyImage)`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`;

export const List = styled.ul`
  margin: 3.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const Item = styled.li`
  min-width: 28rem;
  width: fit-content;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.4rem;
  border-radius: 3.2rem;
  border: 0.1rem solid rgba(10, 114, 173, 0.5);
`;

export const Span = styled.span`
  color: #131523;
  text-align: center;
  font-family: var(--poppins);
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Button = styled(ButtonSwipe)``;
