import React from "react";
import styled from "styled-components";

type Props = {
  src: string;
  rounded?: boolean;
};

const Image = ({ src, rounded = false }: Props) => {
  return <Container src={src} rounded={rounded} />;
};

type ContainerProps = {
  rounded: boolean;
};

const Container = styled.img<ContainerProps>`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.gray3};
  padding: 5px;
  border-radius: ${(props) => props.rounded && "50%"};
`;

export default Image;
