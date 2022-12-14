import styled from "styled-components";
import { theme } from "styles/theme.style";
// This File Contains all the text styling for the whole app
// excluding the Carousel/Banner Section

// Section Heading Stlye
export const SectionHeading = styled.h1<{ dark: boolean }>`
  font-size: 68px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  margin-bottom: 2rem;
  line-height: 95%;
  color: ${({ theme }) => theme.colors.text.darkest};
  ${(props) =>
    props.dark &&
    `
  color: ${theme.colors.text.lightest};
  opacity: 1;
  `}
  @media screen and (max-width: 1024px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 48px;
    width: 100%;
  }
  @media screen and (max-width: 288px) {
    font-size: 32px;
  }
`;

// Basic Heading Style
export const BasicHeading = styled.h2<{ dark: boolean }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  margin-bottom: 2rem;
  line-height: 95%;
  color: ${({ theme }) => theme.colors.text.darkest};
  ${(props) =>
    props.dark &&
    `
  color: ${theme.colors.text.lightest};
  opacity: 1;
  `}
  @media screen and (max-width: 540px) {
    font-size: 32px;
    margin: 0.2em 0;
  }
`;
