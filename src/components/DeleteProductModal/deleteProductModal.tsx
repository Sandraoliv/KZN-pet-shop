import { useContext } from "react";
import { shopContext } from "../../provider/ShopContext/ShopContext";
import { StyledModalDeleteProduct } from "./style";

export function DeleteProductModal() {
  const { currentProduct, deleteProduct, closeModalADM } =
    useContext(shopContext);

  function handleDelete() {
    deleteProduct(currentProduct?.id);
  }

  return (
    <StyledModalDeleteProduct>
      <div>
        <h2>{currentProduct?.name}</h2>
        <span onClick={() => closeModalADM()}>X</span>
        <p>Deseja realmente deletar o produto {currentProduct?.name}?</p>
        <button type="button" onClick={() => handleDelete()}>
          Deletar
        </button>
      </div>
    </StyledModalDeleteProduct>
  );
}
