import Text from "components/Text";
import React, { ReactNode } from "react";
import styled from "styled-components/macro";

type Props = {
  title: string;
  children?: ReactNode;
};

const TileHeader = (props: Props) => {
  return (
    <Container>
      <Text>{props.title}</Text>
      {props.children}
    </Container>
  );
};

const Container = styled.h3`
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`;

export default TileHeader;
