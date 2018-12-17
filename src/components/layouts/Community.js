import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import './../assets/css/community.css'
const Community = () => (
 <div class="fade-in community-main-body">
    <header class="community-header">
        <div class="container">
            <Header/>
            <h1 class="mt100 community-heading">community</h1>
        </div>
    </header>
    <div class="community-body texture">
        <div class=" container d-block d-sm-none">
            <div class="dropdown">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle">All
                    <span class="arrow">⮟</span>
                </label>
                <ul>
                    <li>
                        <a href="#upcomming_events" class="active">UPCOMING EVENTS</a>
                    </li>
                    <li>
                        <a href="#dealers">DEALERS</a>
                    </li>
                    <li>
                        <a href="#destination">DESTINATIONS</a>
                    </li>
                    <li>
                        <a href="#clubs">CLUBS</a>
                    </li>
                    <li>
                        <a href="#rentals">RENTALS</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container d-none d-sm-block">
            <div class="row container-1">
                <div class="col-md-12">
                    <ul class="breadcrumb">
                        <li class="verticle-slash">
                            <a href="#">ALL</a>
                        </li>

                        <li class="verticle-slash">
                            <a href="#upcomming_events">UPCOMING EVENTS</a>
                        </li>

                        <li class="verticle-slash">
                            <a href="#dealers">DEALERS</a>
                        </li>
                        <li class="verticle-slash">
                            <a href="#destination">DESTINATIONS</a>
                        </li>

                        <li class="verticle-slash">
                            <a href="#clubs">CLUBS</a>
                        </li>

                        <li class="verticle-slash">
                            <a href="#rentals">RENTALS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <h1 class="upcoming-events" id="upcomming_events">UPCOMING EVENTS</h1>
            <div class="col-sm-10 offset-sm-1">
                <div class="row community-container-1">
                    <div class="col-sm-4">
                        <div class="card">
                            <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                        </div>
                        <div class="col-sm-10 offset-sm-1 event-name">
                            <h5 class="event-title">EVENT NAME GOES HERE </h5>
                            <p>JULY 18-22, 2018</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                        </div>
                        <div class="col-sm-10 offset-sm-1 event-name">
                            <h5 class="event-title">EVENT NAME GOES HERE </h5>
                            <p>JULY 18-22, 2018</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                        </div>
                        <div class="col-sm-10 offset-sm-1 event-name">
                            <h5 class="event-title">EVENT NAME GOES HERE </h5>
                            <p>JULY 18-22, 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt50 texture1">
        <h1 class="upcoming-events" id="dealers">DEALERS</h1>
        <div class="col-sm-10 offset-sm-1">
            <div class="row community-container-1">
                <div class="col-sm-4">
                    <div class="card-1">
                        <div class="col-sm-7 offset-sm-2">
                            <img class="card-img-1 img-fluid" src={require("./../assets/imgs/h0c4ad6a2920806e16d11f41dcf3f2e3_765453bf878c.png")} alt="Card image"/>
                        </div>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name">
                        <h5 class="event-title">ST. PAUL HARLEY DAVIDSON</h5>
                        <p>ST PAUL, MN</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card-2">
                        <div class="col-sm-6 offset-sm-3">
                            <img class="card-img-2 img-fluid" src={require("./../assets/imgs/dealer-logo.png")} alt="Card image"/>
                        </div>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name">
                        <h5 class="event-title">CROSSTOWN CYCLE</h5>
                        <p>MINNEAPOLIS, MN</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card-3">
                        <img class="card-img-3 img-fluid" src={require("./../assets/imgs/BisonLogo.png")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name">
                        <h5 class="event-title">BISON THUNDER MOTORCYCLE</h5>
                        <p>ST MICHAEL, MN</p>
                    </div>
                </div>
            </div>
            <div class="row community-container-1">
                <div class="col-sm-4">
                    <div class="card-1">
                        <div class="col-sm-7 offset-sm-2">
                            <img class="card-img-1 img-fluid" src={require("./../assets/imgs/h0c4ad6a2920806e16d11f41dcf3f2e3_765453bf878c.png")} alt="Card image"/>
                        </div>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name">
                        <h5 class="event-title">ST. PAUL HARLEY DAVIDSON</h5>
                        <p>ST PAUL, MN</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card-2">
                        <div class="col-sm-6 offset-sm-3">
                            <img class="card-img-2 img-fluid" src={require("./../assets/imgs/dealer-logo.png")} alt="Card image"/>
                        </div>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name">
                        <h5 class="event-title">CROSSTOWN CYCLE</h5>
                        <p>MINNEAPOLIS, MN</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card-3">
                        <img class="card-img-3 img-fluid" src={require("./../assets/imgs/BisonLogo.png")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name">
                        <h5 class="event-title">BISON THUNDER MOTORCYCLE</h5>
                        <p>ST MICHAEL, MN</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt50 texture">
        <h1 class="upcoming-events" id="destination">DESTINATIONS</h1>
        <div class="col-sm-10 offset-sm-1">
            <div class="row community-container-1">
                <div class="col-sm-4">
                    <div class="card">
                        <img className="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">DESTINATIONS NAME GOES HERE </h5>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">DESTINATIONS NAME GOES HERE  </h5>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">DESTINATIONS NAME GOES HERE  </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt50 texture1">
        <h1 class="upcoming-events" id="clubs">CLUBS</h1>
        <div class="col-sm-10 offset-sm-1">
            <div class="row community-container-1">
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">CLUB/ORGANIZATION NAME GOES HERE </h5>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">CLUB/ORGANIZATION NAME GOES HERE</h5>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">CLUB/ORGANIZATION NAME GOES HERE</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt50 texture">
        <h1 class="upcoming-events" id="rentals">RENTALS</h1>
        <div class="col-sm-10 offset-sm-1">
            <div class="row community-container-1">
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">CLUB/ORGANIZATION NAME GOES HERE</h5>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">CLUB/ORGANIZATION NAME GOES HERE</h5>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img img-fluid" src={require("./../assets/imgs/2016_Mini_Os_Matthew_LeBlanc-2453.jpg")} alt="Card image"/>
                    </div>
                    <div class="col-sm-10 offset-sm-1 event-name club">
                        <h5 class="event-title">CLUB/ORGANIZATION NAME GOES HERE</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    
 </div>
);

export default Community ;