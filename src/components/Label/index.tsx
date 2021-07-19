import Text from "components/Text";
import { ReactNode } from "react";
import { space, SpaceProps } from "styled-system";
import styled from "styled-components/macro";

type Props = {
  children: ReactNode;
  title: string;
} & SpaceProps;

const Label = ({ children, title, ...props }: Props) => (
  <Container {...props}>
    <Text marginBottom="5px">{title}</Text>
    {children}
  </Container>
);

const Container = styled.label`
  display: flex;
  margin-top: 10px;
  flex-direction: column;

  ${space}
`;
export default Label;
