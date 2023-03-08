import { useContext } from "react";
import { CartContext } from "../../../provider/CartContext/CartContext";
import { CartProductCard } from "./CartProductCard/cartProductCard";
import { StyledCartProductList } from "./style";

export function CartProductList() {
  const { productsListCart } = useContext(CartContext);

  console.log(productsListCart);

  return (
    <StyledCartProductList>
      {productsListCart.map((product) => (
        <CartProductCard product={product} />
      ))}
    </StyledCartProductList>
  );
}
