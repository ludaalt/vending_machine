import styled from "styled-components";

import ProductsList from "./ProductsList";

const StyledVendor = styled.div`
  border-radius: 20px;
  width: 400px;
  padding: 25px;
  padding-bottom: 35px;
  background-color: rgba(225, 255, 255, 0.7);
`;

const Vendor = () => {
  return (
    <StyledVendor>
      <ProductsList />
    </StyledVendor>
  );
};

export default Vendor;
