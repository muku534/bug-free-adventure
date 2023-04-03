export const addToCart = (product, quantity) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice(); // make a copy of the cartItems array

    // Check if the product is already in the cart
    let alreadyInCart = false;
    cartItems.forEach(item => {
        if (item._id === product._id) {
            item.quantity += quantity;
            alreadyInCart = true;
        }
    });

    // If the product is not already in the cart, add it
    if (!alreadyInCart) {
        cartItems.push({
            ...product,
            quantity
        });
    }

    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems }
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
