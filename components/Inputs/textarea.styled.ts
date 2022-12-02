import styled from "styled-components";

export const TextArea = styled.textarea<{ dark: boolean }>`
  padding: 6px 5px;
  width: 100%;
  margin-bottom: 25px;
  border: none;
  background-color: transparent;
  transition: 0.2s ease-in;
  color: ${({ theme }) =>
    (props) =>
      props.dark ? theme.colors.yellow : theme.colors.blue};
  border-bottom: 1px solid
    ${({ theme }) =>
      (props) =>
        props.dark ? theme.colors.white : theme.colors.black};
  &::placeholder {
    opacity: 0.95;
    margin-bottom: 2px;
    text-transform: uppercase;
  }
  &:focus {
    border: none;
    outline: none;
    color: ${({ theme }) =>
      (props) =>
        props.dark ? theme.colors.yellow : theme.colors.blue};
    border: 1px solid
      ${({ theme }) =>
        (props) =>
          props.dark ? theme.colors.yellow : theme.colors.blue};
    &::placeholder {
      color: ${({ theme }) =>
        (props) =>
          props.dark ? theme.colors.yellow : theme.colors.blue};
    }
  }
`;
