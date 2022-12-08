import React from "react";
import {Routes, Route, Link} from 'react-router-dom'


const Knots = () => {

    const Gif = () => (
        <div className="gifDiv">
            <img src='https://media.giphy.com/media/I5yH9Aeq0EGCA/giphy.gif'/>
        </div>
    )

    const Bend = () => (
    <div>
        <h2>Alpine Buttefly Bend</h2>
        <iframe width="528" height="309" src="https://www.youtube.com/embed/J5tCb4JINIg" title="Alpine Butterfly Bend | How to Tie an Alpine Butterfly Bend" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>)

    const Loop = () => (
    <div>
        <h2>Alpine Butterfly Loop</h2>
        <iframe width="528" height="309" src="https://www.youtube.com/embed/gX1dWKg6Ttc" title="How to Tie an Alpine Butterfly Loop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>)

    const BlakesHitch = () => (
    <div>
        <h2>Blake's Hitch</h2>
        <iframe width="528" height="309" src="https://www.youtube.com/embed/fXpuKxvIZa0" title="Blake's Hitch Knot | How to Tie a Blake's Hitch Knot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>)

    const Bowline = () => (
    <div>
        <h2>Noose Knot</h2>
        <iframe width="528" height="309" src="https://www.youtube.com/embed/YXRnPES0Qec" title="How to Tie a Bowline Knot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>)

    const DoubleBend = () => (
    <div>
        <h2>Double Fisherman's Bend</h2>
        <iframe width="528" height="309" src="https://www.youtube.com/embed/O6oJwedcb18" title="How to Tie the Double Fisherman's Knot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>)

    const FigureBend = () => (
    <div>
        <h2>Figure 8 Bend</h2>
        <iframe width="528" height="309" src="https://www.youtube.com/embed/w6x-TK6L2Tk" title="Figure 8 Bend | How to Tie the Figure 8 Bend" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>)

    const Stopper = () => (
    <div>
        <h2>Double Overhand Stopper</h2>
        <iframe width="528" height="309" src="https://www.youtube.com/embed/7Eso8q84aCc" title="Double Overhand Knot | How to Tie the Double Overhand Knot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>)

    const Follow = () => (
    <div>
        <h2>Figure 8 Follow Through Loop</h2>
        <iframe width="528" height="309" src="https://www.youtube.com/embed/aLopeVBb7yU" title="How to Tie the Figure 8 Follow Through Loop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>)

    return (
        <>
            <div className="knotDiv">
                    <button><Link className="f6" to='/climbing-knots/alpine-butterfly-bend'>Alpine Buttefly Bend</Link></button>
                    <button><Link className="f6" to='/climbing-knots/alpine-butterfly-loop'>Alpine Butterfly Loop</Link></button>
                    <button><Link className="f6" to='/climbing-knots/blakes-hitch'>Blake's Hitch</Link></button>
                    <button><Link className="f6" to='/climbing-knots/bowline'>Bowline</Link></button>
                    <button><Link className="f6" to='/climbing-knots/double-fishermans-knot'>Double Fisherman's Bend</Link></button>
                    <button><Link className="f6" to='/climbing-knots/figure-8-bend'>Figure-8 Bend</Link></button>
                    <button><Link className="f6" to='/climbing-knots/double-overhand-stopper'>Double Overhand Stopper</Link></button>
                    <button><Link className="f6" to='/climbing-knots/figure-8-follow-through-loop'>Figure 8 Follow Through Loop</Link></button>
            </div>
            <Routes>
                <Route exact path='/climbing-knots/*'/>
                <Route path='/' element={<Gif/>}/> 
                <Route path='/alpine-butterfly-bend' element={<Bend/>}/>
                <Route path='/alpine-butterfly-loop' element={<Loop/>}/>
                <Route path='/blakes-hitch' element={<BlakesHitch/>}/>
                <Route path='/bowline' element={<Bowline/>}/>
                <Route path='/double-fishermans-knot' element={<DoubleBend/>}/>
                <Route path='/double-overhand-stopper' element={<Stopper/>}/>
                <Route path='/figure-8-bend' element={<FigureBend/>}/>
                <Route path='/figure-8-follow-through-loop' element={<Follow/>}/>
            </Routes>
            </>
    )
}

export default Knots