import createOrder, { FormValues } from "api/createOrder";
import editOrder from "api/editOrder";
import { OrderProduct } from "models/orderProduct";
import { Product } from "models/product";
import { useMutation } from "react-query";
import getNow from "utils/getNow";

export const useForm = (userId: string, prevValues?: FormValues) => {
  const { mutateAsync: create } = useMutation<unknown, unknown, FormValues>(
    createOrder
  );
  const { mutateAsync: edit } = useMutation<unknown, unknown, FormValues>(
    editOrder
  );

  const onSubmit = (values: FormValues) =>
    prevValues ? edit(values) : create(values);

  const getInitialValues = (): FormValues => {
    if (prevValues) return prevValues;

    return {
      _products: [],
      notes: "",
      status: "OPEN",
      total: 0,
      userId,
      createdOn: getNow(),
      updatedOn: getNow(),
    };
  };

  return {
    onSubmit,
    getInitialValues,
  };
};

export const getInitialProduct = (product: Product): OrderProduct => ({
  price: product.price,
  quantity: 0,
  name: product.name,
  total: 0,
  _id: product._id,
});
