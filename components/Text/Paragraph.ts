import styled from "styled-components";
import { theme } from "styles/theme.style";
// excluding the Carousel/Banner Section

// Section Paragraph Stlye
export const Paragraph = styled.h1<{ dark: boolean }>`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: 120%;
  margin: 1em 0;
  color: ${({ theme }) => theme.colors.text.dark};
  ${(props) =>
    props.dark &&
    `
  color: ${theme.colors.text.lightest};
  opacity: 1;
  `}
`;

export const Small = styled.small<{ align: string, marginTop?: string, marginBottom?: string }>`
  display: inline-block;
  margin: 0, 1em;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  text-align: ${props => props.align};
  width: 100%;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
`;
