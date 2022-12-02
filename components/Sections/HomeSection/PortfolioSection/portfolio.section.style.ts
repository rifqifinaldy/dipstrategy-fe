import styled from "styled-components";

export const PortoflioHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PortfolioImagesWrapper = styled.div`
  position: relative;
`;

export const PortfolioQuotes = styled.div`
  display: block;
  margin: auto;
  width: 520px;
`;

export const NavigationArrowWrapper = styled.div`
  display: flex;
  > svg {
    width: 50px;
    font-size: 50px;
    cursor: pointer;
  }
`;

export const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
