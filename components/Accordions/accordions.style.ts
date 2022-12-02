import styled from "styled-components";

export const AccordionWrapper = styled.div<{ expand: boolean }>`
  width: 100%;
  padding: 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    align-self: ${({ expand }) => (expand ? "flex-end" : "center")};
  }
  @media screen and (max-width: 540px) {
    display: block;
  }
`;

export const AccordionMainContent = styled.div`
  width: 50%;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const AccordionSubContent = styled.div`
  width: 35%;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
