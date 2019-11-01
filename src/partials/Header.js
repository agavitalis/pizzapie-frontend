import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component{
    constructor(props) {
        super(props)
    }



    render(){
    return(
        <>
           <div className="header-outs">
                <div className="header-bar">
                <h1><Link to="/">Pizza-Pie</Link></h1>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className={"menu " + this.props.active}>
                <div className="cart"data-toggle="modal" data-target="#certModal">
                    <span className="fas fa-shopping-cart mr-2"></span>
                    <span className="badge badge-light">{this.props.cart}</span>
                </div>       
                <a href id="menuToggle" onClick={this.props.showMenu}> <span className="navClosed" /> </a>
                <nav>
                    <Link to="/" className="active">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                </div>
                <div className="clearfix"> </div>
          </div>

        </>
    )}
}

export default Header;