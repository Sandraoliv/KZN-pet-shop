import { IProduct } from "../../../../provider/ShopContext/@Types";
import { StyledCartProductCard } from "./styles";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { useContext } from "react";
import { shopContext } from "../../../../provider/ShopContext/ShopContext";
import { toast } from "react-toastify";
interface IProductProps {
  product: IProduct;
}

export function CartProductCard({ product }: IProductProps) {
  const { productsListCart, setProductsListCart } = useContext(shopContext);

  function removeToCart(id: number, name: string) {
    const newCart = productsListCart.filter(
      (product: IProduct) => product.id != id
    );
    setProductsListCart(newCart);
    localStorage.setItem("@ListCart", JSON.stringify(newCart));
    toast.success(`Produto ${name} removido com sucesso`);
  }

  return (
    <StyledCartProductCard>
      <img src={product.img} alt="" />
      <div>
        <span>{product.name}</span>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <div>
        <RiDeleteBin6Line
          onClick={() => removeToCart(product.id, product.name)}
        />
      </div>
    </StyledCartProductCard>
  );
}
