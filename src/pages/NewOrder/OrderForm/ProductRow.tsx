import { FormValues } from "api/createOrder";
import Box from "components/Box";
import Flexbox from "components/Flexbox";
import Image from "components/Image";
import { InputBox } from "components/Input";
import Link from "components/Link";
import Row from "components/Row";
import Text from "components/Text";
import TextButton from "components/TextButton";
import { OrderProduct } from "models/orderProduct";
import { Product } from "models/product";
import QuantitySelect from "./QuantitySelect";

type Props = {
  name: string;
  products: Product[];
  remove: () => void;
  values: FormValues;
  product: OrderProduct;
};

const ProductRow = ({ product, name, products, remove, values }: Props) => {
  const { price, total, _id } = product;
  const thisProduct = products.find((p) => p._id === _id);

  return (
    <Box marginTop="20px">
      <Row key={name}>
        <Flexbox alignItems="center" gridArea="1 / 1 / 1 / 8">
          {thisProduct?.picture_url && (
            <Box
              height="100px"
              minWidth="100px"
              maxWidth="100px"
              marginRight="20px"
            >
              <Image src={thisProduct.picture_url} />
            </Box>
          )}

          <Flexbox flexDirection="column">
            <Link to="/">{thisProduct?.name}</Link>
          </Flexbox>
        </Flexbox>

        <Flexbox alignItems="center" gridArea="1 / 8 / 1 / 11">
          <InputBox maxWidth="100px">
            <Text padding="0 5px">{price ? `${price}zł` : ""}</Text>
          </InputBox>
        </Flexbox>

        <Flexbox alignItems="center" gridArea="1 / 11 / 1 / 14">
          <QuantitySelect product={product} name={name} />
        </Flexbox>

        <Flexbox alignItems="center" gridArea="1 / 14 / 1 / 16">
          <span>{total ? `${total}zł` : ""}</span>
        </Flexbox>

        <Flexbox alignItems="center" gridArea="1 / 16 / 1 / 17">
          <TextButton
            disabled={values._products?.length === 1}
            onClick={(event) => {
              event.preventDefault();
              remove();
            }}
          >
            X
          </TextButton>
        </Flexbox>
      </Row>
    </Box>
  );
};

export default ProductRow;
