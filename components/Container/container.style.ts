import styled from "styled-components";
import { theme } from "styles/theme.style";

export const Container = styled.section<{
  dark: boolean;
  fluid: boolean;
  image?: string;
}>`
  position: relative;
  padding: ${(props) => (props.fluid ? "0, 0" : "40px 80px")};
  z-index: 1;
  background-color: ${({ dark }) =>
    dark ? theme.colors.black : theme.colors.white};
  ${({ image }) =>
    image &&
    `
    background-image: url(${"./images/background/services_background.png"});
    background-position: center;
    background-size: cover;
    `}
  @media screen and (max-width: 540px) {
    padding: ${(props) => (props.fluid ? "0, 0" : "20px 20px")};
  }
`;
