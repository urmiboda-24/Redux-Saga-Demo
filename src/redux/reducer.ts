import {
  ADD_TO_CART,
  CART_DATA_LIST,
  DECREASE_ITEM_QUNTITY,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "./constant";

const CartData = (data = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      if (data.length > 0) {
        let newData = data.filter((item) => item != action.data);
        return newData;
      } else {
        return [];
      }
    case DECREASE_ITEM_QUNTITY:
      let removed = false;

      const result = data.filter((item: any) => {
        if (item === action.data && !removed) {
          // Remove only the first occurrence of the value
          removed = true;
          return false;
        }
        // Keep all other elements
        return true;
      });
      return result;
    case CART_DATA_LIST:
      return data;
    case EMPTY_CART:
      return [];
    default:
      return data;
  }
};
export default CartData;
