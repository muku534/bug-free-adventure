import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import laptop from '../Images/laptop.png'
import { useSelector } from 'react-redux';
import Loader from './Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cart = () => {
  // const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [addToCart, setAddToCart] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/add-to-cart/${id}`)
      .then((res) => {
        setAddToCart(res.data);
        console.log(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <><div>
      {loading ? (
        <Loader />
      ) : (
        // <div className="container">
        //   <div className="row">
        //     <div className="col-lg-12">
        //       <section className="vh-100" >
        //         <div className="container h-100">
        //           <div className="row d-flex justify-content-center align-items-center h-100">
        //             <div className="col">
        //               <p><span className="h4">Shopping Cart </span>
        //               </p>
        //               {/* <span className="h4">(1 item in your cart)</span> */}
        //               <div className="card mb-4">
        //                 <div className="card-body p-4">

        //                   <div className="row align-items-center">
        //                     <div className="col-md-2">
        //                       {product && product.images &&
        //                         product.images.map(image => (
        //                           <img className='d-block w-100 ' src={image.url} alt={product.title} />
        //                         ))}
        //                     </div>
        //                     <div className="col-md-2 d-flex justify-content-center">
        //                       <div>
        //                         <p className="small text-muted mb-4 pb-2">Name</p>
        //                         <p className="lead fw-normal mb-0">{product.name}</p>
        //                       </div>
        //                     </div>
        //                     {/* <div className="col-md-2 d-flex justify-content-center">
        //                 <div>
        //                   <p className="small text-muted mb-4 pb-2">Color</p>
        //                   <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style="color: #fdd8d2;"></i>
        //                     pink rose</p>
        //                 </div>
        //               </div> */}
        //                     <div className="col-md-2 d-flex justify-content-center">
        //                       <div>
        //                         <p className="small text-muted mb-4 pb-2">Quantity</p>
        //                         <p className="lead fw-normal mb-0">1</p>
        //                       </div>
        //                     </div>
        //                     <div className="col-md-2 d-flex justify-content-center">
        //                       <div>
        //                         <p className="small text-muted mb-4 pb-2">Price</p>
        //                         <p className="lead fw-normal mb-0">{product.price}</p>
        //                       </div>
        //                     </div>
        //                     <div className="col-md-2 d-flex justify-content-center">
        //                       <div>
        //                         <p className="small text-muted mb-4 pb-2">Total</p>
        //                         <p className="lead fw-normal mb-0">{product.price}</p>
        //                       </div>
        //                     </div>
        //                   </div>

        //                 </div>
        //               </div>

        //               <div className="card mb-5">
        //                 <div className="card-body p-4">

        //                   <div className="float-end">
        //                     <p className="mb-0 me-5 d-flex align-items-center">
        //                       <span className="small text-muted me-2">Order total:</span> <span
        //                         className="lead fw-normal">{product.price}</span>
        //                     </p>
        //                   </div>

        //                 </div>
        //               </div>

        //               <div className="d-flex justify-content-end">
        //                 <Link to={'/Orders'}>
        //                   <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
        //                 </Link>
        //                 <Link to={'/'}>
        //                   <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
        //                 </Link>
        //               </div>

        //             </div>
        //           </div>
        //         </div>
        //       </section>
        //     </div>
        //   </div>
        // </div>
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
                              {product && product.images &&
                                product.images.map(image => (
                                  <img src={image.url} alt={product.title}
                                    className="img-fluid rounded-3" />
                                ))}
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">Shirt</h6>
                              <h6 className="text-black mb-0">{product.name}</h6>
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
                              <h6 className="mb-0">{product.price}</h6>
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
                            <h5>{product.price}</h5>
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
                            <h5>{product.price}</h5>
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
      )}

    </div>

    </>
  )
}

export default Cart;
