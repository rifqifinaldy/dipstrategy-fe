import styled from "styled-components";
import { theme } from "styles/theme.style";

export const Container = styled.section<{ dark: boolean, fluid: boolean }>`
  position: relative;
  padding: ${(props) => props.fluid ? '0, 0' : '40px 80px'};
  ${(props) =>
    props.dark &&
    `
  background-color: ${theme.colors.black};
  opacity: 1;
  `}
`;
