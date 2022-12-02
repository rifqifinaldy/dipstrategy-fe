import { ButtonIcon, MyButton } from "components/Button/button.style";
import Cards from "components/Cards/cards";
import { Column1, Column2 } from "components/Container/column.style";
import { Container } from "components/Container/container.style";
import { SectionHeading } from "components/Text/Heading";
import { Paragraph } from "components/Text/Paragraph";
import { teamItems } from "mockdata/teams.data";
import React from "react";
import {
  AboutContentWrapper,
  AboutGridItems,
  AboutHeaderWrapper,
  AboutVideoWrapper,
  TeamContentWrapper,
  TeamGridItems,
  TeamHeaderWrapper,
} from "./about.section.style";

const AboutSection = () => {
  return (
    <Container fluid={true} dark={false}>
      <AboutHeaderWrapper>
        <SectionHeading data-aos="fade-up" dark={false}>
          ABOUT US
        </SectionHeading>
      </AboutHeaderWrapper>
      <AboutVideoWrapper data-aos="fade-up">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/SfhHYbSnn-s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AboutVideoWrapper>
      <AboutContentWrapper>
        <AboutGridItems>
          <Column1>
            <Paragraph data-aos="fade-up" dark={true}>
              Hardianto is a name of person work in digital agency based in
              jakarta. founder Novi Hardianto decided to go into business for
              himself. Using his vast experience in software engineering and
              numerous ancillary fields to help people perfect their web
              presence and get seen
            </Paragraph>
            <Paragraph data-aos="fade-up" dark={true}>
              In setting up the company. he was able to rely on his vast
              experience from previos entrepreneurial activites and therefore
              knows what matters
            </Paragraph>
            <MyButton data-aos="fade-up">
              See More <ButtonIcon />
            </MyButton>
          </Column1>
        </AboutGridItems>
        {/* Below are Actually the Teams Section */}
        <TeamHeaderWrapper>
          <SectionHeading data-aos="fade-up" dark={true}>
            Our Magic Team
          </SectionHeading>
          <MyButton data-aos="fade-up">
            See More <ButtonIcon />
          </MyButton>
        </TeamHeaderWrapper>
      </AboutContentWrapper>
      {/* Team Description Wrapper */}
      <TeamContentWrapper>
        <Paragraph data-aos="fade-up" dark={false}>
          Wolven D.O.O is a small digital agency based in Serbia. Founder Dave
          McGowan decided to go into business for himself, using his vast
          experience in software engineering and numerous ancillary fields to
          help people perfect their web presence and get seen
        </Paragraph>
        <Paragraph data-aos="fade-up" dark={false}>
          In setting up the company, he was able to rely on his vast experience
          from previous entrepreneurial activities and therefore know what
          matters
        </Paragraph>
      </TeamContentWrapper>
      {/* Team Cards & Avatar Wrapper  */}
      <TeamGridItems>
        {teamItems.map((data) => {
          return (
            <Cards
              key={data.id}
              title={data.name}
              subtitle={data.position}
              image={data.avatar}
            />
          );
        })}
      </TeamGridItems>
    </Container>
  );
};

export default AboutSection;
