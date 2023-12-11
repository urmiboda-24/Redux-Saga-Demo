//import { createStore } from "redux";// const dummyReducer = () => {
//   console.log("Inside store");
//   return 100;
// };
// export const store = createStore(() => {
//   return 100;
// });

// export const store = createStore(() => {
//   our reducer
// });

//export const Store = createStore(dummyReducer);
// export const Store = createStore(rootReducer);

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
// import productSaga from "./productSaga";
// import createSagaMiddleware from "redux-saga";

// const sagaMiddleware = createSagaMiddleware();

// // export const Store = configureStore({
// //   reducer: rootReducer,
// // });
// const Store = configureStore({
//   reducer: rootReducer,
//   middleware: [sagaMiddleware],
// });
// sagaMiddleware.run(productSaga);
// export default Store;
// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import rootReducer from "./rootReducer";
// import productSaga from "./productSaga";

// const sagaMiddleware = createSagaMiddleware();

// const Store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     sagaMiddleware,
//   ],
// });

// sagaMiddleware.run(productSaga);

// export default Store;
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";

// import productSaga from "./productSaga";
// import rootReducer from "./rootReducer";
// // Create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// // Mount it on the Store
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// // Run the saga
// sagaMiddleware.run(productSaga);

// export default store;
import { Middleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import logger from "redux-logger";

const sagaMiddleware: any = createSagaMiddleware();

const customMiddleware: Middleware<{}, any, any>[] = [
  logger as Middleware,
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => {
    const middlewares = getDefaultMiddleware({
      thunk: false,
    }).concat(customMiddleware);
    return middlewares;
  },
});
sagaMiddleware.run(productSaga);
export default store;
