import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddProducts from './AddProducts'
const Products = () => {

    return (
        <>
            <div class="card-footer clearfix">
                <Link to={'/AddProducts'} > <button type="button" class="btn btn-primary float-right" ><i class="fas fa-plus"></i> Add item</button> </Link>
            </div>
            <hr style={{ marginBottom: 50 }} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-2  ">
                        <div className="card " style={{ maxWidth: "300px", maxHeight: "500px" }} >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <Link to={"/Product"}>
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ maxHeight: "210px", maxWidth: "200px" }} />
                                </Link>
                                {/* <a href="/Item">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                {/* <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span> */}
                            </div>
                            <h4 className='ml-3 mt-3'>$500</h4>
                            <p className='ml-3 mt-2' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2">
                        <div className="card" style={{ maxWidth: "300px", maxHeight: "500px" }} >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <Link to={"/Product"}>
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ maxHeight: "210px", maxWidth: "200px" }} />
                                </Link>
                                {/* <a href="/Item">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                {/* <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span> */}
                            </div>
                            <h4 className='ml-3'>$500</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2">
                        <div className="card" style={{ maxWidth: "300px", maxHeight: "500px" }} >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <Link to={"/Product"}>
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ maxHeight: "210px", maxWidth: "200px" }} />
                                </Link>
                                {/* <a href="/Item">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                {/* <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span> */}
                            </div>
                            <h4 className='ml-3'>$500</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2">
                        <div className="card" style={{ maxWidth: "300px", maxHeight: "500px" }} >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <Link to={"/Product"}>
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ maxHeight: "210px", maxWidth: "200px" }} />
                                </Link>
                                {/* <a href="/Item">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                {/* <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span> */}
                            </div>
                            <h4 className='ml-3'>$500</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2">
                        <div className="card" style={{ maxWidth: "300px", maxHeight: "500px" }} >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <Link to={"/Product"}>
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ maxHeight: "210px", maxWidth: "200px" }} />
                                </Link>
                                {/* <a href="/Item">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                {/* <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span> */}
                            </div>
                            <h4 className='ml-3'>$500</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2">
                        <div className="card" style={{ maxWidth: "300px", maxHeight: "500px" }} >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <Link to={"/Product"}>
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ maxHeight: "210px", maxWidth: "200px" }} />
                                </Link>
                                {/* <a href="/Item">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                {/* <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span> */}
                            </div>
                            <h4 className='ml-3'>$500</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2">
                        <div className="card" style={{ maxWidth: "300px", maxHeight: "500px" }} >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <Link to={"/Product"}>
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ maxHeight: "210px", maxWidth: "200px" }} />
                                </Link>
                                {/* <a href="/Item">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                {/* <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span> */}
                            </div>
                            <h4 className='ml-3'>$500</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Products;
