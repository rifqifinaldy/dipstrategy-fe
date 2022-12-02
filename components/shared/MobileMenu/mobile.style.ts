import Link from "next/link";
import { RiCloseCircleFill } from "react-icons/ri";
import styled from "styled-components";

export const MobileMenuContainer = styled.div<{ isopen: string }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isopen }) => (isopen === "true" ? "0.95" : "0")};
  top: ${({ isopen }) => (isopen === "true" ? "0" : "-100")};
  z-index: ${({ isopen }) => (isopen === "true" ? "999" : "-100")};
`;

export const CloseIcon = styled(RiCloseCircleFill)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 12px;
  top: 10px;
  width: 25px;
  height: 25px;
`;

export const MobileMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 40px);
  }
`;

export const MobileLink = styled(Link)<{ $active: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.lightest};
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
