import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import './../assets/css/find_a_coach.css'
const FindCoach = () => (
 <div class="fade-in">
    <header class="find-a-coach-header">
        <div class="container">
            <Header/>
            <div class="container">
            <br/>
                <h1 Style={"color: white"}>FIND A COACH</h1>
            <div class="col-sm-5 search-field-wrapper d-none d-sm-block d-md-none d-lg-block">
                <div class="input-group mb-3">
                    <input type="text" class="form-control search-field" placeholder="SEARCH BY COACH NAME OR LOCATION" aria-label="Recipient's username"
                        aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <a href="coach_result.html" class="input-group-text  search-field-addon" id="basic-addon2">SEARCH</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 search-field-wrapper d-none d-sm-block d-block d-lg-none d-md-none ">
                <div class="input-group mb-3">
                    <div class="input-group-append d-none d-sm-block">
                        <button class="input-group-text search-field-addon" href="coach_result.html" id="basic-addon2">FIND A COACH</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="addon col-sm-10 offset-md-1 d-block d-sm-none d-none d-md-block d-lg-none">
            <i class="fa">&#xf002;</i>
            <input type="search" class="form" placeholder="55431" />
        </div>
        </div>
    </header>
    <img src="./../assets/imgs/masthead-texture.png" class="img-fluid texture-img" />
    <div class="find-a-coach-body">
        <div class="container">
            <div class="row">
                <div class="col-md-9 find-a-coach-content">
                    <span>NOT QUITE SURE WHAT YOU'R LOOKING FOR?</span>
                    <br/>
                    <h4>LET US MATCH YOU WITH THE RIGHT COACH</h4>
                    <br/>
                    <a href="smart_match.html" class="color-red text-decoration-none">
                        GET STARTED ➤
                    </a>
                </div>
            </div>
            <div class="row">
                    <div class="col-sm-3 offset-sm-7 find-a-coach-img-parent">

                            {/* <!-- <img src="../assets/imgs/mountan-bike.jpg" class="img1" alt="SDK" />--> */}
                            <img src={require("./../assets/imgs/bike-down.jpg")} class="img1" alt="SDK" />
                    </div>
            </div>
        </div>
    </div>
    <Footer/>
 </div>
);

export default FindCoach;