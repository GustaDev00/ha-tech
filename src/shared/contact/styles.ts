import styled, { css } from "styled-components";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { TitleBlackBig } from "@/styles/components/content";

export const Contact = styled.section`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #085785;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.4rem;
  letter-spacing: -0.0911px;
`;

export const Title = styled.h2`
  position: relative;

  ${TitleBlackBig}

  padding: 3.2rem 0;

  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2.9rem;
  margin-top: 4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  width: 80%;

  iframe {
    width: 63.1rem;
    height: 59.4rem;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;

    iframe {
      width: 100%;
      height: 59.4rem;
    }
  `}

  ${mediaMaxWidth("mobile")`
      width: 100%;

      iframe {
        width: 100%;
        height: 49.4rem;
      }
  `}
`;

export const Form = styled.form`
  width: 100%;
  padding: 3.2rem 2.9rem;
  background: ${({ theme }) => theme.white};
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.black005};
  box-shadow: 0rem 0.8rem 2.4rem 0rem ${({ theme }) => theme.black008};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "name phone email"
    "message message message"
    "button button button"
    "list list list";
  gap: 1.6rem;
  align-items: center;
  justify-items: start;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  `}
`;

export const Label = styled.label<{ $error: boolean; $gridName: string }>`
  grid-area: ${({ $gridName }) => $gridName};
  width: 100%;
  color: ${({ theme }) => theme.black};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 130%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  ${({ $error, theme }) =>
    $error &&
    `
    color: ${theme.carnelian};

    input, textarea {
      border-color: ${theme.carnelian};
      color: ${theme.carnelian};

      &::placeholder {
        color: ${theme.carnelian};
      }
    }
  `}
`;

export const TextInput = styled.p``;

export const Input = styled.input`
  background: ${({ theme }) => theme.antiFlashWhite};
  padding: 2.1rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;

  &::placeholder {
    color: ${({ theme }) => theme.oldSilver};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const TextArea = styled.textarea`
  height: 13rem;
  resize: none;
  background: ${({ theme }) => theme.antiFlashWhite};
  padding: 2.1rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;

  &::placeholder {
    color: ${({ theme }) => theme.oldSilver};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const Button = styled(ButtonSwipe)`
  grid-area: button;
  width: fit-content;
  margin: 3rem 0;

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

  ${mediaMaxWidth("mobile")`
    margin-top: 2.4rem;
  `}
`;

export const List = styled.ul`
  grid-area: list;
  border-radius: 1.4rem;
  border: 0.1rem solid rgba(10, 114, 173, 0.2);
  background: #fff;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 3.5rem;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  color: #0a72ad;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 3.4rem;
  letter-spacing: -0.0911rem;
  gap: 0.8rem;

  svg {
    width: 2rem;
    height: 1.5rem;
  }
`;

export const Link = styled.a`
  font-weight: 400;
  text-decoration: underline;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.platinum};
  background: ${({ theme }) => theme.white};
  width: 44.5rem;
  box-shadow: 0rem 0rem 0.2rem 0rem ${({ theme }) => theme.black012},
    0rem 2rem 2rem 0rem ${({ theme }) => theme.black008};

  ${mediaMaxWidth("mobile")`
    width: 95%;

    h2 {
      line-height: 120%;
    }

    p {
      margin-top: 1rem;

      br {
        display: none;
      }
    }
  `}
`;

export const WrapperModal = styled.div`
  padding: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--inter);
`;

export const IconModal = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.2rem;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='49' height='48' viewBox='0 0 49 48' fill='none'%3E%3Cpath d='M24.5 44C30.0228 44 35.0228 41.7614 38.6421 38.1421C42.2614 34.5228 44.5 29.5228 44.5 24C44.5 18.4772 42.2614 13.4772 38.6421 9.85786C35.0228 6.23858 30.0228 4 24.5 4C18.9772 4 13.9772 6.23858 10.3579 9.85786C6.73858 13.4772 4.5 18.4772 4.5 24C4.5 29.5228 6.73858 34.5228 10.3579 38.1421C13.9772 41.7614 18.9772 44 24.5 44Z' fill='white' stroke='%232ECC71' stroke-width='4' stroke-linejoin='round'/%3E%3Cpath d='M16.5 24L22.5 30L34.5 18' stroke='%232ECC71' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
      no-repeat;
    background-size: cover;
  }
`;

export const TitleModal = styled.h2`
  color: ${({ theme }) => theme.eerieBlack};
  font-family: var(--inter);
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`;

export const TextModal = styled.p`
  display: block;
  color: rgba(84, 89, 94, 0.6);
  text-align: center;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 157.143%;
`;

export const ButtonModal = styled.button`
  margin-top: 2.2rem;
  color: ${({ theme }) => theme.cultured};
  font-size: 1.6rem;
  font-weight: 500;
  background: ${({ theme }) => theme.green};
  width: 85%;
  border-radius: 0.8rem;
  padding: 0.8rem 2rem;
`;

export const Blackout = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black025};
`;

export const Modal = styled.div<{ $active: boolean; $error: boolean }>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.4s ease, opacity 0.4s ease;

  ${({ $active }) =>
    $active &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  ${({ $error, theme }) =>
    !$error &&
    css`
      ${IconModal} {
        &::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='47' height='47' viewBox='0 0 47 47' fill='none'%3E%3Cpath d='M23.5 0C10.528 0 0 10.528 0 23.5C0 36.472 10.528 47 23.5 47C36.472 47 47 36.472 47 23.5C47 10.528 36.472 0 23.5 0ZM25.85 35.25H21.15V30.55H25.85V35.25ZM25.85 25.85H21.15V11.75H25.85V25.85Z' fill='%23E74C3C'/%3E%3C/svg%3E");
        }
      }

      ${TextModal} {
        display: none;
      }

      ${ButtonModal} {
        background: ${theme.redForm};
      }
    `}

  z-index: 10;
`;
