import styled from "styled-components";

export const AboutHeaderWrapper = styled.div`
  width: 100%;
  margin: 0 80px;
  /* position: absolute; */
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AboutContentWrapper = styled.div`
  width: 100%;
  padding: 20px 80px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const AboutGridItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AboutVideoWrapper = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
`;

// Style For Team Section

export const TeamHeaderWrapper = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const TeamContentWrapper = styled.div`
  width: 75%;
  padding: 0 80px;
`;

export const TeamGridItems = styled.div`
  width: 100%;
  padding: 40px 80px;
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 100px));
  grid-gap: 40px;
`;
