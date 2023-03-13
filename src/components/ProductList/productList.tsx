import { IProduct } from "../../provider/ShopContext/@Types";
import { ProductCard } from "./ProductCard/productCard";
import { StyledProductList } from "./style";

interface IProductProps {
  productList: IProduct[];
}

export const ProductList = ({ productList }: IProductProps) => {
  return (
    <StyledProductList>
      {productList.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};
