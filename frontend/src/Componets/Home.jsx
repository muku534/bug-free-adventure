import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Actions/productActions';
import Product from './Product';
import Loader from './Loader';
import { useAlert } from 'react-alert';
// import Metadata from './MetaData';


const Home = () => {
    const alert = useAlert;
    const dispatch = useDispatch();

    const { loading, products, error } = useSelector(state => {
        console.log('product state:', state.product.products);
        return state.product;
    });

    useEffect(() => {

        if (error) {
            alert.error(error)
        }

        console.log('Fetching products...')
        dispatch(fetchProducts());

    }, [dispatch, alert, error]);


    // console.log({ loading, products, error });


    return (
        
        <div className="container">
            <div className="row">
                {loading ? (
                    <Loader />
                ) :
                    Array.isArray(products) && products.length > 0 ? (
                        products.map((product) => (
                            <div className="col-md-3" key={product._id}>
                                <Product product={product} />
                            </div>
                        ))) : (<h5>No products to display</h5>
                    )}
            </div>
        </div>
    );
};

export default Home;

