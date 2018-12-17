import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import "./../assets/css/riding.css";

const Riding = () => (
    <div classNameName="">
        <header className="riding-header">
            <div className="container">
                <Header />
                <div className="ridding-header-title">
                    <h1>Your Next Ride Starts Here</h1>
                </div>
            </div>
        </header>
        <div className="container container-width">
            {/* <!-- Section One --> */}
            <section className="row main section-1">
                <div className="col-md-6">
                    <img src={require("./../assets/imgs/section-2.png")} className="ridding-section-1-img" alt="SDK" />
                </div>
                <div className="col-md-6 many-ride-path">
                    <h1 className="mbr-title section-details">THE MANY
                    <br /> PATHS TO RIDE</h1>
                    <p className="mbr-text section-details">
                        Aenean u leo quam. Pellentesque ornare sem
                    <br /> lacinia quam venenatis vastibulum. Sed
                    <br /> posuere consectetur est at lobortis. Praesent
                    <br /> commodo curus magna. Vivamus Sagittis lacus
                    <br /> vel augue laoreet rutrolvel scelerisque.
                    <br />
                        <br />
                        <a href="riding-journey.html" className="color-red text-decoration-none">
                            WHERE DOES YOUR JOURNEY GO? ➤
                    </a>
                    </p>
                </div>
            </section>
            <section className="riding-sec-two mt100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-1">
                            <h1 className="title">
                                COACHES FOR
                        <br /> EVERY LEVEL
                    </h1>
                            <p className="summary">
                                Aenean eu leo quam, Pellentesque ornare sem lacinia
                        <br /> quam venenatis vestibulum, Sed posuere consectetur
                        <br />est at lobortis. Present commodo curus magna.
                    </p>
                            <div className="col-sm-5 search-field-wrapper">
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <a href="find_a_coach.html" className="input-group-text search-field-addon" id="basic-addon2">FIND A COACH TODAY ➤</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <img src={require("./../assets/imgs/2mIletVA.jpg")} className="riding-section-2-img" alt="SDK" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <div className="container container-width">
        {/* <!-- Section One --> */}
        <section className="row main section-1">
            <div className="col-md-6">
                <img src={require("./../assets/imgs/section-2.png")} className="ridding-section-1-img" alt="SDK" />
            </div>
            <div className="col-md-6 many-ride-path">
                <h1 className="mbr-title section-details">THE MANY
                    <br/> PATHS TO RIDE</h1>
                <p className="mbr-text section-details">
                    Aenean u leo quam. Pellentesque ornare sem
                    <br/> lacinia quam venenatis vastibulum. Sed
                    <br/> posuere consectetur est at lobortis. Praesent
                    <br/> commodo curus magna. Vivamus Sagittis lacus
                    <br/> vel augue laoreet rutrolvel scelerisque.
                    <br/>
                    <br/>
                    <a href="riding-journey.html" className="color-red text-decoration-none">
                        WHERE DOES YOUR JOURNEY GO? ➤
                    </a>
                </p>
            </div>
        </section>
        <section className="riding-sec-two mt100">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-1">
                    <h1 className="title">
                        COACHES FOR
                        <br/> EVERY LEVEL
                    </h1>
                    <p className="summary">
                        Aenean eu leo quam, Pellentesque ornare sem lacinia
                        <br/> quam venenatis vestibulum, Sed posuere consectetur
                        <br/>est at lobortis. Present commodo curus magna.
                    </p>
                    <div className="col-sm-5 search-field-wrapper">
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <a href="find_a_coach.html" className="input-group-text search-field-addon" id="basic-addon2">FIND A COACH TODAY ➤</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <img src={require("./../assets/imgs/2mIletVA.jpg")} className="riding-section-2-img" alt="SDK" />
                </div>
            </div>
        </div>
    </section>
    </div>
        <Footer />
    </div>
);

export default Riding;