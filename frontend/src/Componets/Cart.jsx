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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/ProductDetails/${id}`)
      .then((res) => {
        setProduct(res.data.getSingleProducts);
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
        <section className="vh-100" >
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <p><span className="h2">Shopping Cart </span>
                </p>
                {/* <span className="h4">(1 item in your cart)</span> */}
                <div className="card mb-4">
                  <div className="card-body p-4">

                    <div className="row align-items-center">
                      <div className="col-md-2">
                        {product && product.images &&
                          product.images.map(image => (
                            <img className='d-block w-100 ' src={image.url} alt={product.title} />
                          ))}
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Name</p>
                          <p className="lead fw-normal mb-0">{product.name}</p>
                        </div>
                      </div>
                      {/* <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Color</p>
                          <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style="color: #fdd8d2;"></i>
                            pink rose</p>
                        </div>
                      </div> */}
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Quantity</p>
                          <p className="lead fw-normal mb-0">1</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Price</p>
                          <p className="lead fw-normal mb-0">{product.price}</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Total</p>
                          <p className="lead fw-normal mb-0">{product.price}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card mb-5">
                  <div className="card-body p-4">

                    <div className="float-end">
                      <p className="mb-0 me-5 d-flex align-items-center">
                        <span className="small text-muted me-2">Order total:</span> <span
                          className="lead fw-normal">{product.price}</span>
                      </p>
                    </div>

                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
                  <Link to={'/'}>
                    <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
                  </Link>
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
