import React, { ReactNode } from "react";
import styled from "styled-components";

export type ChipVariant = "POSITIVE" | "NEUTRAL" | "NEGATIVE";

type Props = {
  children: ReactNode;
  variant?: ChipVariant;
};

const Chip = ({ children, variant = "NEUTRAL" }: Props) => {
  return <Container variant={variant}>{children}</Container>;
};

type ContainerProps = Pick<Props, "variant">;
const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.radii.small};
  padding: 5px 10px;
  color: white;
  cursor: default;
  background-color: ${(props) => {
    if (props.variant === "POSITIVE") {
      return props.theme.colors.green;
    } else if (props.variant === "NEGATIVE") {
      return props.theme.colors.red;
    } else {
      return props.theme.colors.orange;
    }
  }};
`;

export default Chip;
