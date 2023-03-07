import { Header } from "../../components/Header/header";
import { StyledShop } from "./style";
import { FiArrowRight } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../provider/CartContext/CartContext";
import { ProductList } from "../../components/ProductList/productList";
import { IProduct } from "../../provider/CartContext/@Types";
import cachorrinhoMobile from "../../assets/cachorroMobile.svg";
import cachorrinho from "../../assets/cachorro-e-gato-3D.svg";

import instituicao1 from "../../assets/Instituicoes/amigosdesaofrancisco_2.svg";
import instituicao2 from "../../assets/Instituicoes/clubedosviralatas_2.svg";
import instituicao3 from "../../assets/Instituicoes/gatopoleslogo_2.svg";
import instituicao4 from "../../assets/Instituicoes/logo-laranja_edited_edited_edited_2.svg";
import instituicao5 from "../../assets/Instituicoes/logotipo_2.svg";
import instituicao6 from "../../assets/Instituicoes/mundodosgatosadocao_2.svg";

export function ShopPage() {
  const { productList, setProductList, loadProductList } =
    useContext(CartContext);

  const [coleiras, setColeiras] = useState([]);
  const [brinquedos, setBrinquedos] = useState([]);
  const [acessorios, setAcessorios] = useState([]);

  useEffect(() => {
    loadProductList();
  }, []);

  useEffect(() => {
    const coleiras = productList.filter((product) => {
      return product.category === "Coleiras";
    });
    setColeiras(coleiras);

    const brinquedos = productList.filter((product) => {
      return product.category === "Brinquedo";
    });

    setBrinquedos(brinquedos);

    const acessorios = productList.filter((product) => {
      return product.category === "Produtos para Pet";
    });

    setAcessorios(acessorios);
  }, [productList]);

  return (
    <StyledShop>
      <Header />

      <div className="blueBall"></div>

      <div className="greenBall"></div>

      <div className="orangeBall"></div>
      <section className="banner">
        {/* decidir */}
        {/* <div className="input">
          <input type="text" />
        </div> */}

        <div className="paragraph">
          <p>Produtos de alta qualidade para seu pet pensando em todos</p>
          <span>
            Venha conhecer e nos ajudar nessa causa que aquece o coração
          </span>
        </div>

        <div className="img__container--desktop">
          <img src={cachorrinho} alt="" />
        </div>
        <div className="tags">
          <span>Frete gratis para todo o Brasil</span>
          <span>30% do faturamento da nossa loja é doado</span>
        </div>
        <a href="/#footer " className="buttonArrow">
          <p>Instituições beneficiadas</p>
          <div>
            <FiArrowRight />
          </div>
        </a>

        <div className="img__container--mobile">
          <img src={cachorrinhoMobile} alt="" />
        </div>
      </section>

      <main>
        {/* <div className="tags">
          <div>
            <span>frete gratis para todo o Brasil</span>
          </div>
          <span>30% do faturamento da nossa loja é doada</span>
        </div> */}
        <h2>SHOP</h2>
        <div>
          <h2>COLEIRAS</h2>
          {coleiras.length > 0 ? <ProductList productList={coleiras} /> : null}
        </div>

        <div>
          <h2>BRINQUEDOS</h2>
          {brinquedos.length > 0 ? (
            <ProductList productList={brinquedos} />
          ) : null}
        </div>

        <div>
          <h2>BRINQUEDOS</h2>
          {brinquedos.length > 0 ? (
            <ProductList productList={brinquedos} />
          ) : null}
        </div>

        <div>
          <h2>ACESSÓRIOS</h2>
          {acessorios.length > 0 ? (
            <ProductList productList={acessorios} />
          ) : null}
        </div>
        <footer id="footer">
          <div>
            <img src={instituicao1} alt="" />
            <img src={instituicao4} alt="" />
            <img src={instituicao2} alt="" />
            <img src={instituicao3} alt="" />
            <img src={instituicao5} alt="" />
            <img src={instituicao6} alt="" />
          </div>

          <p>
            Mime seu pet e ainda ajuda na causa de instuições para que elas
            possam mimar todods os outros pets{" "}
          </p>
          <span>
            Toda porcentagem arrecadada será destinada à instituições focadas em
            pets
          </span>

          <section>MAIS DE R$ 100.00,00 EM DOAÇÕES</section>
        </footer>
      </main>
    </StyledShop>
  );
}
