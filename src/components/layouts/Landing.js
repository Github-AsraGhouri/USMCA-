import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import './../assets/css/style.css'
const Landing = () => (
    <div className=""  Style={"background-color : white; color: black"}>
        <header className="home-header">
            <div className="container">
                <Header />
                <h5 Style={"color: #dbdbdb;"}>matching you with A Network of </h5>
                <h1  Style={"color: white;"}>nationally Certified</h1>
                <h1 Style={"color: white;"}>Motorcycle Coaches</h1>
                <div className="col-sm-5 search-field-wrapper d-none d-sm-block">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control search-field" placeholder="SEARCH BY COACH NAME OR LOCATION" aria-label="Recipient's username"
                            aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text  search-field-addon" id="basic-addon2">SEARCH</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 search-field-wrapper d-none d-sm-block d-block d-lg-none d-md-none">
                    <div className="input-group mb-3">
                        <div className="input-group-append">
                            <button className="input-group-text search-field-addon" id="basic-addon2">FIND A COACH ➤</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <img src={require("./../assets/imgs/masthead-texture.png")} class="img-fluid texture-img" />
        
    <div class="container motor-cycle-coaches" >
        {/* <!-- Section One --> */}
        <section class="row text-center">
            <div class="col-sm-12">
                <h2>PARTURIENT ULLAMCORP</h2>
                <p>Aenean eu leo quam. Pellentesque ornare sem quam venenatis vestibulum.
            <br /> Sed Posuere consectetur est at lobortis. Praesent commodo cursus magna.
        </p>
            </div>
        </section>

        {/* <!-- Section Two --> */}
        <section class="row text-center">
            <div class="col-md-4">
                <center>
                    <img src={require("./../assets/imgs/connect-icon.png")} float="center" alt="Gloves" />
                </center>
                <br />
                <h3 class="sec-2-heading">CONNECT</h3>
                <p>
                    Cras mattis consectetur purus sit amet
            <br /> fermentum. Nullam id dollar id nibh
            <br /> ultricies vhicula ut id elit.
            <br /> <br />
                    <span class="color-red"> FIND A COACH &#9205 </span>
                </p>
            </div>
            <div class="col-md-4">
                <center>
                    <img src={require("./../assets/imgs/grow-icon.png")} float="center" alt="Street" />
                </center>
                <br />
                <h3 class="sec-2-heading">GROW</h3>
                <p>
                    Fusce dapibus, tellus ac cursus commodo,
            <br /> tortor mauris condim entum nibh, ut
            <br /> fermentum massa justo sit amet risus.
            <br />
                    <br />
                    <span class="color-red"> RIDING INFORMATION &#9205 </span>
                </p>
            </div>
            <div class="col-md-4">
                <center>
                    <img src={require("./../assets/imgs/certify-icon.png")} float="center" alt="Badge" />
                </center>
                <br />
                <h3 class="sec-2-heading">CERTIFY</h3>
                <p>
                    Aenean eu leo quam, Pellentesque ornare
            <br /> sem lacinia quam venenatis vestibulum, Sed
            <br /> posuere consectetur est at lobortis.
            <br />
                    <br />
                    <span class="color-red"> BECOME A COACH &#9205</span>
                </p>
            </div>
        </section>

        {/* <!-- Section Three --> */}
        <section class="row path-to-ride main mt100">
            <div class="col-md-4 offset-md-1">
                <h1 class="mbr-title">THE MANY
            <br /> PATHS TO RIDE</h1>
                <p class="mbr-text">
                    Aenean u leo quam. Pellentesque ornare sem
            <br /> lacinia quam venenatis vastibulum. Sed
            <br /> posuere consectetur est at lobortis. Praesent
            <br /> commodo curus magna. Vivamus Sagittis lacus
            <br /> vel augue laoreet rutrolvel scelerisque.
            <br />
                    <br />
                    <span class="color-red">
                        WHERE DOES YOUR JOURNEY GO? &#9205
            </span>
                </p>
            </div>
            <div class="col-md-6">
                <img src={require("./../assets/imgs/section-2.png")} class="section-2-img" alt="SDK" />
            </div>
        </section>

        {/* <!-- Section Fourth --> */}
        <section class="row main mt150">
            <div class="col-md-6 offset-md-1">
                <img src={require("./../assets/imgs/img2.jpeg")} class="section-3-img" alt="SDK" />
            </div>
            <div class="col-md-5 path-to-ride section-fourth">
                <h2 class="mbr-title"> HAVE WHAT IT
            <br /> TAKES TO COACH</h2>
                <p class="mbr-text">
                    Aenean eu leo quam, Pellentesque ornare sem
            <br /> lacinia quam venenatis vestibulum, Sed posuere
            <br /> consectetur est at lobortis. Present commodo
            <br /> curus magna. Vivimus Sagittis lacusvel augue
            <br /> laoreet rutrum faucibus dolvel scelerisque.
            <br />
                    <br />
                    <span class="color-red">
                        BECOME A COACH &#9205
            </span>
                </p>
            </div>
        </section>
    </div>
    
        <Footer />

    </div>

);



export default Landing;