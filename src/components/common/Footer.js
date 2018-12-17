import React from "react";

const Footer = () => (
    <footer className="mt100">
        <div className="container">
            <nav className="navbar navbar-expand-lg bottom-nav">
                <a className="navbar-brand sm-m-auto" href="#">
                    <div className="bottom-logo">
                        <img src={require("./../assets/imgs/footer-logo.png")} className="logo" />
                    </div>
                </a>
                <div className="navbar-nav sm-m-auto">
                    <a className="nav-item nav-link right-nav-item" href="find_a_coach.html">FIND A COACH</a>
                    <a className="nav-item nav-link right-nav-item" href="riding.html">RIDING</a>
                    <a className="nav-item nav-link right-nav-item" href="coaching.html">COACHING</a>
                    <a className="nav-item nav-link right-nav-item" href="about.html">ABOUT USMCA</a>
                </div>
            </nav>
        </div>
        <section className="footer-bottom-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <p> © 2018 United States Motorcycle Association</p>
                    </div>
                    <div className="col-sm-4">
                        <a href="#">Sitemap</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </section>
    </footer>

);



export default Footer;