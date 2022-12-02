import Link from "next/link";
import styled from "styled-components";
import { RiArrowRightUpLine } from "react-icons/ri";
import { theme } from "styles/theme.style";

export const ArrowLinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ArrowLinkText = styled(Link)<{ $dark: string }>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.dark};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.colors.text.darkest};
  ${(props) =>
    props.$dark === "true" &&
    `
  color: ${theme.colors.text.lightest};
  opacity: 1;
  `}
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ArrowLinkIcon = styled(RiArrowRightUpLine)<{ $dark: string }>`
  height: 75px;
  width: 75px;
  color: ${({ theme }) => theme.colors.text.darkest};
  ${(props) =>
    props.$dark === "true" &&
    `
  color: ${theme.colors.text.lightest};
  opacity: 1;
  `}
  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
