import { useContext } from "react";
import { shopContext } from "../../provider/ShopContext/ShopContext";
import { CartProductList } from "./CartProductList/cartProductList";
import { StyledCartModal } from "./style";
import cachorrinhoModal from "../../assets/cachorro_Background_Removed_1.svg";
import { Link } from "react-router-dom";
import { IProduct } from "../../provider/ShopContext/@Types";

export function ModalCart() {
  const { modal, setModal, productsListCart } = useContext(shopContext);

  let totalValue = 0;

  productsListCart.map(
    (product: IProduct) => (totalValue = totalValue + product.price)
  );

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

              <Link className="payment" to="/payment">
                {" "}
                Continuar{" "}
              </Link>
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
