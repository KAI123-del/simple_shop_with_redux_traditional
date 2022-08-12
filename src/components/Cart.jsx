import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../actions/cartActions";

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const removeItemHandler = (product) => {
    dispatch(removeProduct(product));
  };

  const incrementHandler = (product) => {
    dispatch(increaseQuantity(product));
  };

  const decrementHandler = (product) => {
    dispatch(decreaseQuantity(product));
  };

  // ===== the way we use clsx package :

  // clsx("border border-4",{
  //   'hidden': isLoading,
  //   'bg-red-500 block':!isLoading
  // })

  return (
    <div className="px-2 pt-2 mt-4 pb-20 justify-center flex items-center">
      {cart.length > 0 && (
        <div className="w-2/5  shadow-xl rounded-lg">
          {cart.map((item) => (
            <div className="flex justify-center pb-2 w-full border-b-2 border-gray-300">
              <div className="flex justify-center   w-full">
                <div className=" h-44 pt-2 w-44 overflow-hidden  ">
                  <img src={item.image} />
                </div>
                <div className="px-8 pt-3 text-gray-600 tracking-wider font-semibold text-lg  flex flex-col w-2/3    justify-start ">
                  <p className="mb-2">
                    <span className="font-normal">Name :</span>
                    {item.name}
                  </p>
                  <p className="mb-2">
                    <span className="font-normal">Quantity :</span>
                    <span
                      onClick={() => incrementHandler(item)}
                      className=" px-4 text-center ml-2 rounded-full mr-2 text-lg  text-white bg-black hover:text-black hover:bg-gray-200 transition duration-300 hover:shadow-xl">
                      +
                    </span>
                    {item.qty}
                    <span
                      onClick={() => decrementHandler(item)}
                      className=" px-4 text-center ml-2 rounded-full mr-2 text-lg  text-white bg-black hover:text-black hover:bg-gray-200 transition duration-300 hover:shadow-xl">
                      -
                    </span>
                  </p>
                  <p>
                    <span className="font-normal">
                      Price : {item.qty * item.price}
                    </span>
                  </p>
                  <button
                    onClick={() => removeItemHandler(item)}
                    className="w-1/2 py-1 mt-4 rounded-full font-normal hover:bg-gray-200 hover:text-black transition duration-300 tracking-wider bg-black text-white">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {
            <button className="px-6 py-3 w-full hover:bg-rose-200 hover:text-rose-500 transition duration-300 rounded-b-lg mt-4 text-rose-200 font-semibold text-lg tracking-wider bg-rose-500">
              Proceed to payment
            </button>
          }
        </div>
      )}
      {cart.length === 0 && (
        <p className="text-2xl mt-24 text-gray-600 font-semibold tracking-wider">
          Ooops your cart is empty
        </p>
      )}
    </div>
  );
}

export default Cart;
