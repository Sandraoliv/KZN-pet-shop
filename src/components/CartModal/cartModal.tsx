import { useContext } from "react";
import { CartContext } from "../../provider/CartContext/CartContext";
import { CartProductList } from "./CartProductList/cartProductList";
import { StyledCartModal } from "./style";
import cachorrinhoModal from "../../assets/cachorro_Background_Removed_1.svg";

export function ModalCart() {
  const { modal, setModal } = useContext(CartContext);
  const { productsListCart, setProductsListCart } = useContext(CartContext);

  let totalValue = 0;

  productsListCart.map((product) => (totalValue = totalValue + product.price));

  console.log(totalValue);

  return (
    <StyledCartModal>
      <div>
        {productsListCart.length > 0 ? (
          <>
            <div>
              <h2>CARRINHO</h2>
              <span className="closeModal" onClick={() => setModal(!modal)}>
                X
              </span>
            </div>
            <CartProductList />
            <div className="prices">
              <div>
                <h2>TOTAL</h2>
                <span>
                  {totalValue.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>

              <button type="button">Continuar</button>
            </div>
          </>
        ) : (
          <div className="emptyCart">
            <div>
              <p>seu carrinho está vazio. Adicione produtos</p>
            </div>
            <div>
              <img className="cachorrinhoModal" src={cachorrinhoModal} alt="" />
            </div>
            <button type="button" onClick={() => setModal(!modal)}>
              SHOP
            </button>
          </div>
        )}
      </div>
    </StyledCartModal>
  );
}
