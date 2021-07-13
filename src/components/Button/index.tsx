import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { space, SpaceProps } from "styled-system";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
} & SpaceProps;

const Button = ({
  variant = "primary",
  children,
  disabled,
  onClick,
  type,
  ...props
}: Props) => {
  return (
    <Container
      variant={variant}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Container>
  );
};

export const BUTTON_HEIGHT = "35px";

type ContainerProps = Required<Pick<Props, "variant">>;
const Container = styled.button<ContainerProps>`
  height: ${BUTTON_HEIGHT};
  border: none;
  padding: 5px;
  min-width: 150px;
  border-radius: ${(props) => props.theme.radii.small};

  background: ${(props) =>
    props.theme.colors[variantToBackground[props.variant]]};
  color: ${(props) => props.theme.colors[variantToColor[props.variant]]};

  ${space}
`;

const variantToBackground: Record<Variant, string> = {
  primary: "blue1",
  secondary: "blue2",
};

const variantToColor: Record<Variant, string> = {
  primary: "white",
  secondary: "blue",
};

type Variant = "primary" | "secondary";

export default Button;
