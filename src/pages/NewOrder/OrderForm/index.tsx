import React from "react";
import Tile from "components/Tile";
import { Field, Form } from "react-final-form";
import Flexbox from "components/Flexbox";
import arrayMutators from "final-form-arrays";
import { useQuery } from "react-query";
import { FormValues } from "api/createOrder";
import TileHeader from "components/TileHeader";
import Box from "components/Box";
import Row from "components/Row";
import Text from "components/Text";
import Separator from "components/Separator";
import getProducts from "api/orders/getProducts";
import { OrderProduct } from "models/orderProduct";
import Button from "components/Button";
import ProductRow from "./ProductRow";
import { FieldArray } from "react-final-form-arrays";
import Input from "components/Input";
import Textarea from "components/Textarea";
import { getInitialProduct, useForm } from "./form";
import QueryLoader from "components/QueryLoader";
import { Order } from "models/order";

type Props = {
  userId: string;
  prevValues?: Order;
};

const OrderForm = ({ userId, prevValues }: Props) => {
  const productsQuery = useQuery("products", getProducts);
  const { onSubmit, getInitialValues } = useForm(userId, prevValues);

  console.log(prevValues);

  return (
    <QueryLoader query={productsQuery}>
      {(products) => {
        return (
          <Tile>
            <TileHeader title="Formularz zamówienia" />

            <Flexbox alignItems="center" marginY="20px">
              <Input value="" onChange={() => undefined} />
              <Button variant="secondary" marginLeft="10px">
                alfa
              </Button>
            </Flexbox>

            <Form<FormValues>
              onSubmit={onSubmit}
              initialValues={getInitialValues()}
              mutators={{
                ...arrayMutators,
              }}
            >
              {({
                values,
                handleSubmit,
                form: {
                  mutators: { push },
                },
              }) => {
                const disableAdding = values._products
                  ?.map((product) => !!product._id && !!product.quantity)
                  .includes(false);

                const selectedProductsCount = values._products
                  ?.map((product) => !!product._id)
                  .filter((id) => id).length;

                const isMoreProductAvailable =
                  products.length > (selectedProductsCount ?? 0);

                const isAnyProductCompleted =
                  values._products
                    ?.map((product) => !!product._id && !!product.quantity)
                    .filter((val) => !val).length !== 0;

                return (
                  <Flexbox
                    style={{ border: "1px solid red" }}
                    flexDirection="column"
                    as="form"
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Box gridArea="1 / 1 / 1 / 8">
                        <Text>Produkt</Text>
                      </Box>

                      <Box gridArea="1 / 8 / 1 / 11">
                        <Text>Cena za sztukę</Text>
                      </Box>

                      <Box gridArea="1 / 11 / 1 / 14">
                        <Text>Ilość</Text>
                      </Box>

                      <Box gridArea="1 / 14 / 1 / 17">
                        <Text>Kwota</Text>
                      </Box>
                    </Row>
                    <Separator />

                    <FieldArray<OrderProduct> name="_products">
                      {({ fields }) => (
                        <>
                          {fields.map((name, index) => (
                            <ProductRow
                              values={values}
                              index={index}
                              remove={() => fields.remove(index)}
                              name={name}
                              products={products}
                              product={fields.value[index]}
                            />
                          ))}
                        </>
                      )}
                    </FieldArray>

                    <Box marginTop="20px">
                      {isMoreProductAvailable ? (
                        <Button
                          variant="secondary"
                          type="button"
                          disabled={disableAdding}
                          onClick={() => push("_products", getInitialProduct())}
                        >
                          Dodaj Produkt
                        </Button>
                      ) : (
                        <span>Zostały wybrane wszystkie dostepne produkty</span>
                      )}
                    </Box>

                    <Text>Uwagi do zamownia</Text>
                    <Field<FormValues["notes"]> name="notes">
                      {(props) => <Textarea {...props.input} />}
                    </Field>

                    <Flexbox
                      marginTop="20px"
                      style={{ border: "1px solid red" }}
                      justifyContent="flex-end"
                    >
                      <Button disabled={isAnyProductCompleted} type="submit">
                        Wyślij
                      </Button>
                    </Flexbox>
                  </Flexbox>
                );
              }}
            </Form>
          </Tile>
        );
      }}
    </QueryLoader>
  );
};

export default OrderForm;
