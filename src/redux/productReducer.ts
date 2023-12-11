import { DECREASE_ITEM_QUNTITY, SET_PRODUCT_LIST } from "./constant";

const ProductList = (state: any = [], action: any) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return action.products;
    default:
      return state;
  }
};

export default ProductList;
