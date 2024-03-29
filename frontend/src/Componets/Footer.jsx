import React from 'react'

export default function Footer() {
    return (
        <>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Footer --> */}
                        <footer className="text-center text-lg-start bg-white text-muted">
                            {/* <!-- Section: Social media --> */}
                            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                                {/* <!-- Left --> */}
                                <div className="me-5 d-none d-lg-block">
                                    <span>Get connected with us on social networks:</span>
                                </div>
                                {/* <!-- Left --> */}

                                {/* <!-- Right --> */}
                                <div>
                                    <a href="https://www.facebook.com/" className="me-4 link-secondary">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://twitter.com/login?lang=en" className="me-4 link-secondary">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.google.co.in/" className="me-4 link-secondary">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="https://www.instagram.com/mr.mukesh_534/" className="me-4 link-secondary">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://in.linkedin.com" className="me-4 link-secondary">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/muku534" className="me-4 link-secondary">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                {/* <!-- Right --> */}
                            </section>
                            {/* <!-- Section: Social media --> */}

                            {/* <!-- Section: Links  --> */}
                            <section className="">
                                <div className="container text-center text-md-start mt-5">
                                    {/* <!-- Grid row --> */}
                                    <div className="row mt-3">
                                        {/* <!-- Grid column --> */}
                                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                            {/* <!-- Content --> */}
                                            <h6 className="text-uppercase fw-bold mb-4">
                                                <i className="fas fa-gem me-3 text-secondary"></i>Company name
                                            </h6>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt dolor sunt eveniet
                                                dolore est quos ex nostrum autem iste dicta nobis perferendis ad odio, inventore similique!
                                                Asperiores, placeat illum?
                                            </p>
                                        </div>
                                        {/* <!-- Grid column --> */}

                                        {/* <!-- Grid column --> */}
                                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                            {/* <!-- Links --> */}
                                            <h6 className="text-uppercase fw-bold mb-4">
                                                Products
                                            </h6>
                                            <p>
                                                <a href="#!" className="text-reset">Laptop</a>
                                            </p>
                                            <p>
                                                <a href="#!" className="text-reset">Computer</a>
                                            </p>
                                            <p>
                                                <a href="#!" className="text-reset">Gaming PC</a>
                                            </p>
                                            <p>
                                                <a href="#!" className="text-reset">Gaming Laptop</a>
                                            </p>
                                        </div>
                                        {/* <!-- Grid column --> */}

                                        {/* <!-- Grid column --> */}
                                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                            {/* <!-- Links --> */}
                                            <h6 className="text-uppercase fw-bold mb-4">
                                                Useful links
                                            </h6>
                                            <p>
                                                <a href="#!" className="text-reset">Pricing</a>
                                            </p>
                                            <p>
                                                <a href="#!" className="text-reset">Settings</a>
                                            </p>
                                            <p>
                                                <a href="#!" className="text-reset">Orders</a>
                                            </p>
                                            <p>
                                                <a href="#!" className="text-reset">Help</a>
                                            </p>
                                        </div>
                                        {/* <!-- Grid column --> */}

                                        {/* <!-- Grid column --> */}
                                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                            {/* <!-- Links --> */}
                                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                            <p><i className="fas fa-home me-3 text-secondary"></i> Surat,Gujarat</p>
                                            <p>
                                                <i className="fas fa-envelope me-3 text-secondary"></i>
                                                Mr.Mukesh0412@gmail.com
                                            </p>
                                            <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 8238272244</p>
                                            <p><i className="fas fa-print me-3 text-secondary"></i> + 91 6355321024</p>
                                        </div>
                                        {/* <!-- Grid column --> */}
                                    </div>
                                    {/* <!-- Grid row --> */}
                                </div>
                            </section>
                            {/* <!-- Section: Links  --> */}

                            {/* <!-- Copyright --> */}
                            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                                © 2022 Copyright:
                                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Mr.Mukesh</a>
                            </div>
                            {/* <!-- Copyright --> */}
                        </footer>
                        {/* <!-- Footer --> */}
                    </div>
                </div>
            </div>
        </>
    )
}
