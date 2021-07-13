import { OrderProduct } from "models/orderProduct";
import React from "react";
import { Field, useForm } from "react-final-form";
import round from "lodash/round";
import Input from "components/Input";

type Props = {
  name: string;
  product: OrderProduct;
};

const QuantitySelect = ({ name, product }: Props) => {
  const form = useForm();

  return (
    <Field name={`${name}.quantity`}>
      {({ input }) => (
        <Input
          maxWidth="100px"
          disabled={!product._id}
          min="1"
          type={"number"}
          {...input}
          onChange={({ target: { value } }) => {
            const total = product.price * parseInt(value);
            form.change(`${name}.total`, round(total, 2));

            const newValue = value === "" ? "0" : value;
            input.onChange(parseInt(newValue));
          }}
        />
      )}
    </Field>
  );
};

export default QuantitySelect;
