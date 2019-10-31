import React from 'react';
import Footer from './partials/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './partials/Header';
import PizzaMenu from './partials/PizzaMenu';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      active:false,
      cart: 0,
      cart_item: []
    }

    this.showMenu = this.showMenu.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(){
      this.setState({ 
          cart: Number(this.state.cart) + 1
      }); 
      localStorage.setItem('cart',this.state.cart);  
  }

  removeFromCart(){

      this.setState({ 
          cart: Number(this.state.cart) - 1
      });
      localStorage.setItem('cart',this.state.cart); 
  }

  showMenu(){
    if(!this.state.active){
        this.setState({ 
            active: "open"
        });
    }else{
        this.setState({ 
            active: false
        });
    }    
  }

  componentDidMount(){
    this.setState({
      cart:localStorage.getItem('cart')
    })
  }

  render() {

    return (
      <div>
        <div className="header-main" id="home">
          <Header  showMenu={this.showMenu} cart={this.state.cart} active={this.state.active} />
         
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
              <div className="col-lg-6 col-md-6 pizza-left-side-img">
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
                  <a href="#classic-pizza">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//about */}
        {/*Our Menu*/}
        <PizzaMenu addToCart={this.addToCart}/>
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
