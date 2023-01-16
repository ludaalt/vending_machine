import React from "react";
import styled from "styled-components";

import Vendor from "./components/Vendor";

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("./images/bg.jpg");
`;

const App = () => {
  return (
    <AppWrapper>
      <Vendor />
    </AppWrapper>
  );
};

export default App;
