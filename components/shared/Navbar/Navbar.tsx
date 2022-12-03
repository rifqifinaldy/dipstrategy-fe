import { menus } from "mockdata/navbar.data";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import {
  NavLink,
  NavContainer,
  NavLogo,
  NavMenu,
  NavContact,
  MobileMenu,
} from "./navbar.style";

interface INavbar {
  toggle: () => void;
}

const Navbar: FC<INavbar> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState<boolean>(false);
  const router = useRouter();

  // Detect If Devices Are Scrolling
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <NavContainer scroll={scrollNav}>
      {/* Navbar Logo Aka DipsStragey Logo Left Side of Navbar Item */}
      <NavLogo>
        <Image
          alt="Dipstragey"
          src="/images/Icon/dipstrategy-icon.png"
          fill={true}
          sizes="100%"
          quality={100}
          priority={true}
        />
      </NavLogo>
      <NavMenu>
        {menus.map((menu) => {
          return (
            <NavLink
              rel="stylesheet preload prefetch"
              $active={(router.pathname === menu.link).toString()}
              passHref={true}
              href={menu.link}
              key={menu.id}
            >
              {menu.name} {menu.id !== 1 && `•`}
            </NavLink>
          );
        })}
        <NavContact scroll={scrollNav}>+62 21 858 3944</NavContact>
      </NavMenu>
      <MobileMenu onClick={toggle} />
    </NavContainer>
  );
};

export default Navbar;
