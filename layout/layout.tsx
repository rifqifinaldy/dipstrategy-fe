import MobileNavigation from "components/shared/MobileMenu/MobileNavigation";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import { GlobalStyle } from "./layout.style";

export const BasicLayout = ({ children }: { children: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <MobileNavigation toggle={toggle} isOpen={isOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
