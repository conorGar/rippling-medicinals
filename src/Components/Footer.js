import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";


class Footer extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div className='footer-holder'>
                <div className='footer-left'>
                    <h3>Maybe some sign up for a newsletter or something, idk</h3>
                </div>
                <div className='footer-right'>
                    <div className='links-holder'>
                        <Link to='/about' className='other-link'>
                            <h5 className='navLink' >About</h5>
                        </Link>
                        <Link to='/contact' className='other-link'>
                            <h5 className='navLink' >Contact</h5>
                        </Link>
                        {/* <h5>FAQ</h5> */}
                        <div className='other-link'>
                            <a className='navLink-facebook' href="https://www.facebook.com/ripplingmedicinals/?__xts__[0]=68.ARDivB9T6kS7kRmyUf0Wahg_CYYPX_RlbPBbXEJYFEjmV3fjlTSi-pdb8Vr9CqgBILJPSU5u5qyYRRS6zGxXN9xQk3Am5-vHsQT0I540HcltqZSg3-E0AO3mKv-38N-65lyw65MA5AXpabwrFv-gGYT8nlvnzj3g8upPParnT1Vle5GBhcO_ObPAsOfYpPFLTzkcE73YCGZuM0-Y6Sl1Th8kCJ98mko5pnCTNUNVFUaYO6y-KjRKtKxhybbbMsnluPSIN8hsN8SJDXJeWxYgcFtTeoRJ-pyvfSOwihzLNUsWrb-vV1T7x8WkFHgJ0ewiaAHDA1h0EOA90hzFdps">Facebook</a>
                        </div>
                        {/* <h5>Instagram</h5> */}
                        {!this.props.isSignedIn && (

                            <Link to='/admin/signin' className='other-link'>
                                <h5 className='navLink' >Admin</h5>
                            </Link>
                        )}

                        {this.props.isSignedIn && (

                            <Link to='/create/product' className='other-link'>
                                <h5 className='navLink' >Create Product</h5>
                            </Link>
                        )}


                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;