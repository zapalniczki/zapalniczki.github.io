import { ButtonCommonProps } from "./Button";
import { LinkStyleButton } from "./Link";

type Props = ButtonCommonProps;

const TextButton = (props: Props) => {
  return <LinkStyleButton {...props} />;
};

export default TextButton;
