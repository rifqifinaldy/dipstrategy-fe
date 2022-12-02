import Link from "next/link";
import styled from "styled-components";
import { theme } from "styles/theme.style";

export const NavContainer = styled.nav`
  background-color: transparent;
  height: 80px;
  width: 100%;
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  padding: 3.5em 80px;
`;

// Navbar Logo Wrapper
export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Navbar Menu Link Wrapper
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContact = styled.h4`
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  margin-left: 30px;
`;

// Navbar Link
export const NavLink = styled(Link)<{ isactive: boolean }>`
  text-decoration: none !important;
  color: ${({ theme }) => theme.colors.text.lightest};
  cursor: pointer;
  margin-right: 1.5em;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  &:hover {
    opacity: 1;
  }
  ${(props) =>
    props.isactive &&
    `
  color: ${theme.colors.yellow};
  opacity: 1;
  `}
`;
