import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { DescriptionWhiteSmall, TitleWhiteBig } from "@/styles/components/content";
import { Slider as _Slider } from "@/components/molecules/slider";
import { mediaMaxWidth } from "@/utils/media-query";
import { Mail } from "@/components/svgs/mail";

export const Header = styled.section`
  position: relative;
  height: 92vh;

  @supports (-webkit-touch-callout: none) {
    height: 92svh;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: auto;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  height: 100%;
  padding-bottom: 19rem;
  align-items: center;
  gap: 4rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    gap: 10rem;
    padding-top: 24rem;
  `}

  ${mediaMaxWidth("mobile")`
    gap: 6.2rem;
    padding-top: 8rem;
    padding-bottom: 4rem;
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

export const Background = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 94%;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    object-position: -80rem -10rem;
  `}
`;

export const Title = styled.h1`
  ${TitleWhiteBig}
`;

export const Subtitle = styled.p`
  ${DescriptionWhiteSmall}
`;

export const Button = styled(ButtonSwipe)``;

export const Slider = styled(_Slider)``;

export const Deals = styled.div`
  width: 100%;
  height: 12.2rem;
  position: absolute;
  bottom: 0;
  padding: 2rem 16.3rem;
  background: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1.2rem 1.6rem 0 rgba(12, 66, 97, 0.08);
  z-index: 2;

  ${mediaMaxWidth("desktop1024")`
    padding: 2rem 11rem;
  `}

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 3.5rem 4rem;
  `}

  ${mediaMaxWidth("mobile")`
    height: auto;
    padding: 2rem 2.2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`;

export const Text = styled.p`
  position: relative;
  color: ${({ theme }) => theme.darkCharcoal};
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3rem;
  letter-spacing: -0.1316rem;
  padding-right: 3.6rem;

  &::before {
    position: absolute;
    right: 0;
    content: "";
    display: block;
    width: 0.1rem;
    height: 100%;
    background: ${({ theme }) => theme.black015};
  }

  ${mediaMaxWidth("mobile")`
    padding: 0rem;
    padding-bottom: 2.2rem;
    margin: 0;
    text-align: center;

    &::before {
      width: 100%;
      height: 0.1rem;
      bottom: 0;
  `}
`;

export const Container = styled.div`
  width: 40%;
  position: absolute;
  bottom: 11.23rem;
  right: 0;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 50%;
  `}

  ${mediaMaxWidth("mobile")`
    position: unset;
    width: 100%;
    height: 14rem;
  `}
`;

export const Hero = styled(LazyImage)`
  height: 53.4rem;

  ${mediaMaxWidth("desktop1024")`
    height: 60rem;
  `}

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Contact = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0.9rem;
  left: 30%;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 2.3rem;
  padding: 3rem 2.9rem;

  ${mediaMaxWidth("mobile")`
    left: 0;
    bottom: 0;
  `}
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

export const TextContact = styled.p`
  color: #aee1ff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 242.857%;
  letter-spacing: -0.0708rem;
`;

export const LinkContact = styled.a`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.4rem;
  letter-spacing: -0.0911rem;
  transition: opacity 0.4s ease;

  &:last-child {
    text-decoration: underline;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  background: ${({ theme }) => theme.white};
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MailIcon = styled(Mail)`
  width: 3.1rem;
  height: 3.1rem;
`;

export const Img = styled(LazyImage)<{ $css: string }>`
  margin-left: 4.2rem;

  ${({ $css }) => $css}

  ${mediaMaxWidth("mobile")`
    margin-left: 0;
    margin-top: 2.2rem;
  `}
`;
