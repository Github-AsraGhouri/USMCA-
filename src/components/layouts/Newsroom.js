import React, { Component } from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import { Link} from "react-router-dom";
import './../assets/css/newsroom.css';
class Newsroom extends Component {
    render() {
        return (
            <div className="fade-in newsroom-main-body">
                <header class="newsroom-header">
                    <div className="container">
                        <Header />
                        <h1 class="mt100">Newsroom</h1>
                    </div>
                </header>
                <div class="newsroom-main-body">
                    <div class=" container d-block d-sm-none">
                        <div class="dropdown">
                            <input type="checkbox" id="checkbox_toggle" />
                            <label for="checkbox_toggle">All News
                    <span class="arrow">⮟</span>
                            </label>
                            <ul>
                                <li>
                                    <a href="#" class="active">All News</a>
                                </li>
                                <li>
                                    <a href="#">Rider News</a>
                                </li>
                                <li>
                                    <a href="#">coach News</a>
                                </li>
                                <li>
                                    <a href="#">Street</a>
                                </li>
                                <li>
                                    <a href="#">Dirt</a>
                                </li>
                                <li>
                                    <a href="#">Sport</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="container d-none d-sm-block">
                        <div class="row container-1">
                            <div class="col-md-11 offset-md-1">
                                <ul class="breadcrumb">
                                    <li class="verticle-slash">
                                        <a href="#">ALL NEWS</a>
                                    </li>

                                    <li class="verticle-slash">
                                        <a href="#">RIDER NEWS</a>
                                    </li>

                                    <li class="verticle-slash">
                                        <a href="#">COACH NEWS</a>
                                    </li>
                                    <li class="verticle-slash">
                                        <a href="#">Italy </a>
                                    </li>

                                    <li class="verticle-slash">
                                        <a href="#">STREET </a>
                                    </li>

                                    <li class="verticle-slash">
                                        <a href="#">DIRT </a>
                                    </li>

                                    <li class="verticle-slash">
                                        <a href="#">SPORT </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container mt50 fifth-container article-row-one">
                        <section>
                            <Link to="/Article" class="goto-article">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                             With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                             With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                            With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 d-block d-sm-none">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img className="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                                With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </section>
                    </div>
                    <div class="container mt50 fifth-container d-none article-row-two d-sm-block">
                        <section>
                            <a href="article.html" class="goto-article">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                             With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                            With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                            With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </div>
                    <div class="container mt50 fifth-container article-row-three d-none d-sm-block">
                        <section>
                            <a href="article.html" class="goto-article">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                            With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                            With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div class="topnav">
                                                        <p class="card-date">
                                                            <span class="active">June 18,</span> 2018</p>
                                                    </div>
                                                    <h5 class="card-title">New Article Name
                                            With Two Lines</h5>
                                                    <p class="card-text">
                                                        Morbi leo risus, porta ac consec
                                                        tetur ac, vestibulum at eros. Vesti
                                                        bulum id ligula p ta felis euismod
                                                        semper. Donec ullamcorper nulla.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>

                {/* <!-- pagination --> */}
                <div class="mt100">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link pagination-first-item" href="#" aria-label="Previous">
                                    <img src={require("./../assets/imgs/left-arrow.png")} alt="left arrow" />
                                    <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link pagination-item d-none d-sm-block d-md-block" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link pagination-item d-none d-sm-block d-md-block" href="#">...</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link pagination-item" href="#">6</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link pagination-item active" href="#">7</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link pagination-item" href="#">8</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link pagination-item d-none d-sm-block d-md-block" href="#">...</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link pagination-item d-none d-sm-block d-md-block" href="#">10</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link pagination-item pagination-last-item" href="#" aria-label="Next">
                                    <img src={require("./../assets/imgs/right-arrow.png")} alt="right arrow" />
                                    <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Newsroom;