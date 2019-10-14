import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className='header-container'>
            <Link to='/'>
                <h5 className='navLink'>Home</h5>
            </Link>

            <Link to='/product'>
                <h5 className='navLink'>Shop</h5>
            </Link>
            <Link to='/about'>
                <h5 className='navLink'>About</h5>
            </Link>
            <Link to='/contact'>
                <h5 className='navLink'>Contact</h5>
            </Link>

        </div>
    )
}

export default Header;