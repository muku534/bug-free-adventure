import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import userReducer from './userReducer'
import { productReducer, ProductDetailsReducers } from "./ProductReducer";
import { cartReducer } from "./cartReducer";
const rootReducer = combineReducers({
    admin: adminReducer,
    user: userReducer,
    product: productReducer,
    ProductDetails: ProductDetailsReducers,
    cart: cartReducer

});

export default rootReducer;