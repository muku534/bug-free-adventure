import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Signup = () => {
  // Use state to store the form data
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
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
    fetch('/api/buyers', {
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
      .then(data => {
        // User was successfully created in the database, redirect to the login page
        window.location.href = '/Signin';
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start ">
                  <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" name="fname"
                        value={formData.fname}
                        onChange={handleChange} required />
                      <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" name="lname"
                        value={formData.lname}
                        onChange={handleChange} required />
                      <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" name="email"
                    value={formData.email}
                    onChange={handleChange} required />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" name="password"
                    value={formData.password}
                    onChange={handleChange} required />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex  mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" required />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4" >Sign up</button>
                <p className="medium fw-bold mt-2 pt-1 mb-0">you already have an account? <a href="Signin"
                  className="link-primary">Signin</a></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </form>



  );
};

export default Signup;
