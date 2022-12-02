import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 40px 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  @media screen and (max-width: 1024px) {
    padding: 10px 20px;
  }
`;

export const FooterLogoWrapper = styled.div`
  position: relative;
  height: 282px;
  width: 144px;
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    transform: rotate(90deg);
  }
`;

export const FooterContentWrapper = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 250px));
  grid-gap: 1px;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;

export const FooterPhoneNumber = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-family: "Lato", sans-serif;
  font-size: 26px;
  transform: rotate(-90deg);
  position: relative;
  @media screen and (max-width: 768px) {
    transform: rotate(0deg);
    width: 100%;
    margin: 0;
    text-align: center;
  }
`;

export const FooterItems = styled.div`
  display: block;
  > h6 {
    font-size: 15px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 0.5em;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    > h6 {
      margin-bottom: 0;
    }
  }
`;

export const FooterListItems = styled.ul<{ bold: boolean }>`
  font-size: 15px;
  padding: 5px 0;
  color: #1b1b1b;
  transition: 0.5s ease-in-out;
  > li {
    list-style: none;
    margin-top: 0.5em;
    font-weight: ${(props) => (props.bold ? "700" : "400")};
    > a {
      text-decoration: none;
      color: #1b1b1b;
      &:hover {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 18%;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;
