import { useContext } from "react";
import { IProduct } from "../../../provider/ShopContext/@Types";
import { shopContext } from "../../../provider/ShopContext/ShopContext";
import { CartProductCard } from "./CartProductCard/cartProductCard";
import { StyledCartProductList } from "./style";

export function CartProductList() {
  const { productsListCart } = useContext(shopContext);

  console.log(productsListCart);

  return (
    <StyledCartProductList>
      {productsListCart.map((product: IProduct) => (
        <CartProductCard product={product} />
      ))}
    </StyledCartProductList>
  );
}
