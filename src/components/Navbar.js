import {Routes, Route, Link} from 'react-router-dom'
import { ContactUs } from './Contact'
import { Fact } from './Fact'
import { Walls } from './Walls'
import Store from './Store'
import  Knots  from './Knots'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import MyCart from './MyCart'


class Navbar extends React.Component {
    Home ()  {
        return (
            <div>
                <hr/>
                <h2>Home</h2>
            </div>
        )
    }

    Store ()  {
        return (
            <div>
                <hr/>
                <Store/>
            </div>
        )
    }

    
    Climbing () {
        return (
            <div>
                <hr/>
                <h2>Climbing Knots</h2>
                <Knots/>
            </div>
        )
    }

    Useful () {
        return (
            <div>
                <hr/>
                <h2>Walls Near You</h2>
                <Walls/>
            </div>
        )
    }

    Facts () {
        return (
            <div>
                <hr/>
                <Fact/>
            </div>
        )
    }

    Contact () {
        return (
            <div>
                <hr/>
                <ContactUs/>
            </div>
        )
    }

    Cart () {
        return (
            <div>
                <hr/>
                <MyCart/>
            </div>
        )
    }

    render() {
        return (
            <>
            <div className='navbar'>
                <ul>
                    <Link to='/'><h3>Climbing Store</h3></Link>
                    <li><Link to='/store'>Store</Link></li>
                    <li><Link to='/climbing-knots/'>Climbing Knots</Link></li>
                    <li><Link to='/useful-knots'>Climbing Walls Near You</Link></li>
                    <li><Link to='/facts'>Climbing Facts</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/cart'><FaShoppingCart/></Link></li>
                </ul>
            </div>
            <Routes>
                <Route exact path='/' element={<this.Home/>}/>
                <Route path='/store/*' element={<this.Store/>}/>
                <Route path='/climbing-knots/*' element={<this.Climbing/>}/>
                <Route path='/useful-knots' element={<this.Useful/>}/>
                <Route path='/facts' element={<this.Facts/>}/>
                <Route path='/contact' element={<this.Contact/>}/>
                <Route path='/cart' element={<this.Cart/>}/>                    
            </Routes>
            </>
        );
    }
}

export default Navbar;