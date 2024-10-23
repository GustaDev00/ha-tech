import { mediaMaxWidth } from "@/utils/media-query";
import { css } from "styled-components";

export const TitleWhiteBig = css`
  color: ${({ theme }) => theme.white};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 135.417%;
  letter-spacing: -0.2rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3.6rem;
    line-height: 142.5%;
  `}
`;

export const TitleBlackBig = css`
  color: ${({ theme }) => theme.charlestonGreen};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 135.417%;
  letter-spacing: -0.2rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4rem;
    line-height: 142.5%;
  `}
`;

export const TitleWhiteExtraBig = css`
  color: #fff;
  font-size: 5.2rem;
  font-weight: 700;
  line-height: 130%;
`;

export const TitleDarkBig = css`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 130%;

  ${mediaMaxWidth("mobile")`
    font-size: 4rem;
  `}
`;

export const TitleBlackSmall = css`
  color: ${({ theme }) => theme.black};
  font-family: var(--interFont);
  font-size: 2rem;
  font-weight: 600;
  line-height: 140%;
`;

export const TitleSmallWhite = css`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: -0.1113rem;
`;

export const TitleSmallBlue = css`
  color: #0c4261;
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 4.1rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 3.5rem;
  `}
`;

export const DescriptionBlueWhiteBig = css`
  color: #c7e6f8;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 180%;
`;

export const DescriptionWhiteSmall = css`
  color: ${({ theme }) => theme.white};
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 168.421%;
  letter-spacing: -0.02rem;
  opacity: 0.6;
`;

export const DescriptionGrayBig = css`
  color: #737373;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 180%;
`;

export const DescriptionGrayMedium = css`
  color: #737373;
  font-size: 2rem;
  font-weight: 400;
  line-height: 180%;
`;

export const DescriptionBlackSmall = css`
  color: #454545;
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 3.2rem;
  letter-spacing: -0.02px;
`;

export const DescriptionGraySmall = css`
  color: #737373;
  font-family: var(--interFont);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const DescriptionBlueSmall = css`
  color: #566066;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
`;
