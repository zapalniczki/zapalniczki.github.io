import { Field, useForm } from "react-final-form";
import { Product } from "models/product";
import { FormApi } from "final-form";

type Props = {
  name: string;
  products: Product[];
};
const ProductSelect = ({ name, products }: Props) => {
  const form = useForm();

  return (
    <Field name={`${name}._id`}>
      {({ input }) => {
        return (
          <select
            value={input.value}
            onChange={(e) => {
              const product = products.find(
                (product) => product._id === e.target.value
              );
              if (!product) throw new Error("error");

              resetAllFields(form, name, product);

              input.onChange(e.target.value);
            }}
          >
            <option value="" disabled>
              --Please choose an option--
            </option>
            {products.map((product, index) => (
              <option key={index} value={product._id}>
                {product.name}
              </option>
            ))}
          </select>
        );
      }}
    </Field>
  );
};

const resetAllFields = (
  form: FormApi<Record<string, any>, Partial<Record<string, any>>>,
  name: string,
  product: Product
) => {
  form.change(`${name}.price`, product.price);
  form.change(`${name}._id`, product._id);
  form.change(`${name}.name`, product.name);
  form.change(`${name}.quantity`, 0);
  form.change(`${name}.total`, 0);
};

export default ProductSelect;
