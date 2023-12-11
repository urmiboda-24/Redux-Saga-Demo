import {
  ADD_TO_CART,
  CART_DATA_LIST,
  DECREASE_ITEM_QUNTITY,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "./constant";

export const addToCart = (data: any) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const removeFromCart = (data: any) => {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const decreaseQuntity = (data: any) => {
  return {
    type: DECREASE_ITEM_QUNTITY,
    data,
  };
};

export const cartDataList = () => {
  return {
    type: CART_DATA_LIST,
  };
};
