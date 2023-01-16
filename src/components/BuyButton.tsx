import { FC } from "react";
import styled from "styled-components";

interface BuyButtonProps {
  disabled: boolean;
}

const StyledButton = styled.button`
  font-family: inherit;
  display: inline-block;
  font-size: 1em;
  padding: 8px 15px;

  background-color: #ff0081;
  color: #fff;
  border-radius: 4px;

  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);

  &:hover {
    transform: scale(0.9);
  }

  &:disabled,
  &[disabled] {
    background-color: gray;
    transform: none;
    box-shadow: none;
  }
`;

const BuyButton: FC<BuyButtonProps> = ({ disabled }) => {
  return <StyledButton disabled={disabled}>Buy</StyledButton>;
};

export default BuyButton;
