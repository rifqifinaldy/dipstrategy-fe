import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";
import styled from "styled-components";
import { theme } from "styles/theme.style";

export const NavContainer = styled.nav<{ scroll: boolean }>`
  background-color: transparent;
  height: 80px;
  width: 100%;
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  top: 0;
  position: fixed;
  transition: 0.5s ease-out;
  background: ${({ scroll }) => (scroll ? "#000" : "transparent")};
  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 768px) {
    height: 45px;
  }
`;

// Navbar Logo Wrapper
export const NavLogo = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  width: 180px;
  height: 60px;
  @media screen and (max-width: 1024px) {
    width: 145px;
    height: 45px;
  }
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 30px;
  }
`;

export const MobileMenu = styled(RiMenuFill)`
  color: ${({ theme }) => theme.colors.white};
  display: none;
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

// Navbar Menu Link Wrapper
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavContact = styled.h4<{ scroll: boolean }>`
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ scroll }) =>
    scroll ? theme.colors.text.light : theme.colors.text.dark};
  font-size: 22px;
  font-family: "Lato", sans-serif;
  margin-left: 30px;
  transition: 0.5s ease-out;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Navbar Link
export const NavLink = styled(Link)<{ $active: string }>`
  text-decoration: none !important;
  color: ${({ theme }) =>
    (props) =>
      props.$active === "true"
        ? theme.colors.yellow
        : theme.colors.text.lightest};
  cursor: pointer;
  margin-right: 1.5em;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  opacity: 0.95;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    margin-right: 10px;
  }
`;
