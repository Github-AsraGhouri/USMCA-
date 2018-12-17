import React from "react";
import Footer from './../common/Footer';
import Header from "./../common/Header";
import './../assets/css/coaching.css'
const Article = () => (
 <div class="fade-in article-main-body">
    <header class="coaching-header">
        <div class="container">
            <Header/>
            <div class="ridding-header-title">
                <div class="offset-2">
                <h1>THE FUTURE
                    <br/> OF RIDING
                </h1>
                </div>
                <div class="offset-sm-2 mt20 save-a-coach-div d-none d-sm-block">
                    <button type="button" class="certified-button ">
                        GET CERTIFIED &#9205
                    </button>
                    <button type="button" class="get-register-button" href="register.html">
                        REGISTER &#9205
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="container container1-width">
        {/* <!-- Section One --> */}
        <section class="row main section-1">
            <div class="col-md-6">
                <img src={require("./../assets/imgs/section-2.png")} class="ridding-section-1-img" alt="SDK" />
            </div>
            <div class="col-md-6 usmca-certification">
                <h1 class="mbr-title section-details">USMCA
                    <br/> CERTIFICATIONS</h1>
                <p class="mbr-text section-details">
                    Aenean u leo quam. Pellentesque ornare sem
                    <br/> lacinia quam venenatis vastibulum. Sed
                    <br/> posuere consectetur est at lobortis. Praesent
                    <br/> commodo curus magna. Vivamus Sagittis lacus
                    <br/> vel augue laoreet rutrolvel scelerisque.
                    <br/>
                    <br/>
                    <span class="color-red">
                        LEARN MORE &#9205
                    </span>
                </p>
            </div>
        </section>
        <section class="mt50">
        <div class="container container2-width">
            <div class="row">
                <div class="col-sm-7 sec-2-div">
                    <div class="section2-left">
                        <h3 class="sec-2-title">
                            THE BENEFITS OF COACHING
                        </h3>
                        <p>
                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibul um.
                            <br/>Sed Posuere consectetur est at lobortis. Praesent commodo cursus magna.
                        </p>
                    </div>
                    <div class="section-two-summary d-block d-sm-none">
                            <div class="title-summary">
                                <h5>TITLE OF BENEFIT</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Viv amus
                                    <br/> sagittis lacus vel augue laoreet rutrum. Sed posuere consectetur est at
                                    <br/> lobortis.
                                </p>
                            </div>
                            <div class="title-summary">
                                <h5>TITLE OF BENEFIT</h5>
                                <p>
                                    Cum sociis natoque penet magnis dis parturient montes, nascetur
                                    <br/>ridiculus mus. Aenean eu leo quam.
                                </p>
                            </div>
                            <div class="title-summary">
                                <h5>TITLE OF BENEFIT</h5>
                                <p>
                                    Donec ullamcorper nulla non metus autor fringilla. Nulla vitae elit
                                    <br/>libero, a phatetra augue.
                                </p>
                            </div>
                            <div class="title-summary">
                                <h5>TITLE OF BENEFIT</h5>
                                <p>
                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Sed
                                    <br/>posuere consectetur est lobortis. Etiam prta sem malesuada magna
                                    <br/>mollis euismod.
                                </p>
                            </div>
                        </div>
                </div>
                <div class="col-sm-5">
                    <img src={require("./../assets/imgs/DSC_5939.jpg")} class="coaching-section-2-img" alt="SDK" />
                </div>
            </div>
            <div class="row coaching-row-2">
                <div class="col-sm-7">
                    <div class="section-two-summary d-none d-sm-block">
                            <div class="title-summary">
                                <h5>TITLE OF BENEFIT</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Viv amus
                                    <br/> sagittis lacus vel augue laoreet rutrum. Sed posuere consectetur est at
                                    <br/> lobortis.
                                </p>
                            </div>
                            <div class="title-summary">
                                <h5>TITLE OF BENEFIT</h5>
                                <p>
                                    Cum sociis natoque penet magnis dis parturient montes, nascetur
                                    <br/>ridiculus mus. Aenean eu leo quam.
                                </p>
                            </div>
                            <div class="title-summary">
                                <h5>TITLE OF BENEFIT</h5>
                                <p>
                                    Donec ullamcorper nulla non metus autor fringilla. Nulla vitae elit
                                    <br/>libero, a phatetra augue.
                                </p>
                            </div>
                            <div class="title-summary">
                                <h5>TITLE OF BENEFIT</h5>
                                <p>
                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Sed
                                    <br/>posuere consectetur est lobortis. Etiam prta sem malesuada magna
                                    <br/>mollis euismod.
                                </p>
                            </div>
                        </div>
                        </div>
            </div>
        </div>
    </section>

    </div>
    <div class="container section-fourth">

{/* <!-- section fourth --> */}
<section class="row text-center how-it-work">
    <div class="col-sm-12">
        <h2>HOW IT WORKS</h2>
        <p>Aenean eu leo quam. Pellentesque ornare sem quam venenatis vestibulum.
            <br/>Sed Posuere consectetur est at lobortis. Praesent commodo cursus magna.
        </p>
    </div>
</section>

{/* <!-- Section Two --> */}
<section class="row text-center row-section-two mt50">
    <div class="col-md-4">
        <center>
            <img src={require("./../assets/imgs/prepare-icon.png")} class="check" float="center" alt="Gloves" />
        </center>
        <h3 class="sec-2-heading">PREPARE</h3>
        <p>
            Cras mattis consectetur purus sit amet
            <br/> fermentum. Nullam id dollar id nibh
            <br/> ultricies vhicula ut id elit.
            <br/> <br/>
            <span class="color-red"> LEARN MORE &#9205;</span>
        </p>
    </div>
    <div class="col-md-4">
        <center>
            <img src={require("./../assets/imgs/certify-icon.png")} float="center" alt="Badge" />
        </center>
        <h3 class="sec-2-heading">GET CERTIFIED</h3>
        <p>
            Aenean eu leo quam, Pellentesque ornare
            <br/> sem lacinia quam venenatis vestibulum, Sed
            <br/> posuere consectetur est at lobortis.
            <br/>
            <br/>
            <span class="color-red"> START NOW &#9205;</span>
        </p>
    </div>
    <div class="col-md-4">
        <center>
            <img src={require("./../assets/imgs/grow-icon.png")} float="center" alt="Street"/>
        </center>
        <h3 class="sec-2-heading">COACH</h3>
        <p>
            Fusce dapibus, tellus ac cursus commodo,
            <br/> tortor mauris condim entum nibh, ut
            <br/> fermentum massa justo sit amet risus.
            <br/>
            <br/>
            <span class="color-red"> REGISTER &#9205; </span>
        </p>
    </div>
</section>

</div>
{/* // <!-- container is close due to bottom section bg 100% --> */}

{/* // <!-- section sixth --> */}
<section class="coaching-bottom-section mt100">
<div class="container container-footer-section">
    <span class="sec-six-title">READY TO GET STARTED?</span>
    <p class="sec-six-para">Duis mollis, est non commondo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
        <br/> elit. Aenean eu leo quam. pallentesque ornare sem lacinia quam venenatis.
    </p>
    <div class="save-a-coach-div d-none d-sm-block">
        <button type="button" class="get-certified-button">
            GET CERTIFIED &#9205; 
        </button>
    </div>
</div>
<Footer/>
</section>
 </div>
);

export default Article;