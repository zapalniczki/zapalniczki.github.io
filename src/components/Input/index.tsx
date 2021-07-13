import { BUTTON_HEIGHT } from "components/Button";
import { ChangeEventHandler } from "react";
import styled from "styled-components/macro";

type Props = {
  disabled?: boolean;
  min?: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  maxWidth?: string;
};

const Input = ({ maxWidth, ...props }: Props) => {
  return (
    <InputBox maxWidth={maxWidth}>
      <InputStyled {...props}></InputStyled>
    </InputBox>
  );
};

type InputStyledProps = Pick<Props, "maxWidth">;
export const InputBox = styled.div<InputStyledProps>`
  border: 1px solid red;
  height: ${BUTTON_HEIGHT};
  width: min-content;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding: 0 5px;
  border-radius: ${(props) => props.theme.radii.small};
  max-width: ${(props) => props.maxWidth};
  width: 100%;
`;

const InputStyled = styled.input`
  height: 100%;
  background: transparent;
  border: none;
  padding: 0;
  width: 100%;
`;

export default Input;
