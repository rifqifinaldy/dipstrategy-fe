import Link from "next/link";
import styled from "styled-components";

export const ContactSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: block;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactInfo = styled.h6`
  display: block;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.colors.text.dark};
  font-family: "Lato", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ContactSocialMedia = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.colors.text.dark};
  margin-top: 100px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    margin-top: 0;
    font-size: 12px;
  }
`;
