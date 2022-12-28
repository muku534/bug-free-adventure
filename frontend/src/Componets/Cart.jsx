import React from 'react';
import { Link } from 'react-router-dom'
import laptop from '../Images/laptop.png'

export default function Cart() {
  return (
    <>
      <div className="app-2">
        <div className="details-2 cart">
          <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/u/k/w/-original-imaggqgcggpau2zr.jpeg?q=70" alt="" />
          <div className="box">
            <div className="row">
              <h2>Lenovo Chromebook Flex 3 11" Laptop, 11.6-Inch HD IPS Display, MediaTek <br /> MT8173C, 4GB RAM, 64GB Storage, Chrome OS, Blizzard White</h2>
              <span>$178.00</span>
            </div>

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
            {/* <div className="amount">
            <button className="count" onClick={() => reduction(item._id)}> - </button>
            <span>{item.count}</span>
            <button className="count" onClick={() => increase(item._id)}> + </button>
          </div> */}
          </div>
          <div className="delete">X</div>
        </div>

        <div className="total">
          <h3>Total: $178</h3>
          <Link to="/payment">Payment</Link>
        </div>
      </div>

    </>
  )
}
