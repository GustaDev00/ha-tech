import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Maps = styled.section`
  background: url("/imgs/kontakt/maps/bg.png") no-repeat center center;
  background-size: cover;

  ${mediaMaxWidth("mobile")`
    background: url("/imgs/kontakt/maps/mobile/bg.png") no-repeat center center;
    background-size: cover;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    padding-top: 6.4rem;
    padding-bottom: 6.4rem;

    picture {
      width: 100%;
    }
  `}
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  padding: 0.2rem;
  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 0.1rem 1.6rem 0rem ${({ theme }) => theme.black12};
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 100%;
    height: 58.2rem;
  }

  ${mediaMaxWidth("mobile")`
    width: 100%;

    iframe{
      width: 100%;
    }
      
  `}
`;

export const Img = styled(LazyImage)`
  height: 59.4rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 40.2rem;
  `}
`;
