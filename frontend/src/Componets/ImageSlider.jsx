import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Laptop from '../Images/Laptop.webp'
import Slider2 from '../Images/Slider2.png'


export default function ImageSlider() {
    return (
        <>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center mt-4 ">
                        <Carousel>
                            <Carousel.Item interval={2800}>
                                <img
                                    className="d-block w-100"
                                    src={Slider2}
                                    alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item interval={2800}>
                                <img
                                    className="d-block w-100"
                                    src={Slider2}
                                    alt="Second slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item interval={2800}>
                                <img
                                    className="d-block w-100"
                                    src={Slider2}
                                    alt="Second slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

        </>
    )
}
