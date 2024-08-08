import products from "../products.json";
import ProductContainer from "./ProductContainer";
import Navbar from "./Navbar";

const ProductComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="grid mobile:grid-cols-2   tablet:grid-cols-3 mobile:w-full desktop:grid-col-5 mt-16">
        {products.map((product) => (
          <ProductContainer
            key={product.id}
            product={product}
            images={product.images}
            price={product.price}
            id={product.id}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
