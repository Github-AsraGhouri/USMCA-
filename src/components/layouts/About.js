import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import "./../../components/assets/css/about.css"

const About = () => (

    <div className="">
        <header class="about-header">
            <div class="container">
                <Header/>
                <div class="ridding-header-title">
                    <h1 Style={"color: white"}>COMMITED
                    <br />TO THE FUTURE
                    <br /> OF RIDING</h1>
                </div>
            </div>
        </header>
        <div class="container">
            {/* <!-- Section One --> */}
            <section class="row main row-1 mt50">
                <div class="col-md-6 offset-md-1 d-none d-sm-block">
                    <img src={require("./../assets/imgs/about.png")} class="ridding-section-1-img" alt="SDK" />
                </div>
                <div class="col-md-5 texture">
                    <h4 class="mbr-title">OUR
                    <br /> MISSION</h4>
                    <p class="mbr-text">
                        Aenean u leo quam. Pellentesque ornare sem
                    <br /> lacinia quam venenatis vastibulum. Sed
                    <br /> posuere consectetur est at lobortis. Praesent
                    <br /> commodo curus magna. Vivamus Sagittis lacus
                    <br /> vel augue laoreet rutrolvel scelerisque.
                    <br />
                        <br />
                    </p>
                </div>
                <div class="col-md-6 d-block d-sm-none">
                    <img src={require("./../assets/imgs/about.png")} class="ridding-section-hidden-img" alt="SDK" />
                </div>
            </section>
            <section class="row main mt50">
                <div class="col-md-4 offset-md-2 texture">
                    <h4 class="mbr-title">HOW IT
                    <br /> ALL STARTED</h4>
                    <p class="mbr-text">
                        Aenean u leo quam. Pellentesque ornare sem
                    <br /> lacinia quam venenatis vastibulum. Sed
                    <br /> posuere consectetur est at lobortis. Praesent
                    <br /> commodo curus magna. Vivamus Sagittis lacus
                    <br /> vel augue laoreet rutrolvel scelerisque.
                    <br />
                        <br />
                        <span class="color-red">

                        </span>
                    </p>
                </div>
                <div class="col-md-5">
                    <img src={require("./../assets/imgs/find_a_coach_header.jpg")} class="ridding-section-2-img" alt="SDK" />
                </div>
            </section>
            <section class="row main row-1 mt50">
                <div class="col-md-6 offset-md-1 d-none d-sm-block">
                    <img src={require("./../assets/imgs/why-usmca-metter.png")} class="ridding-section-3-img" alt="SDK" />
                </div>
                <div class="col-md-5 texture">
                    <h4 class="mbr-title">WHY USMCA
                    <br /> MATTERS</h4>
                    <p class="mbr-text">
                        Aenean u leo quam. Pellentesque ornare sem
                    <br /> lacinia quam venenatis vastibulum. Sed
                    <br /> posuere consectetur est at lobortis. Praesent
                    <br /> commodo curus magna. Vivamus Sagittis lacus
                    <br /> vel augue laoreet rutrolvel scelerisque.
                    <br />
                        <br />
                    </p>
                </div>
                <div class="col-md-6 d-block d-sm-none">
                    <img src={require("./../assets/imgs/why-usmca-metter.png")} class="ridding-section-hidden-img" alt="SDK" />
                </div>
            </section>

        </div>
        {/* <!-- section sixth --> */}
        <section class="about-bottom-section">
            <div class="container container-footer-section">
                <h1 class="sec-six-title">READY TO GET STARTED?</h1>
                <p class="sec-six-para">Duis mollis, est non commondo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                <br /> elit. Aenean eu leo quam. pallentesque ornare sem lacinia quam venenatis.
            </p>
                <div class="save-a-coach-div d-none d-sm-block">
                    <button type="button" class="get-certified-button">
                        GET CERTIFIED &#9205
                </button>
                </div>
            </div>
        </section>
        <Footer />
    </div>

);


export default About;