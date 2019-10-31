import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import Contact from './Contact';

function Nav() {
    return (
  
        <Router>
    
            {/* Register the routes here */}
            <Route exact path="/" component={App} />
            <Route exact path="/contact" component={Contact} />
        
        </Router>
      
    );
}

ReactDOM.render(<Nav />, document.getElementById('root'));

