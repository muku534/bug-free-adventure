import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import GoogleLogin from 'react-google-login';
import jwt_decode from 'jwt-decode';
const google = window.google;
const Signin = (props) => {
  // const store = useSelector((store) => store)
  // const [isLoading, setIsLoading] = useState(false)

  // signin with google functionality 
  // function handleCallbackResponse(response) {
  //   console.log("Encoded Jwt ID token: " + response.credential);
  //   var userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  //   // setUserData(userObject);
  // }

  // useEffect(() => {
  //   // global google 
  //   google.accounts.id.initialize({
  //     client_id: "646640035068-eso1sdc4vof6f36und3muubcgso9t0ns.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById("signIn"),
  //     { theme: "outline", size: "large" }
  //   )
  // }, []);

  // const responseSuccessGoogle = (response) => {
  //   console.log(response);
  //   axios({
  //     method:'POST',
  //     url:"http://localhost:5000/api/googlelogin",
  //     data:{tokenid: response.tokenid}
  //   }).then(response =>{
  //     console.log(response);
  //   })
  // }
  // const responseErrorGoogle = (response) => {
  //   console.log(response);
  // }

  // signin with google functionality over


  // Use state to store the form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Send a POST request to the server with the form data
    fetch('/signin', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(_data => {
        // User was successfully signed in, redirect to the dashboard page
        window.location.href = 'http://localhost:3000/';
      })
      .catch(error => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   if (store.error ||
  //     store.User.isAuthenticated) {
  //     setIsLoading(false)
  //   }

  //   else {
  //     setIsLoading(true)
  //   }
  // }, [store.error, store.User.isAuthenticated])


  return (
    <form onSubmit={handleSubmit} >
      <section className="vh-100" id='SignIN'>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <div className='signIn' id='signIn'>
                  {/* <GoogleLogin
                    client_id="646640035068-eso1sdc4vof6f36und3muubcgso9t0ns.apps.googleusercontent.com"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                    /> */}
                </div>
                {/* <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button> */}
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" name="email"
                  value={formData.email}
                  onChange={handleChange} required />
                <label className="form-label" htmlFor="form2Example1">Email address</label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" name="password"
                  value={formData.password}
                  onChange={handleChange} required />
                <label className="form-label" htmlFor="form2Example2">Password</label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="ResetPassword" className="text-body">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <div className="row justify-content-center">
                  <div className="col-md-1">
                    {/* {
                      isLoading && <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    } */}
                  </div>
                </div>
                {/* {!isLoading && <button type="submit" className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} >Login</button>} */}
                  <button type="submit" className="btn btn-primary btn-block mb-4" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} >Signin</button>
                <p className="medium fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="Signup"
                  className="link-danger">Register</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Signin;