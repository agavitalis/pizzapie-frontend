import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Breadcrom from './partials/Breadcrom';


class Checkout extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            active:false,
            first_name :'',
            last_name :'',
            email :'',
            address :'',
            country :'',
            state :'',
            cart: 0,
            cart_items: [],
            checkOutURL : process.env.REACT_APP_API_URL+"/api/checkOut",
        }
        this.showMenu = this.showMenu.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showMenu() {
        if (!this.state.active) {
            this.setState({
                active: "open"
            });
        } else {
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

    handleChange(input) {

        let name = input.target.name;
        let value = input.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
       
        var data =  {
                        first_name :this.state.first_name,
                        last_name :this.state.last_name,
                        email : this.state.email,
                        address :this.state.address,
                        country :this.state.country,
                        state :this.state.state,
                        cart: JSON.parse(localStorage.getItem("cart_items"))
                    }

        console.log(JSON.stringify(data))

        fetch(this.state.checkOutURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;text/json'
            }
        }).then(res => res.json())
        .then((response)=>{
            if(JSON.stringify(Number(response.status)) == 200)
            {
                alert("Your orders have been recorded")
                //clear cart

                //back to home
                localStorage.removeItem('cart_items')
                localStorage.removeItem('cart')
                
                this.props.history.push('/');

            }else{
               console.log(typeof(response))    
               console.log(JSON.parse(response))         
            }
            
        })
        .catch(error => alert("We couldnt place you orders at this time, please try again"+ error + this.state.checkOutURL)); 
        event.preventDefault();
    }
    
    render() {
        var total_price = 0
        return (
            <>
                {/*header*/}
                <div className="header-main" id="home">
                    <Header showMenu={this.showMenu} active={this.state.active} />
                </div>
                {/*//header*/}

                {/* banner */}
                <div className="inner_page-banner one-img"></div>
                {/*//banner */}

                {/* breadcrom */}
                <Breadcrom title="Checkout" />
                {/* //breadcrom*/}

                {/* Content */}
                <section className="py-lg-4 py-md-3 py-sm-3 py-3">
                    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                        <div className="row">
                            <div className="col-md-4 order-md-2 mb-4">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span>Your cart</span>
                                </h4>
                                <ul className="list-group mb-3">
                                {
                                   
                                    this.state.cart_items.map((pizza,index)=>{
                                       total_price = total_price + (Number(pizza.price) * Number(pizza.quantity))
                                        return(
                                                    <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
                                                        <div>
                                                            <h6 className="my-0">{pizza.name}</h6>
                                                            <small className="text-muted">Qty: {pizza.quantity}</small>
                                                        </div>
                                                        <span className="text-muted">${pizza.price}</span>
                                                    </li> 
                                                )  
                                    })
                                }
                                                                       
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>${total_price}</strong>
                                    </li>
                                </ul>
                               
                            </div>
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3">Delivery address</h4>
                                <h6 className="mb-3">All payments will be made on delivery</h6>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName">First name</label>
                                            <input type="text" className="form-control" name="first_name"  placeholder="Your First Name" required onChange={this.handleChange}/>
                                            
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName">Last name</label>
                                            <input type="text" className="form-control" name="last_name" placeholder="Your Last Name" required onChange={this.handleChange}/>
                                           
                                        </div>
                                    </div>
                                   
                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="johndoe@gmail.com" required onChange={this.handleChange}/>
                                       
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" className="form-control" name="address" placeholder="1234 Main St" required onChange={this.handleChange}/>
                                        
                                    </div>
                                    
                                    <div className="row">
                                        
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="country">State</label>
                                            <input type="text" className="form-control" name="state" placeholder="Eg:Enugu" required onChange={this.handleChange}/>
                                            
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="country">Country</label>
                                            <input type="text" className="form-control" name="country" placeholder="Eg:Nigeria" required onChange={this.handleChange}/>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <hr className="mb-4" />
                                    <button className="btn btn-primary" type="submit">Continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //Content*/}


                {/*//footer  */}
                <Footer />
                {/*//footer  */}

            </>
        )
    }

}

export default Checkout;
