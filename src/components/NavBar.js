import React from 'react'
import logo from '../Assets/Logo_Stormy_1200x1200.png';
import './NavBar.css'

import { Link } from 'react-router-dom';

import CartWidget from './CartWidget/CartWidget';
import CategoriesList from './CategoriesList/CategoriesList';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <nav>
                    <CategoriesList />    
                </nav>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar
