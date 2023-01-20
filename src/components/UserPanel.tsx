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
  max-width: 40%;
  min-height: 60vh;
  padding: 30px;
  transition: all 5s ease;
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
