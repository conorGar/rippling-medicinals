import React from 'react';
import './HomepageBanner.css';
// import BannerImage from './../assets/logo_large'

function HomepageBanner(){
    return(
        <header className='banner-holder'>
            {/* <img className='banner-image' src={BannerImage} /> */}
            <div className='wave-maker'></div>
            <div className='shopnow-holder'>
                <h1 className='banner-title-text'>Rippling Medicinals</h1>
                <h3 className='banner-subtitle-text'>some text some text some text some text some text some text</h3>

                <div className='shopnow-button'>
                    <h4 className='shopnow-text'>Shop Now</h4>
                </div>
            </div>
        </header>
    )
}

export default HomepageBanner;