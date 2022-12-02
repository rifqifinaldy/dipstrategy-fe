import styled from "styled-components";

export const ServiceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ServiceQuote = styled.p`
    display: block;
    font-size: 21px;
    font-weight: ${({ theme }) => theme.font.weight.normal};
    color: ${({ theme }) => theme.colors.text.lightest};
    width: 500px;
`

export const ServiceItemWrapper = styled.div`
    width: 100%;
    padding: 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ServiceItemTitle = styled.h6`
    display: block;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text.light};
    width: 50%;
`

export const ServiceItemDescription = styled.div`
    display: block;
    width: 40%;
    margin-right: auto;
    margin-left: auto;
`;