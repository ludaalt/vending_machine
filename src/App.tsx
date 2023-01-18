import React from "react";
import styled from "styled-components";

import ProductsProvider from "./context/productsContext";
import Vendor from "./components/Vendor";
import UserPanel from "./components/UserPanel";

const AppWrapper = styled.div`
  padding: 30px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  background-image: url("./images/bg.jpg");
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
