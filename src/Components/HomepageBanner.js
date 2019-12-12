import React from 'react';
import './HomepageBanner.css';
import BannerImage from './../assets/bannerImage2.png'

function HomepageBanner(){
    return(
        <header className='banner-holder'>
            <img className='banner-image' src={BannerImage} />
            <div className='wave-maker'></div>
            <div className='shopnow-holder'>
                {/* <h1 className='banner-title-text'>Rippling Medicinals</h1> */}
                <div className='banner-title-logo'></div>
               
                <h3 className='banner-subtitle-text'>Sustainably creating holistic medicine. 
May every drop ripple out to heal
the soul, spirit & body</h3>
            

                <div className='shopnow-button'>
                    <h4 className='shopnow-text'>Shop Now</h4>
                </div>
            </div>
        </header>
    )
}

export default HomepageBanner;