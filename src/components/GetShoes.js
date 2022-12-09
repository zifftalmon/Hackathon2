import React from "react"
import 'tachyons'

class GetShoes extends React.Component {
    constructor() {
        super()
        this.state = {
            shoes:[]
        }
    }
    getProducts = async () => {
    const call = await fetch('http://localhost:3001/products/shoes')
    const res = await call.json()
    this.setState({shoes:res})
}

componentDidMount() {
    this.getProducts() 
}

render() {
    return(
        <div className="productsContainer">
            <h2>
                climbing shoes
            </h2>
            <div className="productsDiv">
            {
                this.state.shoes.map( item => {
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
        
        )
    }
}

export default GetShoes