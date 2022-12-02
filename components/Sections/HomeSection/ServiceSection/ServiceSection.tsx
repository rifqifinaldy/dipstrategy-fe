import Accordions from "components/Accordions/Accordions";
import ArrowLink from "components/ArrowLink/ArrowLink";
import { Container } from "components/Container/container.style";
import { Divider } from "components/Divider/divider.styled";
import { SectionHeading } from "components/Text/Heading";
import { serviceItems } from "mockdata/service.data";
import React from "react";
import { ServiceHeader, ServiceQuote } from "./service.section.style";

const ServiceSection = () => {
  return (
    <Container
      image="./images/background/services_background.png"
      id="services"
      fluid={false}
      dark={true}
    >
      <ServiceHeader>
        <SectionHeading data-aos="fade-up" dark={true}>Our Services</SectionHeading>
        <ServiceQuote data-aos="fade-up">
          We&apos;ve worked with a wide array of clients across the globe to
          apply design fundamentals of elegance, simplicity
        </ServiceQuote>
        <ArrowLink data-aos="fade-up" href="/" dark={true} text="View All" />
      </ServiceHeader>
      {serviceItems.map((item) => {
        return (
          <div key={item.title} data-aos="flip-up">
            <Divider dark={true} />
            <Accordions
              dark={true}
              title={item.title}
              description={item.description}
              details={item.details}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default ServiceSection;
