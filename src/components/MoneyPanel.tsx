import styled from "styled-components";

import MoneyButton from "./MoneyButton";

const StyledMoneyPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const MoneyPanel = () => {
  return (
    <div>
      <p style={{ marginBottom: "10px" }}>available for payment banknote:</p>
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
