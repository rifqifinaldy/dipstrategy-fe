import ArrowLink from "components/ArrowLink/ArrowLink";
import { ButtonIcon, MyButton } from "components/Button/button.style";
import { Container } from "components/Container/container.style";
import { Divider } from "components/Divider/divider.styled";
import { SectionHeading } from "components/Text/Heading";
import { Paragraph } from "components/Text/Paragraph";
import { Subtitle } from "components/Text/Subtitle";
import { serviceItems } from "mockdata/service.data";
import React from "react";
import { RiAddLine } from "react-icons/ri";
import {
  ServiceHeader,
  ServiceItemDescription,
  ServiceItemWrapper,
  ServiceQuote,
} from "./service.section.style";

const ServiceSection = () => {
  return (
    <Container fluid={false} dark={true}>
      <ServiceHeader>
        <SectionHeading dark={true}>Our Services</SectionHeading>
        <ServiceQuote>
          We&apos;ve worked with a wide array of clients across the globe to
          apply design fundamentals of elegance, simplicity
        </ServiceQuote>
        <ArrowLink href="/" dark={true} text="View All" />
      </ServiceHeader>
      {serviceItems.map((item) => {
        return (
          <div key={item.title}>
            <Divider dark={true} />
            <ServiceItemWrapper>
              <Subtitle dark={true}>{item.title}</Subtitle>
              <ServiceItemDescription>
                <Paragraph dark={true}>{item.description}</Paragraph>
              </ServiceItemDescription>
              <MyButton>
                Learn More <ButtonIcon />
              </MyButton>
              <RiAddLine />
            </ServiceItemWrapper>
          </div>
        );
      })}
    </Container>
  );
};

export default ServiceSection;
