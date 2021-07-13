import React from "react";
import styled from "styled-components/macro";
import breakpoints from "styles/breakpoints";
import ProductTile from "./ProductTile";

const Products = () => {
  return (
    <Container>
      {/* {products.map((product) => {
        return <ProductTile {...product} />;
      })} */}
    </Container>
  );
};

const Container = styled.div`
  grid-template-columns: repeat(5, 1fr);
  display: grid;
  min-height: 200px;

  ${breakpoints("tablet")`
    grid-template-columns: repeat(4, 1fr);
  `}

  ${breakpoints("mobile")`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export default Products;
