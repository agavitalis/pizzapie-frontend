import React from 'react';

function Footer(props){
    return(
        <>
            {/*Footer */}
            {/*footer-top */}
            <section className="footer-reservation py-lg-4 py-md-4 py-sm-3 py-3">
            <div className="container py-lg-3 py-md-3 py-3">
                <div className="row text-center">
                <div className="col-lg-4 wthree-left-right">
                    <h4 className="pb-lg-3 pb-3">We Open</h4>
                    <div className="wls-hours-list">
                    <ul>
                        <li className="d-flex py-1">Monday   <span className="time ml-auto"> 9:30-8:30</span></li>
                        <li className="d-flex py-1">Tuesday  <span className="time ml-auto"> 9:30-8:30</span></li>
                        <li className="d-flex py-1">Wednesday<span className="time ml-auto"> 9:30-8:30</span></li>
                        <li className="d-flex py-1">Thursday <span className="time ml-auto"> 9:30-8:30</span></li>
                        <li className="d-flex py-1">Friday   <span className="time ml-auto"> 9:30-8:30</span></li>
                        <li className="d-flex py-1">Saturday <span className="time ml-auto"> 9:30-8:30</span></li>
                        <li className="d-flex py-1">Sunday   <span className="time ml-auto"> closed</span></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-4 wthree-left-right upper-footer">
                </div>
                <div className="col-lg-4 wthree-left-right ">
                    <div className="middle-mid-grid">
                    <h4 className="pb-lg-3 pb-3">Make A Reservation</h4>
                    <div className="book-here">
                        <p>Don't let your busy schedule robe you off you favourite yummy</p>
                        <a href="contact.html" className="text-center">Make a reserve </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/*//footer-top */}
            {/*Advert Space*/}
            <section className="advert-footer py-lg-4 py-md-3 py-sm-3 py-3">
            <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                <div className="state-us row">
                <div className="col-lg-12 col-md-12 subcribe-right">
                    <h4 className="text-center"> Tasty Pizza For You</h4>
                </div>
                </div>
            </div>
            </section>
            {/*//Advert Space*/}
            <section className="buttom-footer py-lg-4 py-md-3 py-sm-3 py-3">
            <div className="container pt-lg-5 pt-md-5 pt-sm-4 pt-4">
                <div className="row footer-agile-grids ">
                <div className="col-lg-6 col-md-12 wthree-left-right">
                    <div className="row">
                    <div className="col-md-4 footer-header pl-0">
                        <h5><a href="index.html">Pizza-Pie</a></h5>
                        <p>Testy Yummy</p>
                    </div>
                    <div className="col-md-8 footer-para">
                        <p>Enugu State,<br />Enugu,Nigeria.</p>
                        <p>+(234) 81 6392 2749</p>
                        <p><a href="mailto:vivvaa.vivvaa@gmail.com">sales@pizzapie.com</a></p>
                    </div>
                    </div>
                </div>
                <div className="wthree-left-right col-lg-6 col-md-12 text-right">
                    <h4 className="pb-lg-3 pb-3">Socialize</h4>
                    <div className="icons">
                    <ul>
                        <li><a href="#"><span className="fas fa-envelope" /></a></li>
                        <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><span className="fab fa-twitter" /></a></li>
                        <li><a href="#"><span className="fab fa-instagram" /></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <footer>
            <p>©2019 Pizza-Pie. All Rights Reserved</p>
            </footer>
            {/*Footer */}
         </>

    )
}

export default Footer;