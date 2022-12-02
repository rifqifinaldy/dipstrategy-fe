import { menus } from "mockdata/navbar.data";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { CloseIcon, MobileLink, MobileMenuContainer } from "./mobile.style";

interface IMobileMenu {
  isOpen: boolean;
  toggle: () => void;
}

const MobileNavigation: FC<IMobileMenu> = ({ isOpen, toggle }) => {
  const router = useRouter();

  return (
    <MobileMenuContainer isopen={isOpen.toString()}>
      <CloseIcon onClick={toggle} />
      {menus.map((menu) => {
        return (
          <MobileLink
            rel="stylesheet preload prefetch"
            $active={(router.pathname === menu.link).toString()}
            passHref={true}
            href={menu.link}
            key={menu.id}
          >
            {menu.name} {menu.id !== 1 && `•`}
          </MobileLink>
        );
      })}
    </MobileMenuContainer>
  );
};

export default MobileNavigation;
