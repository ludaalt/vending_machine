import styled from "styled-components";

import MoneyButton from "./MoneyButton";

const StyledMoneyPanel = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const MoneyPanel = () => {
  return (
    <StyledMoneyPanel>
      <MoneyButton nominal={50} />
      <MoneyButton nominal={100} />
      <MoneyButton nominal={500} />
      <MoneyButton nominal={1000} />
    </StyledMoneyPanel>
  );
};

export default MoneyPanel;
