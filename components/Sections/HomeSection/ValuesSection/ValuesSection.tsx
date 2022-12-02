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
      <SectionHeading dark={true}>OUR VALUES</SectionHeading>
      <ValuesGridWrapper>
        {valuesItems.map((data) => {
          return (
            <div key={data.title}>
              <ValuesItemheaders>{data.title}</ValuesItemheaders>
              <ValuesImageWrapper>
                <Image
                  height={100}
                  width={150}
                  alt="DIPS-Banner-1"
                  src={data.image}
                />
              </ValuesImageWrapper>
              <Paragraph dark={true}>{data.description_1}</Paragraph>
              <Paragraph dark={true}>{data.description_2}</Paragraph>
            </div>
          );
        })}
      </ValuesGridWrapper>
    </Container>
  );
};

export default ValuesSection;
