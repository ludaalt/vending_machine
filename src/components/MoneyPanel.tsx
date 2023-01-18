import styled from "styled-components";

import MoneyButton from "./MoneyButton";

const StyledMoneyPanel = styled.div`
  display: flex;
  justify-content: space-between;

  & button:not(:last-child) {
    margin-right: 20px;
  }
`;

const MoneyPanel = () => {
  return (
    <>
      <br />
      available for payment banknote:
      <br />
      <StyledMoneyPanel>
        <MoneyButton nominal={50} />
        <MoneyButton nominal={100} />
        <MoneyButton nominal={500} />
        <MoneyButton nominal={1000} />
      </StyledMoneyPanel>
    </>
  );
};

export default MoneyPanel;
