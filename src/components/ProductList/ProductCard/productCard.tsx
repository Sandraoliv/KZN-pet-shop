import { useContext } from "react";
import { toast } from "react-toastify";
import { IProduct } from "../../../provider/CartContext/@Types";
import { CartContext } from "../../../provider/CartContext/CartContext";
import { StyledProductCard } from "./stsyle";

export function ProductCard(product: IProduct) {
  //   rever

  const { productList, productsListCart, setProductsListCart } =
    useContext(CartContext);

  function addToCart(product: IProduct) {
    let aux = true;

    productsListCart?.map((sameProduct) => {
      if (sameProduct.id == product.id) {
        toast.warn(`${product.name} já está no carrinho`);
        aux = false;
      }
    });

    productList.map((sameProduct) => {
      if (product.id == sameProduct.id && aux == true) {
        const newProduct = [...productsListCart, product];
        setProductsListCart(newProduct);
        toast.success(
          `Item ${product.name} adicionado ao carrinho com sucesso`
        );
      }
    });
  }
  return (
    <StyledProductCard>
      <div className="img__container">
        <img src={product.img} alt="" />
        <div className="card__hover">
          <button type="button">adicionar produto ao carrinho</button>
        </div>
      </div>
      <h3>{product.name}</h3>
      <div className="prices__container">
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        {/* <button onClick={() => addToCart(product)} type="button">
          adicionar produto ao carrinho
        </button> */}
      </div>
    </StyledProductCard>
  );
}
