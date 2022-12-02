import styled from "styled-components";

export const ValuesGridWrapper = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 500px));
  grid-gap: 80px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(6, minmax(auto, 250px));
    grid-gap: 20px;
  }
  @media screen and (max-width: 540px) {
    display: block;
  }
`;

export const ValuesItemheaders = styled.h6`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text.light};
`;

export const ValuesImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;
  height: 222px;
  border: 1px solid ${({ theme }) => theme.colors.white};
`;
