import React, { FC, ReactNode } from "react";
import { MyButton } from "./button.style";

interface IButton {
  children?: ReactNode;
  onClick: () => void;
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <>
      <MyButton onClick={onClick}>
        {children} 
      </MyButton>
    </>
  );
};

export default Button;
