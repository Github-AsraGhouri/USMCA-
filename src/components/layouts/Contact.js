import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import './../assets/css/contact.css'
const Contact= () => (
 <div class="fade-in contact-main-body">
    <header class="contact-header">
        <div class="container">
            <Header/>
            <h1 class="mt100 contact-haeading">CONTACT USMCA</h1>
        </div>
    </header>
    <div class="contact-body">
        <div class="container">
            <div class="row">

                <div class="col-sm-8 contact-body-col1">
                    <h5 class=" hidden-heading   d-block d-sm-none">CONTACT DETAILS</h5>
                    <div class="col-sm-3 hidden-datails d-block d-sm-none">
                        <span class="sidebar-title">PHONE</span>
                        <p>(952) 933-7800</p>
                        <span class="sidebar-title">EMAIL</span>
                        <p>info@companyurl.com</p>
                        <span class="sidebar-title">ADDRESS</span>
                        <p>1234 5th Street South
                            <br/>Minneapolis, MN 55454
                        </p>
                    </div>
                    <div class="row mt50">
                        <div class="col-sm-12">
                            NAME
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="row coach-body-rows">
                        <div class="col-sm-6">
                            EMAIL
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="col-sm-6">
                            PHONE
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="row coach-body-rows">
                        <div class="col-md-12">
                            STREET
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="row coach-body-rows">
                        <div class="col-sm-5">
                            CITY
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="col-sm-4">
                            STATE
                            <select class="form-control">
                                <option>-Select-</option>
                            </select>
                        </div>
                        <div class="col-sm-3">
                            ZIP CODE
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group coach-body-rows">
                        MESSAGE
                        <textarea class="form-control" id="exampleTextarea" rows="5"></textarea>
                    </div>
                    <div class="row row-btn">
                        <div class="col-sm-12">
                            <button type="button" class="submit-button">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 sidebar d-none d-sm-block">
                    <span class="sidebar-title">PHONE</span>
                    <p>(952) 933-7800</p>
                    <span class="sidebar-title">EMAIL</span>
                    <p>info@companyurl.com</p>
                    <span class="sidebar-title">ADDRESS</span>
                    <p>1234 5th Street South
                        <br/>Minneapolis, MN 55454
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
 </div>
);

export default Contact;