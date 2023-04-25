import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const alert = useAlert();
    // useEffect(() => {
    //     const fetchOrder = async () => {
    //         try {
    //             if (user.userData && !user.userData.isAuth) {
    //                 alert.error('please log in first.');
    //                 navigate('/login');
    //                 return;
    //             }
    //             const res = await axios.get('/myOrders');
    //             setOrders(res.data.order);
    //             console.log(res.data.order);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchOrder();
    // }, [user.userData, alert]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                if (user.userData && !user.userData.isAuth) {
                    alert.error('Please log in first.');
                    navigate('/login');
                    return;
                }
                setLoading(true)
                const res = await axios.get('/cart');
                setCartItems(res.data.cartItems);
                setLoading(false)
                console.log(res.data.cartItems[0]);
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchCartItems();
    }, [user.userData, alert]);
    return (    
        <>{loading ? (
            <Loader />
        ) : (
            <section className="h-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-10 col-xl-8">
                            <div className="card" style={{ borderRadius: "10px" }}>
                                <div className="card-header px-4 py-5">
                                    <h5 className="text-muted mb-0">Thanks for your Order, <span style={{ color: "#a8729a" }}>Anna</span>!</h5>
                                </div>
                                <div className="card-body p-4">
                                    {/* <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>Receipt</p>
                                        <p className="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p>
                                    </div> */}
                                    <div className="card shadow-0 border mb-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    {/* {cartItems && cartItems.product.image &&
                                                        cartItems.product.image.map(image => (
                                                            <img src={image.url} alt=""
                                                                className="img-fluid rounded-3" />
                                                        ))} */}
                                                    <img src={cartItems[0].product.images[0].url} alt=""
                                                        className="img-fluid rounded-3" />
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0">{cartItems[0].product.name}</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">White</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Capacity: 64GB</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Qty: 1</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">₹{cartItems[0].product.price}</p>
                                                </div>
                                            </div>
                                            <hr className="mb-4" style={{ backgroundColor: "#e0e0e0 ", opacity: "1" }} />
                                            {/* <div className="row d-flex align-items-center">
                                                <div className="col-md-2">
                                                    <p className="text-muted mb-0 small">Track Order</p>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="progress" style={{ height: "6px", borderRadius: "16px" }}>
                                                        <div className="progress-bar" role="progressbar"
                                                            style={{ width: "1% ", borderRadius: "16px", backgroundColor: "#a8729a" }} aria-valuenow="65"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-around mb-1">
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Order Details</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> ₹{cartItems[0].product.price}</p>
                                    </div>

                                    {/* <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0">Invoice Number : 788152</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Discount</span> $19.00</p>
                                    </div> */}

                                    {/* <div className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">GST 18%</span> 123</p>
                                    </div> */}

                                    <div className="d-flex justify-content-between mb-5">
                                        {/* <p className="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p> */}
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> Free</p>
                                    </div>
                                </div>
                                <div className="card-footer border-0 px-4 py-5"
                                    style={{ backgroundColor: "#a8729a ", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                                    <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                                        paid: <span className="h2 mb-0 ms-2">₹{cartItems[0].product.price}</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}

        </>
    )
}

export default Orders
