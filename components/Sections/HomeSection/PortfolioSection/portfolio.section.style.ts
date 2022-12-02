import styled from "styled-components";

export const PortoflioHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const PortfolioImagesWrapper = styled.div`
  position: relative;
  > img:nth-child(2) {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  > img {
    @media screen and (max-width: 540px) {
      display: none;
    }
  }
`;

export const PortfolioQuotes = styled.div`
  display: block;
  margin: auto;
  width: 520px;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const NavigationArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  > svg {
    width: 50px;
    font-size: 50px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 540px) {
    display: block;
    margin-top: 2em;
    padding-top: 0.5em;
    border-top: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
