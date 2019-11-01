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
      cart_items: []
    }

    this.showMenu = this.showMenu.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.checkOut = this.checkOut.bind(this);
    this.cart_items = []
  }

  addToCart(e){

    //check the cart
    let pizza_in_cart = JSON.parse(localStorage.getItem("cart_items"));
    //check if this product have been added
    let check = null
    if(pizza_in_cart){
      check = pizza_in_cart.find(p => p.id === e.target.dataset.id)
    } 
    if(!check){

      //build an object with what was clicked
      let cart_object = {
        id: e.target.dataset.id,
        name: e.target.dataset.name,
        quantity: 1,
        picture: e.target.dataset.picture,
        price: e.target.dataset.price
      }

      //push this object to the list of arrays
      this.cart_items.push(cart_object)

      //update the cart state
      this.setState({ 
        cart_items: this.cart_items,
        cart: Number(this.state.cart) + 1
      });
      //save to local storage
      localStorage.setItem('cart',this.state.cart);  
      localStorage.setItem("cart_items", JSON.stringify(this.state.cart_items));

    }else{
      alert("Pizza already added to cart")
    }
    
  }

  increaseQty(e){

    let pizza_in_cart = JSON.parse(localStorage.getItem("cart_items"));
    
    pizza_in_cart.find((o, i) => {

        if (o.id === e.target.dataset.id) {
            pizza_in_cart[i].quantity = Number(pizza_in_cart[i].quantity) + 1
            //pizza_in_cart[i] = { name: 'new string', value: 'this', other: 'that' };
            return true; 
        }

    });
    
    console.log(pizza_in_cart)

    

  }

  decreaseQty(){
    this.setState({ 
      cart: Number(this.state.cart) - 1
    }); 
    localStorage.setItem('cart',this.state.cart); 
  }

  removeFromCart(){
      this.setState({ 
        cart: Number(this.state.cart) - 1
      }); 
      localStorage.setItem('cart',this.state.cart); 
  }

  showCart(){

    this.setState({ 
      cart_items: JSON.parse(localStorage.getItem("cart_items"))
    }); 
   
  }

  checkOut(){
    this.props.history.push('/checkout')
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

    let cart_init = JSON.parse(localStorage.getItem("cart_items"))
    if(cart_init){

      this.setState({
        cart:localStorage.getItem('cart'),
        cart_items: JSON.parse(localStorage.getItem("cart_items"))
      })

    }
    
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


        <div>
          
          {/*Cart Modal */}
          <div className="modal fade" id="certModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Cart</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Pizza</th>
                      <th scope="col">Picture</th>
                      <th scope="col">Qty</th>
                      <th scope="col" width="120px">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {
                      this.state.cart_items.map((pizza,index)=>{
                        return(

                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <th>{pizza.name}</th>
                            <th>Picture</th>
                            <th>{pizza.quantity}</th>
                            
                            <td className="text-center">
                              <i class="fa fa-minus mr-3" data-id={pizza.id} onClick={this.removeFromCart}  aria-hidden="true"></i>
                              <i class="fa fa-plus mr-4" data-id={pizza.id} onClick={this.increaseQty} aria-hidden="true"></i>
                              <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                            </td>
                            
                          </tr>

                        )
                      })
                     
                    }
                   
                  </tbody>
                 
                </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Clear Cart</button>
                  <Link to="/checkout"><button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.checkOut}>Checkout</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }

}

export default App;
