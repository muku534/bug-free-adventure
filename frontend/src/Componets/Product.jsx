import React from 'react'
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    return (

        <div className="card" style={{ border: "none", }}>
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ maxHeight: "210px", maxWidth: "300px" }}>
                <Link to={`/ProductDetails/${product._id}`} >
                    <i class="fas fa-heart" ></i>
                    <img src={product.images[0].url} className="img-fluid" alt={product.name} style={{ width: "300px" }} />
                </Link>
            </div>
            <div className="card-body">
                <h5 className="card-title text-truncate">
                    <Link to={`/ProductDetails/${product._id}`} className="nav-link">{product.name}</Link>
                </h5>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                        <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                    </div>
                </div>
            </div>
            <h4 className="card-text  ml-3">{product.price}</h4>
            <p className="card-text   ml-3" style={{ color: "grey", fontSize: "12px" }}>Ships to India</p>
            <Link to={`/ProductDetails/${product._id}`} id="view_btn" className="btn btn-block">View Details </Link>
        </div>

    )
}

export default Product;
