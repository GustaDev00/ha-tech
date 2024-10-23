import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Slide = styled.div`
  width: 100%;
  position: relative;
  margin: auto;

  .swiper-wrapper {
    width: 70rem;
    left: -18rem;
  }

  .swiper-slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: scale(0.9) !important;
  }

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1) !important;
    right: 2.7rem;

    ${mediaMaxWidth("mobile")`
      right: 1.5rem;
    `}
  }

  .swiper-slide-next,
  .swiper-slide-prev {
    border-radius: 1.2rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 4.8rem;
    height: 4.8rem;

    &::after {
      display: none;
    }

    &::before {
      display: block;
      content: "";
      width: 4.8rem;
      height: 4.8rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72' fill='none'%3E%3Cg filter='url(%23filter0_d_2438_978)'%3E%3Ccircle cx='36' cy='26' r='24' transform='rotate(90 36 26)' fill='white'/%3E%3Cpath d='M31.664 15L29 17.585L37.6532 26L29 34.415L31.664 37L43 26L31.664 15Z' fill='%230A72AD'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_2438_978' x='0' y='0' width='72' height='72' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='10'/%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2438_978'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2438_978' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
      background-size: cover;
    }
  }

  .swiper-button-prev::before {
    transform: rotate(180deg) translateY(20%);
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 90%;

    .swiper-wrapper {
      width: 100%;
      left: -18rem;
    }
  `}

  ${mediaMaxWidth("mobile")`
    width: 100%;

    .swiper-wrapper {
      width: 100%;
      left: -6.7rem;
    }
  `}
`;

export const Container = styled.div`
  border-radius: 0.4rem;
`;

export const Img = styled(LazyImage)`
  width: 68.2rem;
  height: 47.6rem;
  object-fit: contain;
  border-radius: 1.2rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 70.4rem;
    height: 57.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    width: 27.4rem;
    height: 38.8rem;
  `}
`;

export const Content = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 10rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 3;

  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 600;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    bottom: 4rem;
    left: 18rem;
    gap: 3rem;

    font-size: 2rem;
  `}

  ${mediaMaxWidth("mobile")`
    bottom: 3rem;
    left: 6rem;
    gap: 1.5rem;

    font-size: 1.6rem;
  `}
`;

export const Total = styled.p``;

export const Current = styled.p``;

export const Line = styled.div`
  width: 4.9rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.gray};
`;

export const Arrow = styled.div`
  cursor: pointer;
  width: 1.3rem;
  height: 1.9rem;

  &::before {
    content: "";
    display: block;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='15' viewBox='0 0 9 15' fill='none'%3E%3Cpath d='M3.35885 1.4807L8.37983 6.72545C8.50104 6.85599 8.56165 7.0075 8.56165 7.18C8.56165 7.35249 8.50104 7.50401 8.37983 7.63454L3.35885 12.8793C3.22832 13.0098 3.07214 13.0774 2.89032 13.0821C2.7085 13.0868 2.55232 13.0262 2.42179 12.9003C2.29125 12.7744 2.22365 12.6206 2.21899 12.4387C2.21433 12.2569 2.27727 12.1007 2.4078 11.9702L6.99521 7.18699L2.4078 2.38979C2.27727 2.25925 2.21433 2.10307 2.21899 1.92126C2.22365 1.73944 2.29125 1.58559 2.42179 1.45972C2.55232 1.33384 2.7085 1.27324 2.89032 1.2779C3.07214 1.28256 3.22832 1.35016 3.35885 1.4807Z' fill='white'/%3E%3C/svg%3E")
      no-repeat center;
    background-size: contain;
    width: 1.3rem;
    height: 1.9rem;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 2.1rem;
    height: 2.7rem;

    &::before {
      width: 2.1rem;
      height: 2.7rem;
    }
  `}

  ${mediaMaxWidth("mobile")`
    width: 1.1rem;
    height: 1.5rem;

    &::before {
      width: 1.1rem;
      height: 1.5rem;
    }
  `}
`;

export const Prev = styled(Arrow)`
  transform: rotate(180deg);
`;

export const Next = styled(Arrow)`
  margin-left: 2rem;
`;
