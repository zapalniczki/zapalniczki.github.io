import React from "react";
import styled from "styled-components/macro";
import Text from "components/Text";
// import { Product } from "data/products";
import breakpoints from "styles/breakpoints";

type Props = any;

const ProductTile = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <Image />
        <Info>
          <Text as="strong">{props.name}</Text>
          <Text as="p">{props.description}</Text>
        </Info>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  margin-bottom: 30px;

  &:nth-child(5n + 1) {
    padding-left: 0;
  }

  &:nth-child(5n + 5) {
    padding-right: 0;
  }

  ${breakpoints("tablet")`
    &:nth-child(5n + 1) {
      padding-left: 15px;
    }

    &:nth-child(5n + 5) {
      padding-right: 15px;
    }

    &:nth-child(4n + 1) {
      padding-left: 0;
    }

    &:nth-child(4n + 4) {
      padding-right: 0;
    }
  `}

  ${breakpoints("mobile")`
    &:nth-child(4n + 1) {
      padding-left: 15px;
    }

    &:nth-child(4n + 4) {
      padding-right: 15px;
    }

    &:nth-child(2n + 1) {
      padding-left: 0;
    }

    &:nth-child(2n + 2) {
      padding-right: 0;
    }
  `}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-rows: 1fr 100px;
  grid-gap: 20px 0;
`;

const Image = styled.div`
  border: 1px solid lightgray;
  border-radius: ${(props) => props.theme.radii.large};
  width: 100%;
  flex-grow: 1;
  height: 300px;
  grid-area: 1 / 1 / 2 / 1;
`;

const Info = styled.div`
  height: 100%;
  flex-grow: 1;
`;

export default ProductTile;
