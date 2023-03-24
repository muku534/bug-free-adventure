import React from 'react'
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
} from "mdb-react-ui-kit";

const Product = ({ product }) => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                    <MDBCard>
                        <div className="d-flex justify-content-between p-3">
                            <p className="lead mb-0">Today's Combo Offer</p>
                            <div
                                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "35px", height: "35px" }}
                            >
                                {/* <p className="text-white mb-0 small">x3</p> */}
                            </div>
                        </div>
                        <Link to={`/product/${product._id}`}>
                            <MDBCardImage
                                src={product.images[0].url} alt={product.name}
                                position="top"
                            />
                        </Link>
                        <MDBCardBody>
                            <div className="d-flex justify-content-between">
                                <p className="small">
                                    <Link to={`/product/${product._id}`} className="text-muted">
                                        {product.category}
                                    </Link>
                                </p>
                                <p className="small text-danger">
                                    {/* <s>{product.price}</s> */}
                                    <s>$1399</s>

                                </p>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">{product.name}</h5>
                                <h5 className="text-dark mb-0">{product.price}</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">
                                    Available: <span class="fw-bold">5</span>
                                </p>
                                <div class="ms-auto text-warning">
                                    <MDBIcon fas icon="star" />
                                    <MDBIcon fas icon="star" />
                                    <MDBIcon fas icon="star" />
                                    <MDBIcon fas icon="star" />
                                    <MDBIcon fas icon="star-half-alt" />
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>


        // <div className="col-lg-3 mt-2">
        //     <div className="card">
        //         <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        //             <Link to={`/product/${product._id}`}>
        //                 <img src={product.images[0].url} className="img-fluid" alt={product.name} style={{ height: "210px", width: "300px" }} />
        //             </Link>
        //         </div>
        //         <div className="card-body">
        //             <h5 className="card-title text-truncate">
        //                 <Link to={`/product/${product._id}`}>{product.name}</Link>
        //             </h5>
        //             <p className="card-text text-truncate">{product.description}</p>
        //             <div className="ratings mt-auto">
        //                 <div className="rating-outer">
        //                     <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
        //                 </div>
        //             </div>
        //         </div>
        //         <h4 className="card-text  ml-3">{product.price}</h4>
        //         <p className="card-text   ml-3" style={{ color: "grey", fontSize: "12px" }}>Ships to India</p>
        //         <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
        //     </div>
        // </div>
    )
}

export default Product;
