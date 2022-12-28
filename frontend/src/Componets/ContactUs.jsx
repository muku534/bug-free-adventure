import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className="container ">
                <div className="row mt-4 justify-content-center">
                    <h4 className='d-flex justify-content-center mb-4'>Contact Us</h4>
                    <div className="col-lg-8 justify-content-center ">
                        <form>
                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form3Example1" className="form-control" placeholder='First name' style={{ borderRadius: "20px" }} required />
                                        {/* <label className="form-label" for="form3Example1">First name</label> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form3Example2" className="form-control" placeholder='Last name' style={{ borderRadius: "20px" }} required />
                                        {/* <label className="form-label" for="form3Example2">Last name</label> */}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="email" id="form3Example3" className="form-control" placeholder='Email address' style={{ borderRadius: "20px" }} required />
                                        {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="number" id="form3Example3" className="form-control" placeholder='Phone number' style={{ borderRadius: "20px" }} required />
                                        {/* <label className="form-label" for="form3Example3">Phone Number</label> */}
                                    </div>
                                </div>
                            </div>

                            <div class="form-outline">
                                <textarea class="form-control" id="textAreaExample3" rows="2" placeholder='Message' style={{ borderRadius: "20px" }}></textarea>
                                {/* <label class="form-label" for="textAreaExample3">Message</label> */}
                            </div>
                            <div className="mt-3">
                                <p>We’ll use your personal information only to communicate and handle your inquiry.</p>
                                <p>From time to time, we would like to contact you about our products and services and other content that may interest you. If you consent to
                                    contact for this purpose, please tick below:</p>
                            </div>
                            {/* <!-- Checkbox --> */}
                            <div className="form-check d-flex  mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" required />
                                <label className="form-check-label" for="form2Example3">
                                    I agree to receive other marketing communications from Survicate.
                                </label>
                            </div>
                            <p>You can unsubscribe at any time by responding to any of our communication or by sending a request to Mr.Mukesh@gmail.com We will
                                store and process your personal data on terms defined</p>

                            {/* <!-- Submit button --> */}
                            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button type="submit" className="btn btn-primary btn-rounded" style={{ borderRadius: "20px", width: "100px" }} >Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
