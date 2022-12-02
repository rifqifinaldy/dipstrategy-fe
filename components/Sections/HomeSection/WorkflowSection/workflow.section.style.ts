import styled from "styled-components";

export const WorkflowSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const WorkflowImageWrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  width: 600px;
  height: 450px;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const ImageDecoration = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
