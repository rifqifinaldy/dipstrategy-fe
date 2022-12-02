import { Container } from "components/Container/container.style";
import { SectionHeading } from "components/Text/Heading";
import { Paragraph } from "components/Text/Paragraph";
import { valuesItems } from "mockdata/values.data";
import Image from "next/image";
import React from "react";
import {
  ValuesGridWrapper,
  ValuesImageWrapper,
  ValuesItemheaders,
} from "./values.style";

const ValuesSection = () => {
  return (
    <Container fluid={false} dark={true}>
      <SectionHeading data-aos="fade-up" dark={true}>
        OUR VALUES
      </SectionHeading>
      <ValuesGridWrapper>
        {valuesItems.map((data) => {
          return (
            <div key={data.title}>
              <ValuesItemheaders data-aos="fade-up">
                {data.title}
              </ValuesItemheaders>
              <ValuesImageWrapper data-aos="fade-up">
                <Image
                  height={100}
                  width={150}
                  alt="DIPS-Banner-1"
                  src={data.image}
                />
              </ValuesImageWrapper>
              <Paragraph data-aos="fade-up" dark={true}>
                {data.description_1}
              </Paragraph>
              <Paragraph data-aos="fade-up" dark={true}>
                {data.description_2}
              </Paragraph>
            </div>
          );
        })}
      </ValuesGridWrapper>
    </Container>
  );
};

export default ValuesSection;
