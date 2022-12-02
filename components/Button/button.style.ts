import styled from "styled-components";
import { RiArrowRightUpLine } from "react-icons/ri";
import { theme } from "styles/theme.style";

export const MyButton = styled.button`
  padding: 10px 25px;
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.yellow};
  line-height: 1.5;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.15s ease-in;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 8px 16px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    opacity: 0.75;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.24),
      0 2px 16px 0 rgba(0, 0, 0, 0.19);
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 30px;
    font-size: 12px;
    border-radius: 2px;
  }
`;

export const ButtonIcon = styled(RiArrowRightUpLine)`
  height: 25px;
  width: 25px;
  display: inline;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.darkest};
  @media screen and (max-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;
