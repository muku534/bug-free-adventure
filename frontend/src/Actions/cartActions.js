import axios from 'axios'
import { ADD_TO_CART } from '../redux/reducers/cartReducer '

export const addItemsToCart = (id,product, quantity) => (dispatch, getState) => {
    const { data } = axios.get(`http://localhost:5000/ProductDetails/${id}`)

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product_id,
            name: data.product.name,
            price: data.product.price,
            images: data.product.images[0].url,
            stock: data.product.stock,
            quantity

        }
    })

    localStorage.setItem('carItems', json.stringfy(getState().cart.cartItems))
}