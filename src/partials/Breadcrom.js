import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Breadcrom(props){
    return(
        <>
           <div className="using-border py-3">
                <div className="inner_breadcrumb  ml-4">
                <ul className="short_ls">
                    <li>
                    <Link to="/">Pizza-Pie </Link>
                    <span>|| </span>
                    </li>
                    <li> {" || " + props.title}</li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Breadcrom;