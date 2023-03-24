import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import laptop from '../Images/laptop.png';
import Loader from './Loader';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, clearError } from '../Actions/productActions';

const SingleProduct = ({ match }) => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, Products } = useSelector(state => state.ProductDetails)


  useEffect(() => {
    dispatch(fetchProducts(match.params.id))

    if (error) {
      alert.error(error);
      dispatch(error)
    }

  }, [dispatch, alert, error, match.params.id])

  return (
    <>
      <div className="container">
        <div className="row">
          {loading ? <Loader /> : (
            <div className="col-lg-12">
              <div className="app">
                <div className="details" >
                  <div className="big-img">
                    <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/u/k/w/-original-imaggqgcggpau2zr.jpeg?q=70" alt="" />
                  </div>

                  <div className="box">
                    {Products && (
                      <div className="row">
                        <h2>{Products.name}</h2>
                        <span>$178.00 </span>
                      </div>
                    )}
                    <p><b>Available at a lower price from other sellers that may not offer free Prime shipping. </b><br />
                      Capacity : 11.6 <br />
                      Style : Laptop Only <br />
                      Color : Blizzard White <br />
                      Brand :	Lenovo <br />
                      Series :	Ideapad Flex 3 Chromebook <br />
                      Screen Size :	11.6 <br />
                      Color :	Blizzard White <br />
                      Hard Disk Size :	64 GB <br />
                      CPU Model :	Mediatek Mt8173C <br />
                      Ram Memory Installed Size :	4 GB </p>
                    <p></p>

                    <div className="thumb">
                      <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/u/k/w/-original-imaggqgcggpau2zr.jpeg?q=70" alt="" />
                      <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/u/k/w/-original-imaggqgcggpau2zr.jpeg?q=70" alt="" />
                      <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/u/k/w/-original-imaggqgcggpau2zr.jpeg?q=70" alt="" />
                      <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/u/k/w/-original-imaggqgcggpau2zr.jpeg?q=70" alt="" />
                    </div>
                    <Link to={"/Cart"}><button className="cart" type='submit'>Add to cart</button></Link>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

    </>
  )
}

export default SingleProduct;
