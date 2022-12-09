import React from "react"
import 'tachyons'

class GetHelmets extends React.Component {
    constructor() {
        super()
        this.state = {
            helmets:[]
        }
    }
    getProducts = async () => {
    const call = await fetch('http://localhost:3001/products/helmets')
    const res = await call.json()
    this.setState({helmets:res})
}

componentDidMount() {
    this.getProducts() 
}

render() {
    console.log(this.state.helmets);
    return(
        <div className="productsContainer">
            <h2>
                Helmets
            </h2>
            <div className="productsDiv">
            {
                this.state.helmets.map( item => {
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

export default GetHelmets