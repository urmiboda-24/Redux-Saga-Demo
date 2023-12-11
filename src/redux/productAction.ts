import {
  DECREASE_ITEM_QUNTITY,
  PRODUCT_LIST,
  SEARCH_PRODUCT_LIST,
} from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const searchProductList = (query: string) => {
  return {
    type: SEARCH_PRODUCT_LIST,
    query,
  };
};
