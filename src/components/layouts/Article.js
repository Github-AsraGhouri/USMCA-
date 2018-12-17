import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import './../assets/css/article.css'
const Article = () => (
 <div class="fade-in article-main-body">
    <header class="article-header">
        <div class="container">
            <Header/>
        </div>
    </header>
    <div class="article-body mt-350">
        <div class="container">
            <div class="row">
                <div class="col-md-11 offset-md-1">
                    <img src={require("./../assets/imgs/article.jpg")} class="article-image" />
                </div>
            </div>
        </div>

        <div class="container container-2">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <p class="card-date"> June 18, 2018</p>
                    <h2>LONGER NEWS ARTICLE NAME THAT
                        <br/> NEEDS TWO LINES</h2>
                    <p class="article-body-para1">Aenean lacinia bibendum nulla sed consectetur. vestibulum id ligula porta felis euismod semper. Fusce
                        <br/>dapibus, tellus as cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                        <br/>amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
                    </p>
                    <p>
                        Maecenas fausibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
                        <br/>nec lit. Maecenas faucibus mollis interdem.Cras mattis consectetur purus sit amet fermentum. Nulla
                        vitae lit libero,
                        <br/>a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                    </p>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna,
                        <br/> vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit
                        aliquet. Etiam porta sem
                        <br/> malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
                        risus, porta as
                        <br/>consectetur ac, vestibulum at eros.
                    </p>
                    <h4>ANOTHER HEADLINE</h4>
                    <p>
                        Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor
                        <br/>ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Sed posuere consectetur est at lobortis.
                        Vivamus sagittis lacus vel
                        <br/> augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo
                        <br/>luctus, nisi erat porttitor ligula, eget lacinia odio sem nec lit. Nullam quis risus eget urna mollis
                        ornare vel eu leo. Praesent
                        <br/> commod cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam.
                        <br/> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo
                        luctus, nisi era
                        <br/>t porttitor ligula, eget lacinia odio sm nec elit.
                    </p>
                    <p>
                        Praesent commod cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commod, trotor
                        <br/>mauris condimentum nibh, ut fermentum massa justo Sitemap sit amet risus. Aenean lacinia bibendum
                        nulla
                        <br/> sed consectetur. Nulla vitae elit libero, a pharetra augue.
                    </p>
                </div>
            </div>
        </div>
        <h1>ADDITIONAL ARTICLE</h1>
        <div class="texture">
            <div class="container mt50 fifth-container">
                <section>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card-deck">
                                <div class="card">
                                    <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap"/>
                                    <div class="card-body">
                                        <div class="topnav">
                                            <p class="card-date">
                                                <span class="active">June 18,</span> 2018</p>
                                        </div>
                                        <h5 class="card-title">New Article Name
                                            <br/> With Two Line</h5>
                                        <p class="card-text">
                                            Morbi leo risus, porta ac consec
                                            <br/>tetur ac, vestibulum at eros. Vesti
                                            <br/>bulum id ligula p ta felis euismod
                                            <br/>semper. Donec ullamcorper nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card-deck">
                                <div class="card">
                                    <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap"/>
                                    <div class="card-body">
                                        <div class="topnav">
                                            <p class="card-date">
                                                <span class="active">June 18,</span> 2018</p>
                                        </div>
                                        <h5 class="card-title">New Article Name
                                            <br/> With Two Line</h5>
                                        <p class="card-text">
                                            Morbi leo risus, porta ac consec
                                            <br/>tetur ac, vestibulum at eros. Vesti
                                            <br/>bulum id ligula p ta felis euismod
                                            <br/>semper. Donec ullamcorper nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card-deck">
                                <div class="card">
                                    <img class="card-img-top" src={require("./../assets/imgs/david-marcu-5296-unsplash.jpg")} alt="Card image cap"/>
                                    <div class="card-body">
                                        <div class="topnav">
                                            <p class="card-date">
                                                <span class="active">June 18,</span> 2018</p>
                                        </div>
                                        <h5 class="card-title">New Article Name
                                            <br/> With Two Line</h5>
                                        <p class="card-text">
                                            Morbi leo risus, porta ac consec
                                            <br/>tetur ac, vestibulum at eros. Vesti
                                            <br/>bulum id ligula p ta felis euismod
                                            <br/>semper. Donec ullamcorper nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </div>
 </div>
);

export default Article;