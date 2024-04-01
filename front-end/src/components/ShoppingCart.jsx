import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/cartSlice";

const ShoppingCart = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity({ id: productId }));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity({ id: productId }));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Toggle visibility state
  };

  return (
    <div className="relative border-2 border-blue-300 rounded p-1 text-sm">
      <button onClick={toggleVisibility}> Cart</button> {/* Cart icon/button */}
      {isVisible && ( // Render cart only if isVisible is true
        <div className="absolute text-white   right-9 border-2  bg-blue-400 rounded p-2">
          <h2 className="text-center">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className=" flex flex-col mt-5 items-center">
              {cartItems.map((item) => (
                <li className="w-full" key={item.id}>
                  <div className="flex items-center  text-center justify-between gap-20">
                    <h3 className=" text-nowrap w-full ">{item.name}</h3>
                    <div className="flex items-center ">
                      <button onClick={() => handleDecrement(item.id)}>
                        -
                      </button>
                      <h3 className=" items-center w-40">
                        Quantity : {item.quantity}
                      </h3>
                      <button onClick={() => handleIncrement(item.id)}>
                        +
                      </button>
                    </div>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                  <hr className="border-[1px] w-full my-2" />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
