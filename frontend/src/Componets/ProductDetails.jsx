import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsDetails, } from '../Actions/productActions';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {

  const [cart, setCart] = useState([]);

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/ProductDetails/${id}`)
      .then((res) => {
        setProduct(res.data.getSingleProducts);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const increaseQty = () => {
    const count = document.querySelector('.count')

    if (!count || count.valueAsNumber >= product.stock) return;

    const qty = count.valueAsNumber + 1;
    setQuantity(qty)
  }


  const decreaseQty = () => {
    const count = document.querySelector('.count')

    if (!count || count.valueAsNumber <= 1) return;

    const qty = count.valueAsNumber - 1;
    setQuantity(qty)
  }



  const addToCart = () => {
    const productToAdd = { ...product._id, quantity };
    setCart((prevCart) => [...prevCart, productToAdd]);
    // localStorage.setItem('cartItems', JSON.stringify(cart));
    // console.log(productToAdd)
    navigate('/Cart')
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div className="container">
        <div className="row">
          {loading ? (
            <Loader />
          ) : (
            <div className="col-lg-12">
              <div className="app">
                <div className="details">
                  <div className="img-fluid">
                    {product && product.images &&
                      product.images.map(image => (
                        <img className='d-block w-100 ' src={image.url} alt={product.title} />
                      ))}
                  </div>

                  <div className="box">
                    <div className="row">
                      <h2>{product.name}</h2>
                      <span>${product.price}</span>
                      {/* <h2>Mr.Mukesh</h2> */}

                    </div>

                    <p>
                      <b>Available at a lower price from other sellers that may not offer free Prime shipping.</b>
                      <br />
                      Capacity : 11.6
                      <br />
                      Style : Laptop Only
                      <br />
                      Color : Blizzard White
                      <br />
                      Brand : Lenovo
                      <br />
                      Series : Ideapad Flex 3 Chromebook
                      <br />
                      Screen Size : 11.6
                      <br />
                      Color : Blizzard White
                      <br />
                      Hard Disk Size : 64 GB
                      <br />
                      CPU Model : Mediatek Mt8173C
                      <br />
                      Ram Memory Installed Size : 4 GB
                    </p>

                    <div className="thumb">
                      {product.images &&
                        product.images.map((image, index) => (
                          <img key={index} src={image.url} alt={product.name} />
                        ))}
                    </div>
                    <div className='stockCounter d-inline-block'>
                      <span className='btn btn-danger minus' onClick={decreaseQty}>-</span>

                      <input type="number" className='d-inline-block ml-2 ' style={{ width: "35px", border: "none", marginLeft: "5px", justifyContent: "center", alignItems: "center" }} value={quantity} readOnly />
                      <span className='btn btn-primary plus' onClick={increaseQty}>+</span>

                    </div> <br />
                    <Link to={'/Cart'}>
                      <button className="cart" type="submit" onClick={addToCart}>
                        Add to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
