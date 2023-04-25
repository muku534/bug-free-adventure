import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className="container ">
                <div className="row mt-4 justify-content-center">
                    <h4 className='d-flex justify-content-center mb-4'>Contact Us</h4>
                    <div className="col-lg-12 d-flex">
                        <div className="col-lg-3 ">
                            <h5> CUSTOMER SERVICE  </h5>
                            <p> <span> Monday to friday <br />
                                10am - 6:30pm (Network time)
                            </span> </p>

                            <br />

                            <h5> STORE LOCATOR  </h5>
                            <p>
                                <span> 21 second floor , pelham , <br /> pin : 394727</span>
                            </p>

                            <br />

                            <h5>STORE TIME</h5>
                            <p>
                                <span> Monday to friday <br />
                                    10am - 6:30pm 
                                </span>
                            </p>
                        </div>


                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119082.58659085105!2d72.68777084835321!3d21.13922851977545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05276ea0507ad%3A0x73c16cff225b784!2sVesu%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1682187864643!5m2!1sen!2sin" width="800" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-lg-6 justify-content-center mt-4 ">
                        <form>
                            <div className="mt-3">
                                <h5>Have a question about a product, our company, or just want to chat? Email us!.</h5>
                                <p>We will be glad to assist you in any question and encourage you to share your ideas and improvements with us.</p>
                            </div>
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

                            {/* <!-- Checkbox --> */}
                            {/* <div className="form-check d-flex  mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" required />
                                <label className="form-check-label" for="form2Example3">
                                    I agree to receive other marketing communications from Survicate.
                                </label>
                            </div>
                            <p>You can unsubscribe at any time by responding to any of our communication or by sending a request to Mr.Mukesh@gmail.com We will
                                store and process your personal data on terms defined</p> */}

                            {/* <!-- Submit button --> */}
                            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                                <button type="submit" className="btn btn-primary btn-rounded" style={{ borderRadius: "20px", width: "100px" }} >Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
