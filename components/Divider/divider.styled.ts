import styled from "styled-components";

export const Divider = styled.div<{ dark: Boolean}>`
    height: 1px;
    width: 100%;
    margin: 2em 0;
    background-color: ${({theme}) => props => props.dark ? theme.colors.text.lightest : theme.colors.text.darkest};
`;