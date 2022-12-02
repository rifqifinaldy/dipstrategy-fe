import Image from "next/image";
import styled from "styled-components";

export const CardWrapper = styled.div`
  grid-column-end: span 3;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    transform: translateY(-7px);
  }
`;

export const CardImageContainer = styled.div`
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
`;

export const CardImage = styled(Image)`
  width: 100%;
  /* transform: translate(-50%, -50%); */
`;

export const CardContent = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const CardTitle = styled.h6`
  display: block;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const CardSubtitle = styled.small`
  display: block;
  font-size: 15px;
`;

export const CardSocialMedia = styled.div`
  display: flex;
  margin-top: 1em;
  &:svg {
    font-size: 12px;
    color: red;
    margin-right: 10px;
  }
`;