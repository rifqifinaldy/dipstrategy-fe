import React, { useEffect, useState } from "react";
import {
  BulletButton,
  CarouselBulletWrapper,
  CarouselContainer,
  CarouselDivider,
  CarouselImage,
  CarouselLink,
  CarouselSubtitle,
  CarouselTitle,
} from "./carousel.style";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowLink from "components/ArrowLink/ArrowLink";
import { bannerItems } from "mockdata/banner.data";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const changeImage = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    setImageIndex(id);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <CarouselContainer>
        <CarouselImage
          fill={true}
          alt="DIPS-Banner-1"
          src={bannerItems[imageIndex].image}
          priority={true}
        />
        {/* <DVector
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
        /> */}
        <CarouselBulletWrapper>
          {bannerItems.map((data, i) => {
            return (
              <BulletButton
                active={imageIndex === i}
                key={data.id}
                onClick={(e) => changeImage(e, i)}
              />
            );
          })}
        </CarouselBulletWrapper>
        <CarouselTitle>{bannerItems[imageIndex].title}</CarouselTitle>
        <CarouselLink>
          <ArrowLink href="/about" dark={false} text="About Us" />
        </CarouselLink>
      </CarouselContainer>
      <CarouselDivider>
        <CarouselSubtitle data-aos="fade-up">{bannerItems[imageIndex].subtitle}</CarouselSubtitle>
      </CarouselDivider>
    </>
  );
};

export default Carousel;
