import styled from "styled-components";

const StyledTooltop = styled.span`
  padding: 20px;
  width: 140px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;

  top: 100%;
  right: calc((100% - 140px) / 2);
  z-index: 1;
  min-height: 50px;
`;

const Tooltip = () => {
  return <StyledTooltop>sorry, product is out of stock</StyledTooltop>;
};

export default Tooltip;
