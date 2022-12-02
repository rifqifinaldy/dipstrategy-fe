import { ButtonIcon, MyButton } from "components/Button/button.style";
import { BasicHeading } from "components/Text/Heading";
import { Paragraph } from "components/Text/Paragraph";
import { Subtitle } from "components/Text/Subtitle";
import Image from "next/image";
import React, { FC, useState } from "react";
import {
  AccordionMainContent,
  AccordionSubContent,
  AccordionWrapper,
} from "./accordions.style";

interface IAccordions {
  title: string;
  description: string;
  dark: boolean;
  main_image?: string;
  details: {
    main_images?: string;
    images?: string[];
    description_detail?: string;
  };
}

const Accordions: FC<IAccordions> = ({ title, description, dark, details }) => {
  const [expand, setExpand] = useState<boolean>(false);

  //   onClick Button / Icon
  const onExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setExpand(!expand);
  };

  return (
    <>
      <AccordionWrapper expand={expand}>
        <AccordionMainContent>
          <Subtitle dark={dark}>{title}</Subtitle>
          {expand && details && (
            <Image
              src={details.main_images || ""}
              width={200}
              height={200}
              alt={title}
              priority={false}
            />
          )}
        </AccordionMainContent>
        <AccordionSubContent>
          <Paragraph dark={dark}>{description}</Paragraph>
          {expand && details && (
            <>
              {details.images?.map((image, i) => {
                return (
                  <Image
                    key={i}
                    src={image || ""}
                    width={200}
                    height={200}
                    style={{ marginRight: "1em" }}
                    alt={title}
                    priority={false}
                  />
                );
              })}
              <Paragraph dark={true}>{details.description_detail}</Paragraph>
            </>
          )}
        </AccordionSubContent>
        <MyButton onClick={(e) => onExpand(e)}>
          Learn More <ButtonIcon />
        </MyButton>
      </AccordionWrapper>
    </>
  );
};

export default Accordions;
