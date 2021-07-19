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
import Textarea from "components/Textarea";
import { getInitialProduct, useForm } from "./form";
import QueryLoader from "components/QueryLoader";
import { Order } from "models/order";
import Label from "components/Label";
import Select from "components/Select";
import { Product } from "models/product";

type Props = {
  userId: string;
  prevValues?: Order;
};

const OrderForm = ({ userId, prevValues }: Props) => {
  const productsQuery = useQuery("products", getProducts);
  const { onSubmit, getInitialValues } = useForm(userId, prevValues);

  return (
    <QueryLoader query={productsQuery}>
      {(products) => {
        return (
          <Tile>
            <TileHeader title="Formularz zamówienia" />

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
                const noProductSelected = values._products?.length === 0;
                const isAnyQuantityMissing = values._products
                  ?.map((product) => product.quantity !== 0)
                  .includes(false);
                const availableProducts = getAvailableProducts(
                  products,
                  values
                );

                return (
                  <Flexbox
                    flexDirection="column"
                    as="form"
                    onSubmit={handleSubmit}
                  >
                    <Flexbox marginBottom="20px">
                      <Select
                        options={mapProductsToOptions(availableProducts)}
                        onSelect={({ selectedItem }) => {
                          const selectedProduct = availableProducts.find(
                            (product) => product._id === selectedItem?.value
                          );

                          if (!selectedProduct) return null;

                          push("_products", getInitialProduct(selectedProduct));
                        }}
                      />
                      <Button marginLeft="10px" variant="secondary">
                        Przeglądaj produkty
                      </Button>
                    </Flexbox>

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

                      <Box gridArea="1 / 14 / 1 / 16">
                        <Text>Kwota</Text>
                      </Box>
                    </Row>

                    <Separator />

                    <FieldArray<OrderProduct> name="_products">
                      {({ fields }) => (
                        <>
                          {fields.length === 0 ? (
                            <Text textAlign="center">
                              Zamówienie musi zawierać co najmniej 1 produkt.
                            </Text>
                          ) : (
                            fields.map((name, index) => (
                              <ProductRow
                                values={values}
                                index={index}
                                remove={() => fields.remove(index)}
                                name={name}
                                products={products}
                                product={fields.value[index]}
                              />
                            ))
                          )}
                        </>
                      )}
                    </FieldArray>

                    <Separator />

                    <Box width="100%">
                      <Field<FormValues["notes"]> name="notes">
                        {(props) => (
                          <Label marginTop={0} title="Uwagi do zamówienia">
                            <Textarea {...props.input} />
                          </Label>
                        )}
                      </Field>
                    </Box>

                    <Flexbox marginTop="20px" justifyContent="flex-end">
                      <Button
                        disabled={noProductSelected || isAnyQuantityMissing}
                        type="submit"
                      >
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

const mapProductsToOptions = (products: Product[]) =>
  products.map((product) => ({
    value: product._id,
    name: product.name,
  }));

const getAvailableProducts = (products: Product[], values: FormValues) =>
  products.filter((product) => {
    const selectedProducts = values._products?.map(({ _id }) => _id) ?? [];
    return !selectedProducts.includes(product._id);
  });
