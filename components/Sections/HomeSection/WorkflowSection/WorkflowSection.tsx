import ArrowLink from "components/ArrowLink/ArrowLink";
import { ButtonIcon, MyButton } from "components/Button/button.style";
import { Column1, Column2 } from "components/Container/column.style";
import { Container } from "components/Container/container.style";
import { Anchor } from "components/Text/Anchor";
import { SectionHeading } from "components/Text/Heading";
import { Paragraph } from "components/Text/Paragraph";
import { Subtitle } from "components/Text/Subtitle";
import Image from "next/image";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import {
  ImageDecoration,
  WorkflowSectionWrapper,
} from "./workflow.section.style";

const WorkflowSection = () => {
  return (
    <Container fluid={false} dark={false}>
      <SectionHeading dark={false}>WORKFLOW</SectionHeading>
      <WorkflowSectionWrapper>
        <Column1>
          <Paragraph dark={false}>
            It is particularly important for us that you as customer are
            actively involved in creative process and that you know at all times
            which step we are about to take next. Learn more about out workflow
            and out communication with you as a customer here
          </Paragraph>
          <ImageDecoration>
            {[1, 34, 28].map((px, i) => {
              return (
                <svg
                  key={px}
                  width="12"
                  height="12"
                  style={{
                    position: "absolute",
                    top: i === 2 ? px / i : i,
                    right: i === 2 ? i : px / 2,
                  }}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H11V11.5" stroke="black" />
                </svg>
              );
            })}
          </ImageDecoration>
          <Image
            alt="Dipstrategy Workflow"
            src="/images/workflow/dips-workflow.png"
            width={600}
            height={450}
            style={{ marginLeft: "12px" }}
            quality={100}
            priority={false}
          />
        </Column1>
        <Column2>
          <Subtitle dark={false}>
            HOW WE DEAL WITH PROJECTS FROM START TO FINISH{" "}
            <RiArrowRightUpLine />
          </Subtitle>
          <Paragraph dark={false}>
            It is particularly important for us that you as customer are
            actively involved in creative process and that you know at all times
            which step we are about to take next. Learn more about out workflow
            and out communication with you as a customer here
          </Paragraph>
          <Paragraph dark={false}>
            Before each project, we therefore obtain detailed information from
            you about what you expect from our service, what your goals are and
            what you particularly value. Our experts will also be happy to
            advice you on this step with their extensive specialist knowledge
          </Paragraph>
          <Paragraph dark={false}>
            As soon as your expectations have been clarified, we get down to
            work. We actively involve you, the customer in the processes so that
            you always know where your project currently stands
          </Paragraph>
          <MyButton>
            Learn More <ButtonIcon />
          </MyButton>
          <Anchor href="/">HOW WE COMMUNICATE WITH THE CLIENT</Anchor>
          <Anchor href="/">STAGES OF THE PROCESS</Anchor>
        </Column2>
      </WorkflowSectionWrapper>
    </Container>
  );
};

export default WorkflowSection;
