import { Divider } from "components/Divider/divider.styled";
import { Small } from "components/Text/Paragraph";
import { quickLinksItems } from "mockdata/quicklinks.data";
import { socialMediaItems } from "mockdata/socialmedia.data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FooterContainer,
  FooterContentWrapper,
  FooterItems,
  FooterPhoneNumber,
  FooterListItems,
  Copyright,
  FooterLogoWrapper,
} from "./footer.style";
import FooterForm from "./Form/FooterForm";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <FooterLogoWrapper>
          <Image
            fill={true}
            sizes="100%"
            alt="DIPS-Banner-1"
            src="/images/footer/footer-logo.png"
          />
        </FooterLogoWrapper>
        <FooterPhoneNumber>P. +62 21 858 3944</FooterPhoneNumber>
        <FooterItems>
          <h6>Quick Links</h6>
          <FooterListItems bold={false}>
            {quickLinksItems.map((data) => {
              return (
                <li key={data.id}>
                  <Link href={data.href}>{data.tag}</Link>
                </li>
              );
            })}
          </FooterListItems>
        </FooterItems>
        <FooterItems>
          <h6>Follow</h6>
          <FooterListItems bold={true}>
            {socialMediaItems.map((data) => {
              return (
                <li key={data.id}>
                  <Link href={data.link}>{data.name}</Link>
                </li>
              );
            })}
          </FooterListItems>
        </FooterItems>
        <FooterItems>
          <h6>Sign in to Our NewsLetter</h6>
          <FooterForm />
        </FooterItems>
      </FooterContentWrapper>
      <Copyright>
        <Divider dark={false} />
        <Small align="left">
          Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital
          Agency Jakarta
        </Small>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
