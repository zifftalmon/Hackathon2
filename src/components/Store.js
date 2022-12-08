import React, { Component } from 'react';

class Store extends Component {
    constructor() {
        super()
        this.state ={
          products: [],
        }
      }
    
      getProducts = async () => {
        const call = await fetch('http://localhost:3001/products')
        const res = await call.json()
        this.setState({products:res})
      }

      componentDidMount() {
        this.getProducts()
      }
    
    render() {
        return (
            <div className='storeDiv'>
                {
                    this.state.products.map( item => {
                        return(
                            <div className='productDiv' key={item.item_id}>
                                <img alt={item.name} src={item.image}/>
                                <h3>{item.name}</h3>
                                <h3>{item.price}</h3>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Store;