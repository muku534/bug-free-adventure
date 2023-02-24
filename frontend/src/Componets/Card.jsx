import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-3 mt-2">
                        <div className="card" >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <Link to={"/Product"}>
                                    <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/u/k/w/-original-imaggqgcggpau2zr.jpeg?q=70" className="img-fluid" alt='' style={{ height: "210px", width: "300px" }} />
                                </Link>
                                {/* <a href="/Item">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ height: "210px", width: "300px" }} />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ height: "210px", width: "300px" }} />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ maxHeight: "210px", maxWidth: "300px" }} />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ height: "210px", width: "300px" }} />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ height: "210px", width: "300px" }} />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ height: "210px", width: "300px" }} />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                    <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' style={{ height: "210px", width: "300px" }} />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">Lenovo - Flex 3 ChromeBook</h5>
                                <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 ">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="/">
                                <img src="https://m.media-amazon.com/images/I/611DJR7V1sL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid" alt='' />
                                </a>
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined"> star_rate</span>
                                <span className="material-symbols-outlined">star_rate</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                            <h4 className='ml-3'>₹50000</h4>
                            <p className='ml-3' style={{ color: "grey", fontSize: "12px" }}>Ships to india</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
