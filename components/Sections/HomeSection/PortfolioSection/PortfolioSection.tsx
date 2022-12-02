import { Column1, Column2 } from "components/Container/column.style";
import { Container } from "components/Container/container.style";
import { BasicHeading, SectionHeading } from "components/Text/Heading";
import { Paragraph } from "components/Text/Paragraph";
import { Subtitle } from "components/Text/Subtitle";
import { portofolioItems } from "mockdata/portfolio.data";
import Image from "next/image";
import React from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import {
  NavigationArrowWrapper,
  PortfolioImagesWrapper,
  PortfolioItemsWrapper,
  PortfolioQuotes,
  PortoflioHeaderWrapper,
} from "./portfolio.section.style";

const PortfolioSection = () => {
  return (
    <Container fluid={false} dark={false}>
      <PortoflioHeaderWrapper>
        <SectionHeading data-aos="fade-up" dark={false}>PORTFOLIO</SectionHeading>
        <PortfolioQuotes>
          <Paragraph data-aos="fade-up" dark={false}>
            Take a look at our most successful projects and see for yourself our
            skill and the results that speak for themselves
          </Paragraph>
        </PortfolioQuotes>
        <NavigationArrowWrapper data-aos="fade-up">
          <RiArrowLeftLine />
          <RiArrowRightLine />
        </NavigationArrowWrapper>
      </PortoflioHeaderWrapper>

      {portofolioItems.map((data, i) => {
        return (
          <PortfolioItemsWrapper data-aos="fade-up" key={data.id}>
            <Column1>
              {data.id % 2 !== 0 ? (
                <>
                  <Subtitle dark={true}>{data.subtitle}</Subtitle>
                  <BasicHeading dark={false}>{data.title}</BasicHeading>
                  <ol>
                    {data.list.map((item) => {
                      return <li key={item}>{item}</li>;
                    })}
                  </ol>
                </>
              ) : (
                <PortfolioImagesWrapper>
                  <Image
                    height={350}
                    width={188}
                    alt={data.title}
                    src={data.images.front_image}
                  />
                  <Image
                    height={data.id === 4 ? 360 : 221}
                    width={data.id === 4 ? 250 : 360}
                    style={{
                      position: "absolute",
                      zIndex: -1,
                      left: 70,
                      top: 50,
                    }}
                    alt={data.title}
                    src={data.images.behind_image}
                  />
                </PortfolioImagesWrapper>
              )}
            </Column1>
            <Column2>
              {data.id % 2 === 0 ? (
                <>
                  <Subtitle dark={true}>{data.subtitle}</Subtitle>
                  <BasicHeading dark={false}>{data.title}</BasicHeading>
                  <ol>
                    {data.list.map((item) => {
                      return <li key={item}>{item}</li>;
                    })}
                  </ol>
                </>
              ) : (
                <PortfolioImagesWrapper>
                  <Image
                    height={350}
                    width={188}
                    
                    alt={data.title}
                    src={data.images.front_image}
                  />
                  <Image
                    height={221}
                    width={360}
                    style={{
                      position: "absolute",
                      zIndex: -1,
                      left: 70,
                      top: 50,
                      marginLeft: "20px",
                    }}
                    alt={data.title}
                    src={data.images.behind_image}
                  />
                </PortfolioImagesWrapper>
              )}
            </Column2>
          </PortfolioItemsWrapper>
        );
      })}
    </Container>
  );
};

export default PortfolioSection;
