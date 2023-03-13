import React, { useState, useEffect } from 'react'
import 'react-bootstrap';
export default function AddProducts() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <form action="">
                            <div className="topnav__search " style={{ "marginBottom": "25px", height: "45px", }}>
                                <input type="text" placeholder='Name' />
                                {/* <i className='bx bx-search'></i> */}
                            </div>
                            <div className="topnav__search " style={{ marginTop: "15px", "marginBottom": "25px", height: "45px", }} >
                                <input type="number" placeholder='Price' />
                                {/* <i className='bx bx-search'></i> */}
                            </div>


                            <div className="topnav__search" style={{ marginTop: "15px", "marginBottom": "25px", height: "45px", }} >
                                <input type="number" placeholder='Stock' />
                                {/* <i className='bx bx-search'></i> */}
                            </div>
                            <div className="topnav__search" style={{ marginTop: "15px", "marginBottom": "25px", height: "45px", }} >
                                <input type="" placeholder='Category' />
                                {/* <i className='bx bx-search'></i> */}
                            </div>

                            <div className="topnav__search" style={{ marginTop: "15px", width: "1000px", height: "55px", "marginBottom": "25px" }} >
                                <input type="file" placeholder='Upload Image' onChange={(e) => setSelectedImage(e.target.files[0])} multiple />
                                {/* <i className='bx bx-search'></i> */}
                            </div>
                            {imageUrl && selectedImage && (
                                <div mt={2} textAlign="center">
                                    <div>Image Preview:</div>
                                    <img src={imageUrl} alt={selectedImage.name} height="100px" />
                                </div>)}
                            <div className="topnav__search" style={{ marginTop: "15px", "marginBottom": "25px", height: "100px", }} >
                                <input type="textarea" placeholder='Description' />
                                {/* <i className='bx bx-search'></i> */}
                            </div>
                            <button type='submit' className='btn btn-primary' style={{"background":"white" ,height:"25px",width:"100px" , borderRadius:"5px 5px 5px 5px", justifyContent:"center",alignItems:"center" ,color:"black"}} > Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
