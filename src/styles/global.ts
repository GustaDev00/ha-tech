import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { mediaMaxWidth, viewportsBase } from "@/utils/media-query";

const { desktop1024, isMobileOrTabletVertical, desktop1440 } = viewportsBase;

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: var(--plus-jakarta-sans);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;
    color: ${theme.black};

    ${mediaMaxWidth(900)`
      width: 0px;
    `}

    ${mediaMaxWidth("mobile")`
      width: 0px;
    `}
  }

  html {
    font-size: calc(100vw / 1366 * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: ${desktop1024.width}px)  {
      font-size: calc(80vw / ${desktop1024.width} * 10);
    }

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      @media (orientation: portrait) {
        font-size: calc(115vw / ${isMobileOrTabletVertical.width} * 10);
      }
    `}

    ${mediaMaxWidth("mobileVerticalHorizontal")`
      font-size: calc(100vw / ${390} * 10);
    `}

    ${mediaMaxWidth("mobileHorizontal")`
      font-size: calc(100vw / ${400} * 10);
    `}
  }

  main{
    background: ${theme.cultured};
    /* overflow-x: hidden; */
    overflow: hidden
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input, textarea {
    appearance: none;
    border: none;
    outline: none;
  }

  .grecaptcha-badge {
    visibility: hidden;
    opacity: 0;
  }

  section{
    opacity: 1;
  }
`;
