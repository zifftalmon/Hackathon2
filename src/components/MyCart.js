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
                    <table>
                        <th className='f3'>Product</th>
                        <th className='f3'>Price</th>
                        <th className='f3'>Qt</th>
                        <tr>
                        {
                            this.state.products.map(item => {
                                return(
                                    <>
                                    <td className='f4'>{item.name}</td>
                                    <td className='f4'>{item.price}</td>
                                    <td className='f4'>2</td>                
                                    </>
                                        )
                                    })
                                }
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default MyCart;