import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

// action creator for fetching all products
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    axios.get('/getProducts')
      .then((response) => {
        const products = response.data;
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: products,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          payload: error.respose.data.message,
        });
      });
  };
};

// action creator for adding a product
export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });

    axios.post('/Product', product)
      .then((response) => {
        const newProduct = response.data;
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: newProduct,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_FAILURE,
          payload: error.message,
        });
      });
  };
};
