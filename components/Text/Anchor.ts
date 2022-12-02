import Link from "next/link";
import styled from "styled-components";

export const Anchor = styled(Link)`
  font-size: 26px;
  line-height: 130%;
  display: block;
  margin: 1em 0;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.colors.text.dark};
  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;
