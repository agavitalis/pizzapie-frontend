import React from 'react';
import Footer from './partials/Footer';


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
              <div className="cart">
                <span className="fas fa-shopping-cart mr-2"></span>
                <span className="badge badge-light">4</span>
              </div>       
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
                        <h5>Small Bite Gives Joy</h5>
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
                  <h2>Welcome To Pizza-Pie</h2>
                  <p>We not only make pizza,<br />We make yummy and tasty pizza </p>
                </div>
                <p>Our pizza is exclusive and made by the best chefs with the finest ingredients
                  The purpose is to keep you refreshed and going all day long, with just a single bite.
                  pizzapie, a pizza like no other </p>
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
            <div className='row'>
              <div className="col-md-3 p-3">
                <div className="grid-hover">
                  <div href="#" className="column">
                    
                    <img src="images/g3.jpg" alt="img04" className="img-fluid" />
                    <div className="text">
                      <h6>Class Pizza</h6>
                      <p>$200</p>
                      <button className="btn btn-warning mt-1">Add to Cart</button>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="grid-hover">
                  <div href="#" className="column">
                    
                    <img src="images/g3.jpg" alt="img04" className="img-fluid" />
                    <div className="text">
                      <h6>Class Pizza</h6>
                      <p>$200</p>
                      <button className="btn btn-warning mt-1">Add to Cart</button>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="grid-hover">
                  <div href="#" className="column">
                    
                    <img src="images/g3.jpg" alt="img04" className="img-fluid" />
                    <div className="text">
                      <h6>Class Pizza</h6>
                      <p>$200</p>
                      <button className="btn btn-warning mt-1">Add to Cart</button>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="grid-hover">
                  <div href="#" className="column">
                    
                    <img src="images/g3.jpg" alt="img04" className="img-fluid" />
                    <div className="text">
                      <h6>Class Pizza</h6>
                      <p>$200</p>
                      <button className="btn btn-warning mt-1">Add to Cart</button>
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
                    <h4>Orders</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 stats-grid stats-grid-2">
                <div className="register-left-agile">
                  <div className="counter">1190</div>
                  <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-3">
                    <h4>Delivered</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 stats-grid stats-grid-3">
                <div className="register-left-agile">
                  <div className="counter">3200</div>
                  <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-3">
                    <h4>Customers</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>

    )
  }

}

export default App;
