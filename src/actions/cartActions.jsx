import { CART_ADD_ITEM, CART_QUANTITY_DECREMENT, CART_QUANTITY_INCREMENT, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addProduct = (product) => async (dispatch, getState) => {
  console.log('actions line 4',product)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      ...product,
    },
  });

  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
};

export const removeProduct = (product)=>async(dispatch,getState)=>{
    console.log('actions',product)
    dispatch({type:CART_REMOVE_ITEM,payload:{...product}});
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const increaseQuantity=(product)=>async(dispatch,getState)=>{
    dispatch({type:CART_QUANTITY_INCREMENT,payload:{...product}})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const decreaseQuantity=(product)=>async (dispatch,getState)=>{
    dispatch({type:CART_QUANTITY_DECREMENT,payload:{...product}})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}