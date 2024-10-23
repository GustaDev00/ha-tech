import styled from "styled-components";
import _Link from "next/link";

export const Button = styled(_Link)`
  position: relative;
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 3.4rem;
  border: 0.1rem solid ${({ theme }) => theme.white};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.white02};
  color: ${({ theme }) => theme.white};
  transition: background 0.4s ease, color 0.4s ease;

  &:hover {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.eerieBlack};
  }
`;

export const Text = styled.span`
  position: relative;
  right: 0;
  transition: right 0.4s ease;
`;
