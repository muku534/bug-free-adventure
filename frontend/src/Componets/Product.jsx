import React from 'react'
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    return (

        <div class="card" style={{border:"none" ,borderReduis:"15px"}}>
            <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                    class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}>
                    <p class="text-white mb-0 small">{product.stock}</p>
                </div>
            </div>
            <Link to={`/ProductDetails/${product._id}`}>
                <img src={product.images[0].url}
                    class="card-img-top" alt="" />
            </Link>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted">{product.category}</a></p>
                    {/* <p class="small text-danger"><s>${product.price}</s></p> */}
                </div>
                <Link to={`/ProductDetails/${product._id}`} style={{ textDecoration:"none"}}>
                    <div class="d-flex justify-content-between mb-3">
                        <h5 class="mb-0" style={{color:"black"}}>{product.name}</h5>
                        <h5 class="text-dark mb-0">${product.price}</h5>
                    </div>
                </Link>

                <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">Available: <span class="fw-bold">{product.stock}</span></p>
                    <div class="ms-auto text-warning">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;
