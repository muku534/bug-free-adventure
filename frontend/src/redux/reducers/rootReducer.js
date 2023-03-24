import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import userReducer from './userReducer'
import productReducer from "./ProductReducer";
const rootReducer = combineReducers({
    // admin : adminReducer,
    // user : userReducer,
    product: productReducer
});

export default rootReducer;