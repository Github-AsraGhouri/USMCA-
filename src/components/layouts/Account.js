import React from 'react'
import Footer from './../common/Footer';
import Header from "./../common/Header";
import './../assets/css/account.css';
const Account = () => (
    <div className="fade-in account-main-body">
        <header class="account-header">
            <div class="container login-form">
            <Header />
                <div class="col-sm-6">
                    <span class="login-title">LOG IN</span>
                    <form class="form">
                        <span class="input-title">Email</span>
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                        </div>
                        <span class="input-title">Password</span>
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <button class="login-button">LOG IN</button>
                            </div>
                            <div class="col-sm-7">
                                <p class="forget-password"> FORGOT PASSWORD ?</p>
                            </div>
                        </div>
                        <hr class="d-block d-sm-none" />
                        <div class="container mt50">
                            <p class="signup">DONT HAVE AN ACCOUNT?
                    <a href="#">SIGN UP</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </header>
    </div>
)


export default Account;