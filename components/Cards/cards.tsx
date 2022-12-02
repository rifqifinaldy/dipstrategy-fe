import React, { FC } from "react";
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import {
  CardContent,
  CardImage,
  CardImageContainer,
  CardSocialMedia,
  CardSubtitle,
  CardTitle,
  CardWrapper,
} from "./card.style";

interface ICard {
  title: string;
  subtitle: string;
  image: string;
  linkedln_url?: string;
  facebook_url?: string;
  twitter_url?: string;
}

const Cards: FC<ICard> = ({
  title,
  subtitle,
  image,
  linkedln_url,
  facebook_url,
  twitter_url,
}) => {
  return (
    <CardWrapper data-aos="fade-up">
      {/* Image Wrapper */}
      <CardImageContainer>
        <CardImage
          fill={true}
          alt="Dips Strategy Avatar"
          priority={true}
          sizes="100%"
          src={image}
        />
      </CardImageContainer>
      {/* Content Wrapper */}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardSocialMedia>
          <RiLinkedinFill />
          <RiFacebookFill />
          <RiTwitterFill />
        </CardSocialMedia>
      </CardContent>
    </CardWrapper>
  );
};

export default Cards;
