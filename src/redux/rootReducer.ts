//more than one reducer and action in one project
//rootReducer register all reducer in one file
import { combineReducers } from "redux";
import CartData from "./reducer";
import ProductList from "./productReducer";
import CartAction from "./cartReducer";

export default combineReducers({
  CartData,
  ProductList,
  CartAction,
});
