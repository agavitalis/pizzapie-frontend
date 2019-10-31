import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './partials/Footer';
import Header from './partials/Header';
import Breadcrom from './partials/Breadcrom';


class Contact extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
        <>
            {/*header*/}
            <div className="header-main" id="home">
                <Header/>
            </div>
            {/*//header*/}

            {/* banner */}
            <div className="inner_page-banner one-img">
            </div>
            {/*//banner */}

            {/* breadcrom */}
            <Breadcrom title="contact"/>
            {/* //breadcrom*/}

            {/*contact */}
            <section className="contact py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                <h4 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Get in touch</h4>
                <div className="row agile-info-para">
                    {/*contact-map */}
                    <div className="col-lg-4 col-md-4 address_mail_footer_grids">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199970.4333595444!2d7.5076964943158755!3d6.368325996417799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a728c3b30bbd%3A0x3bb41dc04492c6d0!2sEnugu%20Lifestyle%20%26%20Golf%20City%20Administrative%20Building!5e0!3m2!1sen!2sin!4v1572509849165!5m2!1sen!2sin"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 abt-inner-w3layouts-img">
                    <img src="images/ab3.jpg" alt className="img-fluid" />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-8 contact-list-grid">
                    <h4>Drop us a line </h4>
                    <p className="pb-3">Do you want to reserve a pizza or hear for us? </p>
                    <div className="footer_grid_left">
                        <ul>
                        <li>
                            <span className="fas fa-map-marker"> </span>
                            <p>Centinary Estate Enugu, Enugu State
                            </p></li>
                        <li>
                            <span className="fas fa-envelope"> </span>
                            <p><a href="mailto:vivvaa.vivvaa@gmail.com">sales@pizzapie.com</a> 
                            </p>
                        </li>
                        
                        <li>
                            <span className="fas fa-phone-volume"> </span>
                            <p>+(234) 816 3922 749</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="contact-agile-grid-text mt-lg-4 mt-md-3 mt-3 shadow-sm p-3">
                    <form action="#" method="post">
                        <div className=" agile-wls-contact-mid">
                            <div className="form-group contact-forms">
                            <input type="text" className="form-control" placeholder="Name" required />
                            </div>
                            <div className="form-group contact-forms">
                            <input type="email" className="form-control" placeholder="Enter" required />
                            </div>
                            <div className="form-group contact-forms">
                            <input type="text" className="form-control" placeholder="Phone" required />
                            </div>
                            <div className="form-group contact-forms">
                            <textarea className="form-control" rows={3} placeholder="Message" required defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-block sent-butnn">Send</button>
                        </div>
                    </form>
                </div>
                </div>
            </section>
            {/*//contact  */}

            {/*//footer  */}
            <Footer/>
            {/*//footer  */}

        </>
    )
  }

}

export default Contact;
