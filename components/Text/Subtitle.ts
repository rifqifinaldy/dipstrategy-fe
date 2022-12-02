import styled from "styled-components";
import { theme } from "styles/theme.style";

// Subtitle
export const Subtitle = styled.h6<{ dark: boolean }>`
  font-size: 21px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 120%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.colors.text.darkest};
  ${(props) =>
    props.dark &&
    `
  color: ${theme.colors.text.light};
  opacity: 1;
  `}
  @media screen and (max-width: 512px) {
    margin: 0.2em 0;
    font-size: 16px;
  }
`;
