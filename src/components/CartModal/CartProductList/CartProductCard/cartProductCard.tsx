import { IProduct } from "../../../../provider/ShopContext/@Types";
import { StyledCartProductCard } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { shopContext } from "../../../../provider/ShopContext/ShopContext";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";

interface IProductProps {
  product: IProduct;
}

export const CartProductCard = ({ product }: IProductProps) => {
  const { productsListCart, setProductsListCart } = useContext(shopContext);

  const removeToCart = (id: number, name: string) => {
    const newCart = productsListCart.filter(
      (product: IProduct) => product.id != id
    );
    setProductsListCart(newCart);
    localStorage.setItem("@ListCart", JSON.stringify(newCart));
    toast.success(`Produto ${name} removido com sucesso`);
  };

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
        <IconButton className="icon" aria-label="add to shopping cart">
          <DeleteIcon onClick={() => removeToCart(product.id, product.name)} />
        </IconButton>
      </div>
    </StyledCartProductCard>
  );
};
