// import React, { Component } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import GetShoes  from './GetShoes';
import GetHarnesses from './GetHarnesses';
import GetRopes from './GetRopes';
import GetHelmets from './GetHelmets';

const Store = () => {

    const handleShoes = () => {
        <GetShoes/>
    }

    const Store = () => {
        return(
            <h2>Store</h2>
        )
    }
        return (
        <>
            <div className='storeDiv'>
                <div className='storeNav'>
                    <ul>
                        <input className='ma2' type='text'/>
                        <li onClick={handleShoes}><Link className='f6' to='/store/shoes'>Climbing Shoes</Link></li>
                        <li><Link className='f6' to='/store/harnesses'>Harnesses</Link></li>
                        <li><Link className='f6' to='/store/ropes'>Ropes</Link></li>
                        <li><Link className='f6' to='/store/helmets'>Helmets</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route exact path='/store/*'/>
                    <Route path='/' element={<Store/>}/>
                    <Route path='/shoes' element={<GetShoes/>}/>
                    <Route path='/harnesses' element={<GetHarnesses/>}/>
                    <Route path='/ropes' element={<GetRopes/>}/>
                    <Route path='/helmets' element={<GetHelmets/>}/>

                </Routes>
            </div>
        </>
        );
    }

export default Store;