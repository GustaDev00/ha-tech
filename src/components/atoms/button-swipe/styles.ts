import styled, { css } from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";
import { MediumArrowRight } from "@/components/svgs/medium-arrow-right";

const swipeStyles = css`
  position: relative;
  width: fit-content;
  cursor: pointer;
  padding: 2rem 4rem;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  border-radius: 5rem;
  background: ${({ theme }) => theme.primary};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    right: 0;
    transition: right 0.4s ease;
  }

  svg {
    width: 2rem;
    position: absolute;
    right: 2.4rem;
    margin-top: 0.3rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease;
  }

  &:hover {
    span {
      position: relative;
      right: 1rem;
    }

    svg {
      position: absolute;
      margin-top: 0.4rem;
      opacity: 1;
      visibility: visible;
    }
  }

  ${mediaMaxWidth("mobile")`
    padding: 1.7rem 4rem;
  `}
`;

export const Icon = styled(MediumArrowRight)``;

export const Text = styled.span``;

export const ButtonSwipe = styled.button`
  ${swipeStyles}
`;

export const LinkSwipe = styled.a`
  ${swipeStyles}
`;
