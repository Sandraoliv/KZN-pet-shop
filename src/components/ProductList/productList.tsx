import { IProduct } from "../../provider/CartContext/@Types";
import { ProductCard } from "./ProductCard/productCard";
import { StyledProductList } from "./style";

interface IProductProps {
  productList: IProduct[];
}

export function ProductList({ productList }: IProductProps) {
  return (
    <div>
      <StyledProductList>
        {productList.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            description={product.description}
            id={product.id}
            category={product.category}

            //   rever
            // product={product}
          />
        ))}
      </StyledProductList>
    </div>
  );
}
