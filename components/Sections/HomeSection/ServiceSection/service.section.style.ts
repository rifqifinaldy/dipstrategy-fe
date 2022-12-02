import styled from "styled-components";

export const ServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const ServiceQuote = styled.p`
  display: block;
  font-size: 21px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.colors.text.lightest};
  width: 500px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 100%;
    margin-bottom: 20px;
  }
`;
