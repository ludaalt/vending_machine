import React from "react";
import styled from "styled-components";

import ProductsProvider from "./context/productsContext";
import Vendor from "./components/Vendor";
import UserPanel from "./components/UserPanel";

const AppWrapper = styled.div`
  padding: 30px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  background-image: url("./images/bg.jpg");
  background-size: cover;

  @media (max-width: 1000px) {
    gap: 50px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const App = (): JSX.Element => {
  return (
    <ProductsProvider>
      <AppWrapper>
        <Vendor />
        <UserPanel />
      </AppWrapper>
    </ProductsProvider>
  );
};

export default App;
