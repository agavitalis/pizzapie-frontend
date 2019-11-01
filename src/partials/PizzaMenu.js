import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PizzaMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pizza : [],
            getPizzaURL : process.env.REACT_APP_API_URL+"/api/getAllPizza",
        }
    }

    componentDidMount(){
        fetch(this.state.getPizzaURL).then(response =>response.json())
        .then((res)=>{
            console.log(res)
            this.setState({pizza:res})          
        })
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <section className="our-menu py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
                    <h3 className="title text-center clr mb-lg-5 mb-md-4 mb-sm-4 mb-3">Classic Top 10</h3>
                    {/*Horizontal Tab*/}
                    <div className='row' id="classic-pizza">
                        {
                            this.state.pizza.map((pizza,index)=>{
                                
                                return(
                                  
                                    <div key={index} className="col-md-3 p-3">
                                        <div className="grid-hover">
                                            <div href="#" className="column">
                                                <img src={pizza.picture} alt="img04" className="img-fluid" width="290" height="250"/>
                                                <div className="text">
                                                    <h6>{pizza.name}</h6>
                                                    <p>${pizza.price}</p>
                                                    <button className="btn btn-warning mt-1" data-picture={pizza.picture} data-price={pizza.price} data-name={pizza.name} data-id={pizza.id} onClick={this.props.addToCart}>
                                                        Add to Cart
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                           

                        }
                        
                    </div>

                </div>
            </section>
        
        )
    }
}

export default PizzaMenu;