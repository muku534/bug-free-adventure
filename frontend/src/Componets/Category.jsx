import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center mt-5">
            <div className="img ml-2">
              <Link to={"/Card"}><img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" className="rounded-circle" height="80" alt="image not found " /></Link>
              <p style={{ fontSize: "12px" }} className="">All Laptop`s</p>
            </div>
            <div className="img ml-3">
              <Link to={"/GamingLaptop"}> <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" className="rounded-circle" height="80" alt="image not found" /></Link>
              <p style={{ fontSize: "12px" }}>Gaming Laptop`s</p>
            </div>
            <div className="img ml-3">
              <Link to={"/OfficeLaptop"}> <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" className="rounded-circle" height="80" alt="image not found" /></Link>
              <p style={{ fontSize: "12px" }}>Office Laptop`s</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
