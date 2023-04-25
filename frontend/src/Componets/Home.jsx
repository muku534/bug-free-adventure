import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Actions/productActions';
import Product from './Product';
import Loader from './Loader';
import { useAlert } from 'react-alert';
// import Metadata from './MetaData';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);

    const getData = () => {
        axios
            .get(`http://localhost:5000/getProducts`)
            .then((res) => {
                setProducts(res.data.Products);
                setLoading(false);
                // console.log(res.data.Products)
            })
            .catch((err) => {
                console.log(err);
            });
    };


    React.useEffect(getData, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const productsCount = products.length;

    return (

        <section style={{ backgroundColor: "#eee", }}>
            <div className="container">
                <div className="row">
                    <h5>Todays Best Deals For You!</h5>
                    {loading ? (
                        <Loader />
                    ) :
                        Array.isArray(products) && products.length > 0 ? (
                            currentProducts.map((product, id) => (
                                <div key={product._id} className="col-md-12 col-lg-3 mb-4 mb-lg-0 mt-4">
                                    <Link to={`/ProductDetails/${product._id}`} className="nav-link">
                                        <Product product={product} />
                                    </Link>
                                </div>
                            )))
                            : (<h5>No products to display</h5>
                            )}
                    {/* {products.map((product, index) => (
                    <Product key={index} product={product} />
                )
                )} */}
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <nav>
                        <ul className="pagination">
                            {Array.from({ length: Math.ceil(productsCount / productsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
                                <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                                    <a onClick={() => paginate(pageNumber)} href="#" className="page-link">
                                        {pageNumber}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Home;

