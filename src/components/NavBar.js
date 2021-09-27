import React from 'react'
import logo from '../logo.svg';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <img src={logo} alt="logo" />
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                    </ul>    
                </nav>
            </div>
        </div>
    )
}

export default NavBar
