import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from 'redux-thunk';
import adminReducer from "./redux/reducers/adminReducer";
import userReducer from "./redux/reducers/userReducer";
import { productReducer, ProductDetailsReducers } from "./redux/reducers/ProductReducer";

const rootReducer = combineReducers({
  admin: adminReducer,
  user: userReducer,
  product: productReducer,
  ProductDetails: ProductDetailsReducers
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production' ? composeWithDevTools() : undefined,
});

export default store;
