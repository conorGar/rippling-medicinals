import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className='header-container'>
            <link href="https://fonts.googleapis.com/css?family=Gupter&display=swap" rel="stylesheet"></link>
            <Link to='/'>
                <div className='home-logo'></div>
            </Link>
            <div className='other-links-holder'>

                <Link to='/shop' className='other-link2'>
                    <h5 className='navLink'>Shop</h5>
                </Link>
                <Link to='/about' className='other-link2'>
                    <h5 className='navLink' >About</h5>
                </Link>
                <Link to='/contact' className='other-link2'>
                    <h5 className='navLink' >Contact</h5>
                </Link>
                <Link to='/blogs' className='other-link2'>
                    <h5 className='navLink' >Blog</h5>
                </Link>
            </div>

        </div>
    )
}

export default Header;