import Flexbox from "components/Flexbox";
import Separator from "components/Separator";
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
      <Flexbox alignItems="center" justifyContent="space-between">
        <Text fontSize="18px" fontWeight="600" margin={0} as="h3">
          {props.title}
        </Text>
        {props.children}
      </Flexbox>
      <Separator />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TileHeader;
