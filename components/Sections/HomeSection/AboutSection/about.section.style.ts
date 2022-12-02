import styled from "styled-components";

export const AboutHeaderWrapper = styled.div`
  width: 100%;
  padding: 0 80px;
  /* position: absolute; */
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AboutContentWrapper = styled.div`
  width: 100%;
  padding: 20px 80px;
  background-color: ${({ theme }) => theme.colors.black};
  background-image: url(${"./images/background/services_background.png"});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin: 0;
  }
`;

export const AboutGridItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AboutVideoWrapper = styled.div`
  position: absolute;
  padding-right: 80px;
  width: 50%;
  top: 0;
  right: 0;
  @media screen and (max-width: 1024px) {
    position: relative;
    width: 100%;
    padding: 0 80px;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0;
  }
`;

// Style For Team Section

export const TeamHeaderWrapper = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    display: block;
    padding-bottom: 20px;
  }
`;

export const TeamContentWrapper = styled.div`
  width: 75%;
  padding: 0 80px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const TeamGridItems = styled.div`
  width: 100%;
  padding: 40px 80px;
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 100px));
  grid-gap: 40px;
  @media screen and (max-width: 1025px) {
    grid-template-columns: repeat(6, minmax(auto, 250px));
    grid-gap: 20px;
  }
  @media screen and (max-width: 540px) {
    display: block;
    padding: 0 20px;
  }
`;
