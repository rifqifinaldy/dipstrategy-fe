import { Container } from "components/Container/container.style";
import { SectionHeading } from "components/Text/Heading";
import { Paragraph } from "components/Text/Paragraph";
import { socialMediaItems } from "mockdata/socialmedia.data";
import React from "react";
import {
  ContactInfo,
  ContactInfoWrapper,
  ContactSectionWrapper,
  ContactSocialMedia,
} from "./contact.style";
import ContactForm from "./Forms/ContactForm";

const ContactSection = () => {
  return (
    <Container fluid={false} dark={false}>
      <ContactSectionWrapper>
        <ContactInfoWrapper>
          <SectionHeading data-aos="fade-up" dark={false}>
            Get In Touch
          </SectionHeading>
          <Paragraph data-aos="fade-up" dark={false}>
            Looking to talk to us directly, or planning an office visit ? As
            Digitas Agency, Dipstrategy start by understanding your business
            need to comes up with any solutions. That&apos;s why it is important
            for us to hear your story. When it come to listening to your story,
            we are all ears.
          </Paragraph>
          <Paragraph data-aos="fade-up" dark={false}>
            Gd. TItan lt.3, Jl.Slamet Riyadi no 7, Jakarta 13150 - Indonesia
          </Paragraph>
          <ContactInfo data-aos="fade-up">P. +62 21 858 3944</ContactInfo>
          <ContactInfo data-aos="fade-up">INFO@DIPSTRATEGY.CO.ID</ContactInfo>
          {socialMediaItems.map((data) => {
            return (
              <ContactSocialMedia
                data-aos="fade-up"
                key={data.id}
                href={data.link}
              >
                {data.name}
              </ContactSocialMedia>
            );
          })}
        </ContactInfoWrapper>
        <ContactInfoWrapper>
          <ContactForm />
        </ContactInfoWrapper>
      </ContactSectionWrapper>
    </Container>
  );
};

export default ContactSection;
