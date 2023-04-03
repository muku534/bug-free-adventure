import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAILURE = 'PRODUCT_DETAILS_FAILURE';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const ADD_TO_CART = 'ADD_TO_CART';

// action creator for fetching all products
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    const { data } = await axios.get('/getProducts')

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error.respose.data.message,
    });
  }
};



//fetch the product details
export const fetchProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/getSingleProducts/${id}`)


    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });

  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
      payload: error.respose.data.message,
    })
  }
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


//clear Errors

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}