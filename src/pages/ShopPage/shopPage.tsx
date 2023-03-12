import { Header } from "../../components/Header/headerShop/headerShop";
import { StyledShop } from "./style";
import { FiArrowRight } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { shopContext } from "../../provider/ShopContext/ShopContext";
import { ProductList } from "../../components/ProductList/productList";
import cachorrinhoMobile from "../../assets/cachorroMobile.svg";
import cachorrinho from "../../assets/cachorro-e-gato-3D.svg";
import { UserContext } from "../../provider/UserContext/UserContext";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { EmptyList } from "../../components/EmptyList/emptyList";
import { DeleteProductModal } from "../../components/DeleteProductModal/deleteProductModal";
import { CompanyeCard } from "../../components/CompanyeCard/companyeCard";
import { StyledModal } from "../../styles/styleModal";
import { AddProductForm } from "../../components/Form/AddProductForm/addProductForm";
import { UpdateProductForm } from "../../components/Form/UpdateProductForm/updateProductForm";
import { AddCompanyeForm } from "../../components/Form/AddCompanyeForm/addCompanyeForm";

export function ShopPage() {
  const {
    addCompanyeState,
    setAddCompanyeState,
    deleteProductState,
    uptadeProductState,
    addProductState,
    setAddProductState,
    productList,
    loadProductList,
    coleiras,
    setColeiras,
    brinquedos,
    setBrinquedos,
    acessorios,
    setAcessorios,
    tokenState,
    setTokenState,
    loadCompanyes,
    companyes,
    modalADM,
    loading,
    setModalADM,
  } = useContext(shopContext);

  const { user } = useContext(UserContext);
  let token = localStorage.getItem("@token");
  const navigate = useNavigate();

  useEffect(() => {
    loadProductList();
    loadCompanyes();
    console.log(user);

    if (tokenState) {
      setTokenState(true);
    }
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

  useEffect(() => {
    if (token == null && user?.is_admin == true) {
      navigate("/login");
      toast.error("Você deve estar logado para acessar essa página !!");
    }
  }, []);

  function handleAddProductState() {
    setAddProductState(!addProductState);
    setModalADM(!modalADM);
  }

  function handleAddCompanyeState() {
    setAddCompanyeState(!addCompanyeState);
    setModalADM(!modalADM);
  }

  return (
    <StyledShop token={tokenState}>
      <Header />

      <div className="blueBall"></div>

      <div className="greenBall"></div>

      <div className="orangeBall"></div>

      <section className="banner">
        <div className="paragraph">
          <p>Produtos de alta qualidade para seu pet pensando em todos</p>
          <span>
            Venha conhecer e nos ajudar nessa causa que aquece o coração
          </span>

          {/* quando clica a pagina quebra */}
          <a href="/#footer " className="buttonArrow">
            <p>Instituições beneficiadas</p>
            <div>
              <FiArrowRight />
            </div>
          </a>
        </div>

        <div className="img__container--desktop">
          <img src={cachorrinho} alt="" />
        </div>

        <div className="tags">
          <span>Frete gratis para todo o Brasil</span>
          <span>30% do faturamento da nossa loja é doado</span>
        </div>

        <div className="img__container--mobile">
          <img src={cachorrinhoMobile} alt="" />
        </div>
      </section>

      <main>
        <div className="ShopTittle">
          <h2>SHOP</h2>
          {user?.is_admin ? (
            <MdAdd onClick={() => handleAddProductState()} />
          ) : null}
        </div>
        <div className="category">
          <>
            <h2>COLEIRAS</h2>
            {loading ? (
              <div className="loading">
                {" "}
                <p>Carregando...</p>{" "}
              </div>
            ) : coleiras.length > 0 ? (
              <ProductList productList={coleiras} />
            ) : (
              <EmptyList />
            )}
          </>
        </div>
        <div className="category">
          <>
            <h2>BRINQUEDOS</h2>
            {loading ? (
              <div className="loading">
                <p>Carregando...</p>
              </div>
            ) : brinquedos.length > 0 ? (
              <ProductList productList={brinquedos} />
            ) : (
              <EmptyList />
            )}
          </>
        </div>
        <div className="category">
          <>
            <h2>ACESSÓRIOS</h2>

            {loading ? (
              <div className="loading">
                <p>Carregando...</p>
              </div>
            ) : acessorios.length > 0 ? (
              <ProductList productList={acessorios} />
            ) : (
              <EmptyList />
            )}
          </>
        </div>
        <footer id="footer">
          <div>
            <h2>Instituições beneficiadas</h2>

            {user.is_admin ? (
              <MdAdd onClick={() => handleAddCompanyeState()} />
            ) : null}
          </div>

          <div className="companyes">
            {loading ? (
              <div className="loading">
                <p>Carregando...</p>
              </div>
            ) : (
              <div>
                {companyes.length > 0 ? (
                  companyes.map((companye) => (
                    <CompanyeCard key={companye.id} companye={companye} />
                  ))
                ) : (
                  <p> Ainda estamos contatando as instituições =/</p>
                )}
              </div>
            )}
          </div>

          <p>
            Mime seu pet e ainda ajuda na causa de instuições para que elas
            possam mimar todods os outros pets{" "}
          </p>
          <span>
            Toda porcentagem arrecadada será destinada à instituições focadas em
            pets
          </span>

          <section>MAIS DE R$ 100.000,000 EM DOAÇÕES</section>
        </footer>
      </main>

      {modalADM ? <StyledModal /> : null}

      {addProductState ? <AddProductForm /> : null}

      {uptadeProductState ? <UpdateProductForm /> : null}

      {deleteProductState ? <DeleteProductModal /> : null}

      {addCompanyeState ? <AddCompanyeForm /> : null}
    </StyledShop>
  );
}
