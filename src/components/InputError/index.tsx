import Flexbox from "components/Flexbox";
import Text from "components/Text";

import React, { ReactNode } from "react";
import { FieldMetaState } from "react-final-form";

type Props<TFormValues> = {
  children: ReactNode;
  meta: FieldMetaState<TFormValues>;
};

function InputError<TFormValues>({ meta, children }: Props<TFormValues>) {
  return (
    <Flexbox flexDirection="column">
      {children}

      {(meta.error || meta.submitError) && (
        <Text color="red">{meta.error || meta.submitError}</Text>
      )}
    </Flexbox>
  );
}

export default InputError;
