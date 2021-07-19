import styled from "styled-components";
import Tile from "./Tile";

type Props = {
  variant: "fail" | "success";
};

const ResultScreen = ({ variant }: Props) => {
  return <Container variant={variant}>Result</Container>;
};

type ContainerProps = Pick<Props, "variant">;
const Container = styled(Tile)<ContainerProps>`
  min-height: 400px;
  border: 3px solid;
  border-color: ${(props) => {
    if (props.variant === "fail") {
      return props.theme.colors.red;
    }

    return props.theme.colors.green;
  }};
`;

export default ResultScreen;
