import Image from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme.style";

export const CarouselContainer = styled.section`
  background: ${({ theme }) => theme.colors.black};
`;

export const CarouselTitle = styled.h1`
  position: absolute;
  color: ${({ theme }) => theme.colors.text.darkest};
  bottom: 0;
  margin-left: 80px;
  font-size: 68px;
  font-weight: ${({theme}) => theme.font.weight.normal};
  width: 60%;
`;

export const CarouselSubtitle = styled.h1`
  position: absolute;
  color: ${({ theme }) => theme.colors.text.lightest};
  top: 0;
  margin-left: 80px;
  font-size: 68px;
  font-weight: ${({theme}) => theme.font.weight.normal};
  width: 60%;
`;

export const CarouselLink = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 80px;
  margin-bottom: 50px;
`;

export const CarouselInfo = styled.h6`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
`;

export const CarouselImage = styled(Image)`
  position: relative !important;
`;

export const DVector = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

export const WVector = styled(Image)`
  position: absolute;
  right: 70px;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

export const CarouselDivider = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100px;
  padding-bottom: 200px;
`;
