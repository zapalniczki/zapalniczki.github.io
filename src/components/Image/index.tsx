import React from "react";
import styled from "styled-components";

type Props = { src: string };
const Image = ({ src }: Props) => {
  return <Container src={src} />;
};

const Container = styled.img`
  width: 100%;
  height: 100%;
`;

export default Image;
