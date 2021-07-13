import styled from "styled-components";
import React from "react";
import { FieldInputProps } from "react-final-form";

type Props = FieldInputProps<string | undefined>;

const Textarea = (props: Props) => {
  return <Container {...props} />;
};

const Container = styled.textarea`
  width: 200px;
  height: 150px;
`;

export default Textarea;
