import React from 'react'
import './CategoriesRow.css';

function CategoriesRow() {
    return (
        <div className='categories-holder'>
            <div className='categories-box'>
                <img className='categories-image' src='https://s3.amazonaws.com/leafly-s3/content/cannabis-tinctures-101-what-are-they-how-to-make-them-and-how-to/7fV4fF9pTSOhemGxRxyu_tincture-bottles.jpg' />
                <h2 className='categories-text'>For Aches and Pains</h2>
            </div>
            <div className='categories-box'>
                <img className='categories-image' src='https://s3.amazonaws.com/leafly-s3/content/cannabis-tinctures-101-what-are-they-how-to-make-them-and-how-to/7fV4fF9pTSOhemGxRxyu_tincture-bottles.jpg' />
                <h2 className='categories-text'>For Depression</h2>
            </div>
            <div className='categories-box'>
                <img className='categories-image' src='https://s3.amazonaws.com/leafly-s3/content/cannabis-tinctures-101-what-are-they-how-to-make-them-and-how-to/7fV4fF9pTSOhemGxRxyu_tincture-bottles.jpg' />

                <h2 className='categories-text'>For Relaxation</h2>
            </div>
            <div className='categories-box'>
                <img className='categories-image' src='https://s3.amazonaws.com/leafly-s3/content/cannabis-tinctures-101-what-are-they-how-to-make-them-and-how-to/7fV4fF9pTSOhemGxRxyu_tincture-bottles.jpg' />

                <h2 className='categories-text'>To Stop The Voices In My Head</h2>
            </div>
        </div>
    )
}

export default CategoriesRow;