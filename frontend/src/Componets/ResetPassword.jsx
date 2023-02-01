import React, { useState } from 'react';

const ResetPassword = () => {
    // Use state to store the form data
    const [formData, setFormData] = useState({
        email: ''
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
        console.log(formData);
        fetch("http://localhost:5000/forgot-password", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                alert(data.status);
            });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 mt-5 d-flex justify-content-center align-items-center">
                            <div className="card text-center" style={{ width: "350px" }}>
                                <div className="card-header h5 text-white bg-primary">Password Reset</div>
                                <div className="card-body px-5">
                                    <p className="card-text py-2">
                                        Enter your email address and we'll send you an email with instructions to reset your password.
                                    </p>
                                    <div className="form-outline">
                                        <input type="email" id="form3Example3" className="form-control" name="email"
                                            value={formData.email}
                                            onChange={handleChange} placeholder="Enter your Email" required />
                                        {/* <input type="email" id="typeEmail" className="form-control my-3" onChange={handleChange} /> */}
                                        {/* <label className="form-label" for="typeEmail">Email input</label> */}
                                    </div>
                                    <a href="#!" className="btn btn-primary w-100">Reset password</a>
                                    <div className="d-flex justify-content-between mt-4">
                                        <a className="" href="Signin">Login</a>
                                        <a className="" href="Signup">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default ResetPassword;
