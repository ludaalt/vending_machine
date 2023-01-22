import styled from "styled-components";

import MoneyPanel from "./MoneyPanel";
import UserCart from "./UserCart";

const StyledUserPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000;
  font-weight: bold;

  background-color: rgba(225, 255, 255, 0.8);

  border-radius: 20px;
  min-height: 400px;
  padding: 30px;

  @media (max-width: 1000px) {
    padding: 30px 15px;
    max-width: 350px;
  }
`;

const UserPanel = () => {
  return (
    <StyledUserPanel>
      <UserCart />
      <MoneyPanel />
    </StyledUserPanel>
  );
};

export default UserPanel;
