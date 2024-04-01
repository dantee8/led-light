import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  incrementProductQuantity,
  decrementProductQuantity,
} from "../store/productQuantitySlice";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/cartSlice";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.products.products);
  const productQuantities = useSelector((state) => state.productQuantity);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementProductQuantity({ productId }));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementProductQuantity({ productId }));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
  };

  return (
    <div className="grid md:grid-cols-4 gap-3">
      {products &&
        products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onIncrement={() => handleIncrementQuantity(product.id)}
            onDecrement={() => handleDecrementQuantity(product.id)}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
    </div>
  );
};

export default FeaturedProducts;
