import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import laptop from '../Images/laptop.png'
import { useSelector } from 'react-redux';
import Loader from './Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const alert = useAlert();
  // useEffect(() => {
  //   const fetchCartItems = async () => {

  //     try {
  //       const res = await axios.get('/cart');
  //       setCartItems(res.data.cartItems);
  //       console.log(res.data.cartItems)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCartItems();
  // }, []);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (user.userData && !user.userData.isAuth) {
          alert.error('Please log in first.');
          navigate('/login');
          return;
        }

        const res = await axios.get('/cart');
        setCartItems(res.data.cartItems);
        console.log(res.data.cartItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, [user.userData, alert]);
  return (
    <><div>
      {/* {loading ? (
        <Loader />
      ) : ( */}

      <section className="h-100 h-custom mt-5" style={{ backgroundColor: "#d2c9ff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h3 className="fw-bold mb-0 text-black">Shopping Cart</h3>
                          <h6 className="mb-0 text-muted">3 items</h6>
                        </div>
                        <hr className="my-4" />

                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            {/* {product && product.images &&
                              product.images.map(image => (
                                <img src={image.url} alt={product.title}
                                  className="img-fluid rounded-3" />
                              ))} */}
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            {/* <h6 className="text-black mb-0">{product.name}</h6> */}
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                              <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value="1" type="number"
                              className="form-control form-control-sm" />

                            <button className="btn btn-link px-2"
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            {/* <h6 className="mb-0">{product.price}</h6> */}
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Back
                            to shop</a></h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items 3</h5>
                          {/* <h5>{product.price}</h5> */}
                        </div>

                        <h5 className="text-uppercase mb-3">Shipping</h5>

                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value="1">Standard-Delivery- 55.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          {/* <h5>{product.price}</h5> */}
                        </div>

                        <Link to={'/CheckOut'}>
                          <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Buy
                            Now</button>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* )} */}
    </div>

    </>
  )
}

export default Cart;
