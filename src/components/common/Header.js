import React from "react";
import {Link } from "react-router-dom";
const Header = () => (
    <div>
        <div className="container">
            <nav className="navbar navbar-expand-lg top-nav">
                <Link className="navbar-brand" to="/">
                    <img  src={require("./../assets/imgs/logo.png")} className="logo" />
                </Link>
                <button className="navbar-toggler  navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={require("./../assets/imgs/nav-icon.png")} />
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                        <div className="top-navbars">
                            <div className="navbar-nav top-navbar-upper-items d-none d-sm-flex" >
                            <Link className="nav-item nav-link nav-upper-item" to="/Newsroom">NEWSROOM</Link> |
                            <Link className="nav-item nav-link nav-upper-item" to="/Community">COMMUNITY</Link> |
                            <Link className="nav-item nav-link nav-upper-item" to="/Contact">CONTACT</Link> |
                            <Link className="nav-item nav-link nav-upper-item" to="/Register">REGISTER</Link> |
                            <Link className="nav-item nav-link nav-upper-item border-0" to="/Account">LOGIN</Link>
                            </div>
                            <div className="navbar-nav top-navbar-below-items">
                                <Link className="nav-item nav-link text-center right-nav-item" to="/FindCoach">FIND A COACH</Link>
                                <Link className="nav-item nav-link text-center right-nav-item" to="/Riding">RIDING</Link>
                                <Link className="nav-item nav-link text-center right-nav-item" to="/Coaching">COACHING</Link>
                                <Link className="nav-item nav-link text-center" to="/About">ABOUT USMCA</Link>

                                {/* <!-- View Bellow items on just mobile view --> */}
                            <a className="nav-item nav-link right-nav-item text-center d-none d-sm-block d-block d-lg-none d-md-none" href="newsroom.html">NEWSROOM</a>
                                <a className="nav-item nav-link right-nav-item text-center d-none d-sm-block d-block d-lg-none d-md-none" href="community.html">COMMUNITY</a>
                                <a className="nav-item nav-link right-nav-item text-center d-none d-sm-block d-block d-lg-none d-md-none" href="contact.html">CONTACT</a>
                                <a className="nav-item nav-link right-nav-item text-center d-none d-sm-block d-block d-lg-none d-md-none" href="register.html">REGISTER</a>
                                <a className="nav-item nav-link right-nav-item text-center d-none d-sm-block d-block d-lg-none d-md-none" href="account.html">LOGIN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  </div>
);



export default Header;