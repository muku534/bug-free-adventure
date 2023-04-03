import {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../../Actions/productActions";

const initialState = {
  products: [], // List of all products
  loading: false,
  error: null
};

export const productReducer = (state = { Products: [] }, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
        products: []
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        // products: action.payload.productsCount,
        loading: false,
        products: action.payload,
        error: null
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// export default productReducer;

export const ProductDetailsReducers = (state = { Product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loding: true
      }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        // ...state,
        loding: false,
        product: action.payload
      }
    case PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
};
