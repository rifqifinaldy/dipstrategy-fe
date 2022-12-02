import { menus } from "mockdata/navbar.data";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  NavLink,
  NavContainer,
  NavLogo,
  NavMenu,
  NavContact,
} from "./navbar.style";

const Navbar = () => {
  const router = useRouter();
  return (
    <NavContainer>
      {/* Navbar Logo Aka DipsStragey Logo Left Side of Navbar Item */}
      <NavLogo>
        <Image
          alt="Dipstragey-logo"
          src="/images/Icon/Dipstrategy_Icon.png"
          width={224}
          height={75}
          quality={100}
          priority={true}
        />
      </NavLogo>
      <NavMenu>
        {menus.map((menu) => {
          return (
            <NavLink isactive={(router.pathname === menu.link)} passHref={true} href={menu.link} key={menu.id}>
              {menu.name} {menu.id !== 1 && `•`}
            </NavLink>
          );
        })}
        <NavContact>+62 21 858 3944</NavContact>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
