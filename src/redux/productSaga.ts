// import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
// import { takeEvery, put } from "redux-saga/effects";

// function* getProductList(): any {
//   let products = yield fetch("https://dummyjson.com/products");
//   products = yield products.json();
//   //setProductList(products);
//   yield put({ type: SET_PRODUCT_LIST, products });
// }

// // function* setProductList(product: any): any {
// //   debugger;
// //   yield put({ type: SET_PRODUCT_LIST, product });
// // }

// function* productSaga() {
//   yield takeEvery(PRODUCT_LIST, getProductList);
// }
// export default productSaga;
// productSaga.ts
import {
  PRODUCT_LIST,
  SEARCH_PRODUCT_LIST,
  SET_PRODUCT_LIST,
} from "./constant";
import { takeEvery, put } from "redux-saga/effects";

function* getProductList(): any {
  try {
    let response = yield fetch("https://dummyjson.com/products");
    let products = yield response.json();
    yield put({ type: SET_PRODUCT_LIST, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    // Handle the error as needed
  }
}
function* getSearchProductList(payload: any): any {
  try {
    let response = yield fetch(
      `https://dummyjson.com/products/search?q=${payload.query}`
    );
    let products = yield response.json();
    yield put({ type: SET_PRODUCT_LIST, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    // Handle the error as needed
  }
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProductList);
  yield takeEvery(SEARCH_PRODUCT_LIST, getSearchProductList);
}

export default productSaga;
