import styled from "styled-components";

import MoneyButton from "./MoneyButton";
import { userBanknotes } from "../data/userBanknotes";

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
        {userBanknotes.map((item) => (
          <MoneyButton nominal={item} />
        ))}
      </StyledMoneyPanel>
    </div>
  );
};

export default MoneyPanel;
