import React, { Component } from 'react';

class MyCart extends Component {
    constructor() {
        super()
        this.state = {
            products:[]
        }
    }
    getProducts = async () => {
    const call = await fetch('http://localhost:3001/cart')
    const res = await call.json()
    this.setState({products:res})
}

componentDidMount() {
    this.getProducts() 
}




    render() {
        return (
            <div>
                <h2 className='tl'>My Cart</h2>
                <div className='cartProducts'>
                    <ul>
                        {
                            this.state.products.map(item => {
                                return(
                                    <li>{item.name} {item.price}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default MyCart;