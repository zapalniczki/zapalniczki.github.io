import Text from "components/Text";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  return (
    <Text marginY="20px" as="h4">
      {children}
    </Text>
  );
};

export default SectionTitle;
