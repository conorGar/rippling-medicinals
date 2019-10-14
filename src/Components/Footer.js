import React from 'react';
import './Footer.css';


function Footer(){
    return(
        <div className='footer-holder'>
            <div className='footer-left'>
                <h3>Maybe some sign up for a newsletter or something, idk</h3>
            </div>
            <div className='footer-right'>
                <div className='links-holder'>
                <h5>About</h5>
                <h5>Contact</h5>
                <h5>FAQ</h5>
                <h5>Facebook</h5>
                <h5>Instagram</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;