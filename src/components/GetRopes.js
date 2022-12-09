import React from "react"
import 'tachyons'

class GetRopes extends React.Component {
    constructor() {
        super()
        this.state = {
            ropes:[]
        }
    }
    getProducts = async () => {
    const call = await fetch('http://localhost:3001/products/ropes')
    const res = await call.json()
    this.setState({ropes:res})
}

    componentDidMount() {
        this.getProducts()
    }

render() {
    return(
        <div className="productsContainer">
            <h2>
                Ropes
            </h2>
            <div className="productsDiv">
            {
                this.state.ropes.map( item => {
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

export default GetRopes