import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header(props){
    return(
        <>
           <div className="header-outs">
                <div className="header-bar">
                <h1><Link to="/">Pizza-Pie</Link></h1>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="menu">
                <div className="cart">
                    <span className="fas fa-shopping-cart mr-2"></span>
                    <span className="badge badge-light">4</span>
                </div>       
                <a href id="menuToggle"> <span className="navClosed" /> </a>
                <nav>
                    <Link to="/" className="active">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                </div>
                <div className="clearfix"> </div>
          </div>

        </>
    )
}

export default Header;