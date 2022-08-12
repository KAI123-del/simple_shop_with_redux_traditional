import {
  CART_ADD_ITEM,
  CART_QUANTITY_DECREMENT,
  CART_QUANTITY_INCREMENT,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      let item = { ...action.payload, qty: 1 };
      const existingItem = state.cartItems.find((x) => x._id === item._id);
      if (existingItem) {
        item = {
          ...existingItem,
          qty: existingItem.qty + 1,
        };
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === item._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      let itemToBeRemoved = action.payload;
      console.log(itemToBeRemoved);
      const existingCartItem = state.cartItems.filter(
        (x) => x._id !== itemToBeRemoved._id
      );
      return {
        ...state,
        cartItems: [...existingCartItem],
      };

    case CART_QUANTITY_INCREMENT:
      let quantityItem = { ...action.payload };
      console.log("payload", quantityItem);
      const existingQuantity = state.cartItems.find(
        (x) => x._id === quantityItem._id
      );
      if (existingQuantity) {
          quantityItem = {
            ...quantityItem,
            qty: existingQuantity.qty + 1,
          };
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x._id === existingQuantity._id ? quantityItem : x
            ),
          };
        
      } 
    case CART_QUANTITY_DECREMENT:
        let decrementItem={
            ...action.payload
        }
        const existingItemToDecrement=state.cartItems.find((x)=>x._id===decrementItem._id);
        if(existingItemToDecrement.qty>=2){
            decrementItem={
                ...decrementItem,
                qty:existingItemToDecrement.qty-1
            }
            return {
                ...state,
                cartItems:state.cartItems.map((x)=>x._id===existingItemToDecrement._id ? decrementItem : x)
            }
        
        }
        if(existingItemToDecrement.qty<2){
           return {
            ...state,
            cartItems:state.cartItems.filter((x)=>x._id !== existingItemToDecrement._id)
           }
        }
        

    default:
      return state;
  }
};
