import React from "react";
import {
  CarouselContainer,
  CarouselDivider,
  CarouselImage,
  CarouselLink,
  CarouselSubtitle,
  CarouselTitle,
  DVector,
  WVector,
} from "./carousel.style";

import ArrowLink from "components/ArrowLink/ArrowLink";

const Carousel = () => {
  return (
    <>
      <CarouselContainer>
        <CarouselImage
          fill={true}
          alt="DIPS-Banner-1"
          src="/images/banner/banner_1.png"
        />
        <DVector
          height={480}
          width={280}
          alt="DIPS-Banner-1"
          src="/images/banner/d_vector.png"
        />
        <WVector
          height={480}
          width={550}
          alt="DIPS-Banner-1"
          src="/images/banner/w_vector.png"
        />
        <CarouselTitle>WE ASSIST YOU IN SOLVING TOMORROW&apos;S</CarouselTitle>
        <CarouselLink>
          <ArrowLink href="/about" dark={false} text="About Us" />
        </CarouselLink>
      </CarouselContainer>
      <CarouselDivider>
        <CarouselSubtitle>PROBLEM TODAY</CarouselSubtitle>
      </CarouselDivider>
    </>
  );
};

export default Carousel;
