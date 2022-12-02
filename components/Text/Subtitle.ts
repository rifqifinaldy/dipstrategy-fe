import styled from "styled-components";
import { theme } from "styles/theme.style";

// Subtitle
export const Subtitle = styled.h6<{ dark: boolean }>`
  font-size: 21px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  width: 800px;
  line-height: 120%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.colors.text.darkest};
  ${(props) =>
    props.dark &&
    `
  color: ${theme.colors.text.light};
  opacity: 1;
  `}
`;