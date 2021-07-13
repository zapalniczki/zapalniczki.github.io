import { FormValues } from "api/createOrder";
import Box from "components/Box";
import Flexbox from "components/Flexbox";
import Image from "components/Image";
import { InputBox } from "components/Input";
import Row from "components/Row";
import { OrderProduct } from "models/orderProduct";
import { Product } from "models/product";
import ProductSelect from "./ProductSelect";
import QuantitySelect from "./QuantitySelect";

type Props = {
  name: string;
  products: Product[];
  remove: () => void;
  values: FormValues;
  index: number;
  product: OrderProduct;
};

const ProductRow = ({
  product,
  name,
  products,
  remove,
  values,
  index,
}: Props) => {
  const { price, total, _id } = product;
  const thisProduct = products.find((p) => p._id === _id);

  const availableProducts = products.filter((product) => {
    const selectedProducts =
      values._products?.filter((_p, i) => i !== index).map((p) => p._id) ?? [];

    return !selectedProducts.includes(product._id);
  });

  return (
    <Box marginTop="10px" height="150px" style={{ border: "1px solid red" }}>
      <Row key={name}>
        <Flexbox
          style={{ border: "1px solid red" }}
          alignItems="center"
          gridArea="1 / 1 / 1 / 8"
        >
          <Flexbox flexDirection="column">
            <ProductSelect name={name} products={availableProducts} />
            <p>
              <strong>Opis:</strong>
              {thisProduct?.description}
            </p>
          </Flexbox>

          {thisProduct?.picture_url && (
            <Box height="100%" width="auto">
              <Image src={thisProduct.picture_url} />
            </Box>
          )}
        </Flexbox>

        <Flexbox
          style={{ border: "2px solid red" }}
          alignItems="center"
          gridArea="1 / 8 / 1 / 11"
        >
          <InputBox maxWidth="100px">
            <span>{price ? `${price}zł` : ""}</span>
          </InputBox>
        </Flexbox>

        <Flexbox
          style={{ border: "2px solid red" }}
          alignItems="center"
          gridArea="1 / 11 / 1 / 14"
        >
          <QuantitySelect product={product} name={name} />
        </Flexbox>

        <Flexbox alignItems="center" gridArea="1 / 14 / 1 / 16">
          <span>{total ? `${total}zł` : ""}</span>
        </Flexbox>

        <Flexbox alignItems="center" gridArea="1 / 16 / 1 / 17">
          <button
            disabled={values._products?.length === 1}
            onClick={remove}
            style={{ cursor: "pointer" }}
          >
            X
          </button>
        </Flexbox>
      </Row>
    </Box>
  );
};

export default ProductRow;
