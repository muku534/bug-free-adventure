const initialState = {
    user: null, // Admin user object
    isAuthenticated: false, // Whether the user is authenticated or not
    products: [], // List of products
    orders: [], // List of orders
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case "SIGNIN":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case "UPDATE_PROFILE_SUCCESS":
            return {
                ...state,
                user: action.payload,
            };
        case "CHANGE_PASSWORD_SUCCESS":
            return {
                ...state,
                user: action.payload,
            };

        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            ...action.payload.updatedFields,
                        };
                    }
                    return product;
                }),
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload.id
                ),
            };
        case "FETCH_ORDERS_SUCCESS":
            return {
                ...state,
                orders: action.payload,
            };
        case "UPDATE_ORDER_STATUS":
            const updatedOrders = state.orders.map((order) => {
                if (order.id === action.payload.id) {
                    return {
                        ...order,
                        status: action.payload.status,
                    };
                } else {
                    return order;
                }
            });
            return {
                ...state,
                orders: updatedOrders,
            };
        case "SIGNOUT":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default adminReducer;
