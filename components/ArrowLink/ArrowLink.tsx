import React from "react";
import {
  ArrowLinkContainer,
  ArrowLinkIcon,
  ArrowLinkText,
} from "./arrowlink.style";

interface IArrowLink {
  text?: string;
  dark: boolean;
  href: string;
}

const ArrowLink = ({ text, dark, href }: IArrowLink) => {
  return (
    <ArrowLinkContainer>
      <ArrowLinkText dark={dark} href={href}>{text}</ArrowLinkText>
      <ArrowLinkIcon dark={dark} />
    </ArrowLinkContainer>
  );
};

export default ArrowLink;
