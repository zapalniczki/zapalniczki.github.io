import Text from "components/Text";
import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components/macro";
import { space, SpaceProps } from "styled-system";

type Props = {
  variant?: Variant;
} & ButtonCommonProps;

const Button = ({
  variant = "primary",
  children,
  disabled = false,
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
      <Text>{children}</Text>
    </Container>
  );
};

export const BUTTON_HEIGHT = "35px";

type ContainerProps = Required<Pick<Props, "variant" | "disabled">>;
const Container = styled.button<ContainerProps>`
  height: ${BUTTON_HEIGHT};
  border: none;
  padding: 5px;
  min-width: 150px;
  border-radius: ${(props) => props.theme.radii.small};
  cursor: pointer;

  background: ${(props) => {
    if (props.disabled) return props.theme.colors.gray7;
    return props.theme.colors[variantToBackground[props.variant]];
  }};
  color: ${(props) => {
    if (props.disabled) return props.theme.colors.white;
    return props.theme.colors[variantToColor[props.variant]];
  }};

  ${space};
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

export type ButtonCommonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
} & SpaceProps;

export default Button;
