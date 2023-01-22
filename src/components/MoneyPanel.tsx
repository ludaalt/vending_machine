import styled from "styled-components";

import MoneyButton from "./MoneyButton";

const StyledMoneyPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  & button:not(:last-child) {
    margin-right: 20px;
  }
`;

const MoneyPanel = () => {
  return (
    <div>
      <p>available for payment banknote:</p>
      <StyledMoneyPanel>
        <MoneyButton nominal={50} />
        <MoneyButton nominal={100} />
        <MoneyButton nominal={500} />
        <MoneyButton nominal={1000} />
      </StyledMoneyPanel>
    </div>
  );
};

export default MoneyPanel;
