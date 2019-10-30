import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <div className="header-main" id="home">
          <div className="header-outs">
            <div className="header-bar">
              <h1><a href="index.html">Pizza-Pie</a></h1>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="menu">
              <a href id="menuToggle"> <span className="navClosed" /> </a>
              <nav>
                <a href="index.html" className="active">Home</a>
                <a href="contact.html">Contact</a>
              </nav>
            </div>
            <div className="clearfix"> </div>
          </div>
          {/* //Navigation */}
          {/* Slideshow 4 */}
          <div className="slider">
            <div className="callbacks_container">
              <ul className="rslides" id="slider4">
                <li>
                  <div className="slider-img one-img">
                    <div className="container">
                      <div className="slider-info ">
                        <h5>Fun times With Pizza</h5>
                        <div className="bottom-info">
                          <h4>Pizza-Pie Forever</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="slider-img two-img">
                    <div className="container">
                      <div className="slider-info ">
                        <h5>Small Bite Make Joy</h5>
                        <div className="bottom-info">
                          <h4>Pizza-Pie Forever</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="slider-img three-img">
                    <div className="container">
                      <div className="slider-info">
                        <h5>Enjoy A day With Pizza </h5>
                        <div className="bottom-info">
                          <h4>Pizza-Pie Forever</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* This is here just to demonstrate the callbacks */}
            <div className="clearfix" />
          </div>
        </div>
        {/* //banner */}
        {/*about */}
        <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
          <div className="container py-lg-5 py-md-5 py-sm-4 py-4">
            <div className="row agile-abt-info ">
              <div className="col-lg-6 col-md-6 w3layouts-left-side-img">
                <img src="images/ab1.png" alt className="intro-img img-fluid" />
              </div>
              <div className="col-lg-6 col-md-6 info-sub-w3 pb-lg-3 pb-md-2 pb-2">
                <div className="jst-wthree-text pb-3">
                  <h2>Welcome To Pizza-Pie
            </h2>
                  <p>We are not only make pizza here,<br />We make yummy and tasty pizza </p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  Lorem ipsum dolor sit amet
          </p>
                <div className="outs_more-buttn">
                  <a href="about.html">Really?</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//about */}
        {/*Our Menu*/}
        <section className="our-menu py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 className="title text-center clr mb-lg-5 mb-md-4 mb-sm-4 mb-3">Classic Top 10</h3>
            {/*Horizontal Tab*/}
            <div id="horizontalTab">
              <ul className="resp-tabs-list">
                <li>Chicken Beef Brand</li>
                <li>Hot Beaf Brew Brand</li>
              </ul>
              <div className="resp-tabs-container">
                <div className="tab1">
                  <div className="latest-blog">
                    <div className=" tabs-menu-grid">
                      <div className="grid-hover">
                        <a href="blog.html" className="column "><span className="text">Pizza</span><img src="images/g1.jpg" alt="img04" className="img-fluid" /></a>
                      </div>
                      <div className=" grid-hover">
                        <a href="blog.html" className="column "><span className="text">Pizza</span><img src="images/g2.jpg" alt="img04" className="img-fluid" /></a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column "><span className="text">Pizza</span><img src="images/g3.jpg" alt="img04" className="img-fluid" /></a>
                      </div>
                      <div className="grid-hover ">
                        <a href="blog.html" className="column "><span className="text">Pizza</span><img src="images/g4.jpg" alt="img04" className="img-fluid" /></a>
                      </div>
                    </div>
                    <div className="tabs-menu-grid">
                      <div className="grid-hover">
                        <a href="blog.html" className="column "><span className="text">Pizza</span><img src="images/g3.jpg" alt="img04" className="img-fluid" /></a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column "><span className="text">Pizza</span><img src="images/g1.jpg" alt="img04" className="img-fluid" /></a>
                      </div>
                      <div className="grid-hover ">
                        <a href="blog.html" className="column "><span className="text">Pizza</span><img src="images/g4.jpg" alt="img04" className="img-fluid" /></a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column "><span className="text">Pizza</span><img src="images/g2.jpg" alt="img04" className="img-fluid" /></a>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div className="tab2">
                  <div className="latest-blog">
                    <div className="tabs-menu-grid">
                      <div className="grid-hover">
                        <a href="blog.html" className="column">
                          <span className="text">Order</span>
                          <img src="images/g3.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column">
                          <span className="text">Order</span>
                          <img src="images/g1.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column">
                          <span className="text">Order</span>
                          <img src="images/g4.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column">
                          <span className="text">Order</span>
                          <img src="images/g2.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column">
                          <span className="text">Order</span>
                          <img src="images/g2.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className="tabs-menu-grid">
                      <div className="grid-hover">
                        <a href="blog.html" className="column">
                          <span className="text">Order</span>
                          <img src="images/g1.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column">
                          <span className="text">Order</span>
                          <img src="images/g2.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column ">
                          <span className="text">Order</span>
                          <img src="images/g3.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column ">
                          <span className="text">Order</span>
                          <img src="images/g3.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                      <div className="grid-hover">
                        <a href="blog.html" className="column ">
                          <span className="text">Order</span>
                          <img src="images/g4.jpg" alt="img04" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//Our Menu */}
        <section className="State-menu py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="stats-info row ">
              <div className="col-lg-4 col-md-4 col-sm-4 stats-grid stats-grid-1">
                <div className="register-left-agile">
                  <div className="counter">1200</div>
                  <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-3">
                    <h4>Order</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 stats-grid stats-grid-2">
                <div className="register-left-agile">
                  <div className="counter">4000</div>
                  <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-3">
                    <h4>Delivery</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 stats-grid stats-grid-3">
                <div className="register-left-agile">
                  <div className="counter">3200</div>
                  <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-3">
                    <h4>Clients</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet</p>
                    <a href="contact.html" className="text-center">Contact </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//footer-top */}
        {/*subscribe*/}
        <section className="subscribe-footer py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="state-us row">
              <div className="col-lg-12 col-md-12 subcribe-right">
                <h4 className="text-center"> Tasty Pizza For You</h4>
              </div>
            </div>
          </div>
        </section>
        {/*//subscribe*/}
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
      </div>

    )
  }

}

export default App;
