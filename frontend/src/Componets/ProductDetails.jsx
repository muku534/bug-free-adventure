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
  const user = useSelector(state => state.user);
  const alert = useAlert();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.price);
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

  const addToCartHandler = () => {
    if (user.userData && !user.userData.isAuth) {
      alert.error('Please log in first.');
      navigate('/login');
    } else {
      axios.post('/add-to-cart', { product: product._id, quantity, price })
        .then((res) => {
          setCart([...cart, res.data.cartItem]);
          setPrice(res.data.price)
          alert.success(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


  return (
    <>
      <div className="container">
        <div className="row">
          {loading ? (
            <Loader />
          ) : (
            <div className="super_container">
              <header className="header" style={{ display: "none" }}>
                <div className="header_main">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                        <div className="header_search">
                          <div className="header_search_content">
                            <div className="header_search_form_container">
                              <form action="#" className="header_search_form clearfix">
                                <div className="custom_dropdown">
                                  <div className="custom_dropdown_list"> <span className="custom_dropdown_placeholder clc">All Categories</span> <i className="fas fa-chevron-down"></i>
                                    <ul className="custom_list clc">
                                      <li><a className="clc" href="#">All Categories</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="single_product">
                <div className="container-fluid" style={{ backgroundColor: "#fff", padding: "11px" }}>
                  <div className="row">
                    <div className="col-lg-2 order-lg-1 order-2">
                      <ul className="image_list">
                        {
                          product && product.images &&
                          product.images.map(image => {
                            // <li><img src={image.url}/></li>
                          })
                        }
                      </ul>
                    </div>
                    <div className="col-lg-4 order-lg-2 order-1">
                      {product && product.images &&
                        product.images.map(image => (
                          <img className='d-block w-100 ' src={image.url} alt={product.title} />
                        ))}
                    </div>
                    <div className="col-lg-6 order-3">
                      <div className="product_description">
                        <nav>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Products</a></li>
                            <li className="breadcrumb-item active">Accessories</li>
                          </ol>
                        </nav>
                        <div className="product_name">{product.name}</div>
                        <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span> <span className="rating-review">35 Ratings & 45 Reviews</span></div>
                        <div> <span className="product_price">₹ {product.price}</span> <strike className="product_discount"> <span style={{ color: "black" }}>₹ 2,000</span> </strike> </div>
                        <div> <span className="product_saved">You Saved:</span> <span style={{ color: "black" }}>₹ 2,000</span> </div>
                        <hr className="singleline" />
                        <div> <span className="product_info">EMI starts at ₹ 2,000. No Cost EMI Available</span><br /> <span className="product_info">Warranty: 6 months warranty</span><br /> <span className="product_info">7 Days easy return policy</span><br /> <span className="product_info">7 Days easy return policy</span><br /> <span className="product_info">In Stock: 25 units sold this week</span> </div>
                        <div>
                          <div className="row">
                            <div className="col-md-5">
                              <div className="br-dashed">
                                <div className="row">
                                  <div className="col-md-3 col-xs-3"> <img src="https://img.icons8.com/color/48/000000/price-tag.png" /> </div>
                                  <div className="col-md-9 col-xs-9">
                                    <div className="pr-info"> <span className="break-all">Get 5% instant discount + 10X rewards @ RENTOPC</span> </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7"> </div>
                          </div>
                          {/* <div className="row" style={{ marginTop: "15px" }}>
                            <div className="col-xs-6" style={{ marginLeft: "15px" }}> <span className="product_options">RAM Options</span><br /> <button className="btn btn-primary btn-sm">4 GB</button> <button className="btn btn-primary btn-sm">8 GB</button> <button className="btn btn-primary btn-sm">16 GB</button> </div>
                            <div className="col-xs-6" style={{ marginLeft: "55px" }}> <span className="product_options">Storage Options</span><br /> <button className="btn btn-primary btn-sm">500 GB</button> <button className="btn btn-primary btn-sm">1 TB</button> </div>
                          </div> */}
                        </div>
                        <hr className="singleline" />
                        <div className="order_info d-flex flex-row">

                        </div>
                        <div className="row">
                          <div className="col-xs-6" style={{ marginLeft: "13px" }}>
                            <div className="product_quantity"> <span>QTY: </span> <input id="quantity_input" type="text" pattern="[0-9]*" value="1" />
                              <div className="quantity_buttons">
                                <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up"></i></div>
                                <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down"></i></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-6"> <button type="submit" className="btn btn-primary shop-button" onClick={addToCartHandler}>Add to Cart</button>
                            <Link to={'/CheckOut'}>
                              <button type="button" className="btn btn-success shop-button " style={{ marginLeft: "5px" }}>Buy Now</button>
                            </Link>
                            <div className="product_fav"><i className="fas fa-heart"></i></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* <div className="row row-underline">
                    <div className="col-md-6"> <span className=" deal-text">Combo Offers</span> </div>
                    <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all"></span> </a> </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="row padding-2">
                        <div className="col-md-5 padding-0">
                          <div className="bbb_combo">
                            <div className="bbb_combo_image"><img className="bbb_combo_image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                            <div className="d-flex flex-row justify-content-start"> <strike style={{ color: "red" }}> <span className="fs-10" style={{ color: "black" }}>₹ 32,000<span> </span></span></strike> <span className="ml-auto"><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i></span> </div>
                            <div className="d-flex flex-row justify-content-start" style={{ marginBottom: "13px" }}> <span style={{ marginTop: "-4px" }}>₹30,000</span> <span className="ml-auto fs-10">23 Reviews</span> </div> <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                          </div>
                        </div>
                        <div className="col-md-2 text-center"> <span className="step">+</span> </div>
                        <div className="col-md-5 padding-0">
                          <div className="bbb_combo">
                            <div className="bbb_combo_image"><img className="bbb_combo_image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                            <div className="d-flex flex-row justify-content-start"> <strike style={{ color: "red" }}> <span className="fs-10" style={{ color: "black" }}>₹ 32,000<span> </span></span></strike> <span className="ml-auto"><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i></span> </div>
                            <div className="d-flex flex-row justify-content-start" style={{ marginBottom: "13px" }}> <span style={{ marginTop: "-4px" }}>₹30,000</span> <span className="ml-auto fs-10">23 Reviews</span> </div> <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12" style={{ marginLeft: "36px" }}>
                          <div className="boxo-pricing-items">
                            <div className="combo-pricing-item"> <span className="items_text">1 Item</span> <span className="combo_item_price">₹13,200</span> </div>
                            <div className="combo-plus"> <span className="plus-sign">+</span> </div>
                            <div className="combo-pricing-item"> <span className="items_text">1 Add-on</span> <span className="combo_item_price">₹500</span> </div>
                            <div className="combo-plus"> <span className="plus-sign">=</span> </div>
                            <div className="combo-pricing-item"> <span className="items_text">Total</span> <span className="combo_item_price">₹13,700</span> </div>
                            <div className="add-both-cart-button"> <button type="button" className="btn btn-primary shop-button">Add to Cart</button> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 text-center"> <span className="vertical-line"></span> </div>
                    <div className="col-md-5" style={{ marginLeft: "-27px" }}>
                      <div className="row padding-2">
                        <div className="col-md-5 padding-0">
                          <div className="bbb_combo">
                            <div className="bbb_combo_image"><img className="bbb_combo_image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                            <div className="d-flex flex-row justify-content-start"> <strike style={{ color: "red" }}> <span className="fs-10" style={{ color: "black" }}>₹ 32,000<span> </span></span></strike> <span className="ml-auto"><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating p-rating"></i><i className="fa fa-star p-rating"></i></span> </div>
                            <div className="d-flex flex-row justify-content-start" style={{ marginBottom: "13px" }}> <span style={{ marginTop: "-4px" }}>₹30,000</span> <span className="ml-auto fs-10">23 Reviews</span> </div> <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                          </div>
                        </div>
                        <div className="col-md-2 text-center"> <span className="step">+</span> </div>
                        <div className="col-md-5 padding-0">
                          <div className="bbb_combo">
                            <div className="bbb_combo_image"><img className="bbb_combo_image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                            <div className="d-flex flex-row justify-content-start"> <strike style={{ color: "red" }}> <span className="fs-10" style={{ color: "black" }}>₹ 32,000<span> </span></span></strike> <span className="ml-auto"><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i></span> </div>
                            <div className="d-flex flex-row justify-content-start" style={{ marginBottom: "13px" }}> <span style={{ marginTop: "-4px" }}>₹30,000</span> <span className="ml-auto fs-10">23 Reviews</span> </div> <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12" style={{ marginLeft: "36px" }}>
                          <div className="boxo-pricing-items">
                            <div className="combo-pricing-item"> <span className="items_text">1 Item</span> <span className="combo_item_price">₹13,200</span> </div>
                            <div className="combo-plus"> <span className="plus-sign">+</span> </div>
                            <div className="combo-pricing-item"> <span className="items_text">1 Add-on</span> <span className="combo_item_price">₹500</span> </div>
                            <div className="combo-plus"> <span className="plus-sign">=</span> </div>
                            <div className="combo-pricing-item"> <span className="items_text">Total</span> <span className="combo_item_price">₹13,700</span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="row row-underline">
                    <div className="col-md-6"> <span className=" deal-text">Specifications</span> </div>
                    <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all"></span> </a> </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <table className="col-md-12">
                        <tbody>
                          <tr className="row mt-10">
                            <td className="col-md-4"><span className="p_specification">Sales Package :</span> </td>
                            <td className="col-md-8">
                              <ul>
                                <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="row mt-10">
                            <td className="col-md-4"><span className="p_specification">Model Number :</span> </td>
                            <td className="col-md-8">
                              <ul>
                                <li> 14-dh0107TU </li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="row mt-10">
                            <td className="col-md-4"><span className="p_specification">Part Number :</span> </td>
                            <td className="col-md-8">
                              <ul>
                                <li>7AL87PA</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="row mt-10">
                            <td className="col-md-4"><span className="p_specification">Color :</span> </td>
                            <td className="col-md-8">
                              <ul>
                                <li>Black</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="row mt-10">
                            <td className="col-md-4"><span className="p_specification">Suitable for :</span> </td>
                            <td className="col-md-8">
                              <ul>
                                <li>Processing & Multitasking</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="row mt-10">
                            <td className="col-md-4"><span className="p_specification">Processor Brand :</span> </td>
                            <td className="col-md-8">
                              <ul>
                                <li>Intel</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
