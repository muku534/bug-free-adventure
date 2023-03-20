const initialState = {
  products: [], // List of all products
  loading: false,
  error: null
};

const productReducer = (state = initialState, action) => {
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
        products: action.payload.products
        // error: null
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
