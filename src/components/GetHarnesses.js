import React, { Component } from 'react';
import 'tachyons'

class GetHarnesses extends Component {
    constructor() {
        super()
        this.state = {
            harnesses:[]
        }
    }
    getProducts = async () => {
        const call = await fetch('http://localhost:3001/products/harnesses')
        const res = await call.json()
        this.setState({harnesses:res})
    }

    componentDidMount() {
        this.getProducts() 
    }
    render() {
        return (
        <div className="productsContainer">
            <h2>
                Harnesses
            </h2>
            <div className="productsDiv">
            {
                this.state.harnesses.map( item => {
                    return(
                        <div className="grow product" key={item.item_id}>
                            <img className="prodImg" alt={item.name} src={item.image}/>
                            <h3>{item.name}</h3>
                            <h3>{item.price}</h3>
                        </div>
                    )
                })
                
            }
            </div>
            </div>

        );
    }
}

export default GetHarnesses;