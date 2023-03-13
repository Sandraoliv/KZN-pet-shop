import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { IProduct, IProductProps } from "../../../provider/ShopContext/@Types";
import { shopContext } from "../../../provider/ShopContext/ShopContext";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { StyledProductCard } from "./stsyle";
import Button from "@mui/material/Button";

export const ProductCard = ({ product }: IProductProps) => {
  const {
    productList,
    productsListCart,
    setProductsListCart,
    setCurrentProduct,
    deleteProductState,
    setDeleteProductState,
    uptadeProductState,
    setUptadeProductState,
    modalADM,
    setModalADM,
  } = useContext(shopContext);

  const { user } = useContext(UserContext);

  const addToCart = (product: IProduct) => {
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
        localStorage.setItem("@ListCart", JSON.stringify(newProduct));

        toast.success(
          `Item ${product.name} adicionado ao carrinho com sucesso`
        );
      }
    });
  };

  const handleUptadeProductState = (productprops: IProduct) => {
    setCurrentProduct(productprops);
    setUptadeProductState(!uptadeProductState);
    setModalADM(!modalADM);
  };

  const handleDeleteProductState = (productprops: IProduct) => {
    setCurrentProduct(productprops);
    setDeleteProductState(!deleteProductState);
    setModalADM(!modalADM);
  };

  return (
    <StyledProductCard user={user}>
      <div className="img__container">
        <img src={product.img} alt="" />
      </div>
      <h3>{product.name}</h3>
      <div className="prices__container">
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      {user?.is_admin ? (
        <div className="buttons">
          <button
            onClick={() => handleUptadeProductState(product)}
            className="editar"
            type="button"
          >
            {" "}
            Editar
          </button>
          <button
            onClick={() => handleDeleteProductState(product)}
            className="deletar"
            type="button"
          >
            {" "}
            Deletar
          </button>
        </div>
      ) : (
        <Button
          type="button"
          className="addToCart"
          onClick={() => addToCart(product)}
          variant="contained"
        >
          adicionar ao carrinho
        </Button>
      )}
    </StyledProductCard>
  );
};
