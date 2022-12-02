import Image from "next/image";
import styled from "styled-components";

export const CarouselContainer = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.black};
`;

export const CarouselTitle = styled.h1`
  position: absolute;
  color: ${({ theme }) => theme.colors.text.darkest};
  bottom: 0;
  margin-left: 80px;
  font-size: 92px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  width: 60%;
  line-height: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 48px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 540px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;

export const CarouselSubtitle = styled.h1`
  position: absolute;
  color: ${({ theme }) => theme.colors.text.lightest};
  top: 0;
  margin-left: 80px;
  font-size: 92px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  width: 60%;
  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 540px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;

export const CarouselLink = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 80px;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    margin-right: 20px;
    margin-bottom: 10px;
  }
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

export const CarouselBulletWrapper = styled.div`
  position: absolute;
  right: 150px;
  bottom: 150px;
  margin: auto 0;
  @media screen and (max-width: 1024px) {
    right: 120px;
    bottom: 60px;
  }
  @media screen and (max-width: 768px) {
    right: 50px;
    bottom: 30px;
  }
`;

export const BulletButton = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 0.5em;
  border-radius: 50%;
  transition: 0.25s ease-in;
  background-color: ${({ theme }) =>
    (props) =>
      props.active ? theme.colors.white : "transparent"};
  border: 1px solid ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    opacity: 0.5;
  }
  @media screen and (max-width: 1024px) {
    width: 10px;
    height: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 5px;
    height: 5px;
  }
`;

export const CarouselDivider = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100px;
  padding-bottom: 200px;
  @media screen and (max-width: 1024px) {
    padding-bottom: 70px;
  }
`;
