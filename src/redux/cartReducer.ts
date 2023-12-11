import { INCREASE_ITEM_QUNTITY } from "./constant";

const CartAction = (data = [], action: any) => {
  switch (action.type) {
    case INCREASE_ITEM_QUNTITY:
      console.log("Inside the cart reducer", action.data);
      return [action.data, ...data];
    default:
      return data;
  }
};
export default CartAction;
