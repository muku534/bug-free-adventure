const initialState = {
    user: null,
    isAuthenticated: false,
    profile: [],
    products: [],
    cart: [],
    orders: [],
    loading: false,
    error:null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP_REQUEST":
        return{
          ...state,
          loading:true,
          profile:null
        }
      case "SIGNUP_SUCCESS":
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case "SIGNIN_SUCCESS":
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case "VIEW_PROFILE_SUCCESS":
        return {
          ...state,
          profile: action.payload,
        };
      case "UPDATE_PROFILE_SUCCESS":
        return {
          ...state,
          profile: action.payload,
        };
      case "UPDATE_PASSWORD_SUCCESS":
        return state;
      case "VIEW_PRODUCTS_SUCCESS":
        return {
          ...state,
          products: action.payload,
        };
      case "ADD_TO_CART":
        const existingCartItem = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (existingCartItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };
      case "BUY_PRODUCT_SUCCESS":
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
      case "FETCH_ORDERS_SUCCESS":
        return {
          ...state,
          orders: action.payload,
        };
      case "GIVE_REVIEW_SUCCESS":
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.productId
              ? { ...product, reviews: [...product.reviews, action.payload.review] }
              : product
          ),
        };
      case "SIGNOUT":
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          profile: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  