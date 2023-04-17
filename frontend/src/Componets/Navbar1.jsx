import React from 'react'

const Navbar1 = () => {
    return (
        <>
            {/* <!-- As a link --> */}
            <nav class="navbar navbar-light bg-light" style={{ height: "35px" }}>
                {/* <div class="container-fluid"> */}
                <p><i className="fas fa-home me-3 text-secondary"></i> Surat,Gujarat</p>
                <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    Mr.Mukesh0412@gmail.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 8238272244</p>
                {/* <p><i className="fas fa-print me-3 text-secondary"></i>+ 91 6355321024</p> */}
                {/* </div> */}
            </nav>
        </>
    )
}

export default Navbar1
