import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import { Link } from "react-router-dom";
import './../assets/css/register.css'
const Register = () => (
 <div class="fade-in register-main-body">
    <header class="register-header">
        <div class="container">
            <Header/>
        </div>
    </header>
    <div class="register-body">
        <div class="container register-content">
            <div class="row">
                <div class="col-sm-3 d-none hidden-dashbaord d-sm-block">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item active">
                            <a href="#">DASHBOARD</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">YOUR COACHES</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">YOUR COURSES</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">SETTINGS</a>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-3 mt150 dropdown-dashboard d-block d-sm-none ">
                    <div class="dropdown">
                        <input type="checkbox" id="checkbox_toggle" />
                        <label for="checkbox_toggle">DASHBOARD
                            <span class="arrow">⮟</span>
                        </label>
                        <ul>
                            <li>
                                <a href="#" class="active">DASHBAORD</a>
                            </li>
                            <li>
                                <a href="#">YOUR COACHES</a>
                            </li>
                            <li>
                                <a href="#">YOUR COURSES</a>
                            </li>
                            <li>
                                <a href="#">SETTINGS</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-8 offset-sm-1 recommended-coaches">
                    <span class="coach-title">RECOMMENDED COACHES</span>
                    <p class="coach-para">In order for us to recommended coaches we need you to answer a few questions.</p>
                    <button type="button" class="get-quiz-button">
                       <Link to="/SmartMatch" className="tag"> TAKE OUR SMART MATCH QUIZ</Link>
                    </button>
                </div>
            </div>
            <div class="texture-swipe d-none d-sm-block">
                <img src={require("./../assets/imgs/texture-swipe-1.jpg")} alt="texture-swipe"/>
            </div>
        </div>
    </div>
    <Footer/>
 </div>
);

export default Register;