import { INCREASE_ITEM_QUNTITY } from "./constant";

export const increaseQuntity = (data: any) => {
  return {
    type: INCREASE_ITEM_QUNTITY,
    data,
  };
};
