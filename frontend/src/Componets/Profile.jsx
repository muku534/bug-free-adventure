import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
// import store from '../validation/store';
const Profile = () => {

    const Navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const callProfilePage = async () => {
        try {
            const res = await fetch('/profile', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setUserData(data);
            console.log(data)

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            Navigate('/Signin');
        }
    }

    useEffect(() => {
        callProfilePage();
    }, [])

    return (
        <div>
            <div className="gradient-custom-2">
                <form method='GET'>

                    <MDBContainer className="py-5 h-100 mt-5">
                        <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol lg="9" xl="7">
                                <MDBCard>
                                    <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                        <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                            <MDBCardImage src=""
                                                alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                                            <MDBBtn outline color="dark" className="customClass" style={{ height: '36px', overflow: 'visible' }}>
                                                Edit profile
                                            </MDBBtn>
                                        </div>
                                        <div className="ms-3" style={{ marginTop: '130px' }}>
                                            <MDBTypography tag="h5"></MDBTypography>
                                            <MDBCardText>Surat</MDBCardText>
                                        </div>
                                    </div>
                                    <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                        <div className="d-flex justify-content-end text-center py-1">
                                            <div>
                                                <MDBCardText className="mb-1 h5">10</MDBCardText>
                                                <MDBCardText className="small text-muted mb-0">Add to Cart</MDBCardText>
                                            </div>
                                            <div className="px-3">
                                                <MDBCardText className="mb-1 h5">5</MDBCardText>
                                                <MDBCardText className="small text-muted mb-0">Wishlist</MDBCardText>
                                            </div>
                                            <div>
                                                <MDBCardText className="mb-1 h5">2</MDBCardText>
                                                <MDBCardText className="small text-muted mb-0">ordered</MDBCardText>
                                            </div>
                                        </div>
                                    </div>
                                    <MDBCardBody className="text-black p-4">
                                        <div className="mb-5">
                                            <table className="table 
                                            ">
                                                <tbody className="text-black">
                                                    <tr>
                                                        <td>Name :</td>
                                                        <td>{userData.fname}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email :</td>
                                                        <td>{userData.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gender :</td>
                                                        <td>Male
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone Number:</td>
                                                        <td>8238272244</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <MDBCardText className="lead fw-normal mb-0">Recent Products</MDBCardText>
                                            <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                                        </div>
                                        <MDBRow>
                                            <MDBCol className="mb-2">
                                                <MDBCardImage src="https://rukminim1.flixcart.com/image/416/416/l4oi4cw0/computer/i/n/e/a715-5g-gaming-laptop-acer-original-imagfj2g954wfdyz.jpeg?q=70"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </MDBCol>
                                            <MDBCol className="mb-2">
                                                <MDBCardImage src="https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/z/2/c/-original-imagetjyhhtrtkdg.jpeg?q=70"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="g-2">
                                            <MDBCol className="mb-2">
                                                <MDBCardImage src="https://rukminim1.flixcart.com/image/416/416/ko382a80/computer/b/v/u/na-gaming-laptop-asus-original-imag2mrvrxgsaahh.jpeg?q=70"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </MDBCol>
                                            <MDBCol className="mb-2">
                                                <MDBCardImage src="https://rukminim1.flixcart.com/image/416/416/ko382a80/computer/b/v/u/na-gaming-laptop-asus-original-imag2mrvrxgsaahh.jpeg?q=70"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </form >
            </div>
        </div>
    );
}

export default Profile;