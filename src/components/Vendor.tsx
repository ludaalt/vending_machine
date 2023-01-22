import styled from "styled-components";

import ProductsList from "./ProductsList";

const StyledVendor = styled.div`
  border-radius: 20px;
  width: 400px;
  padding: 25px;
  padding-bottom: 35px;
  padding-top: 10px;
  background-color: rgba(225, 255, 255, 0.7);

  @media (max-width: 1000px) {
    padding: 5px 15px 30px;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;

const Vendor = () => {
  return (
    <StyledVendor>
      <ProductsList />
    </StyledVendor>
  );
};

export default Vendor;
