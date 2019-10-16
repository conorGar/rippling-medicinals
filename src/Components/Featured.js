import React from 'react'
import './Featured.css'
import { Link } from "react-router-dom";

function Featured() {
   return (
      <div className='featured-holder'>
         <h1>Featured Products</h1>
         <div className='featured-list'>
            <Link to='/product/1'>
               <div className='product-box'>
                  <img className='product-image' src='https://floydsofleadville.com/wp-content/uploads/2019/04/fs_1800_featured.jpg' />
                  <h4 className='product-name'>Product Name</h4>
                  <h5 className='product-price'>$15.00</h5>

               </div>
            </Link>
            <Link to='/product/1'>
               <div className='product-box'>
                  <img className='product-image' src='https://floydsofleadville.com/wp-content/uploads/2019/04/fs_1800_featured.jpg' />
                  <h4 className='product-name'>Product Name</h4>
                  <h5 className='product-price'>$15.00</h5>
               </div>
            </Link>
            <Link to='/product/1'>
               <div className='product-box'>
                  <img className='product-image' src='https://floydsofleadville.com/wp-content/uploads/2019/04/fs_1800_featured.jpg' />
                  <h4 className='product-name'>Product Name</h4>
                  <h5 className='product-price'>$15.00</h5>
               </div>
            </Link>
            <Link to='/product/1'>
               <div className='product-box'>
                  <img className='product-image' src='https://floydsofleadville.com/wp-content/uploads/2019/04/fs_1800_featured.jpg' />
                  <h4 className='product-name'>Product Name</h4>
                  <h5 className='product-price'>$15.00</h5>
               </div>
            </Link>
            <Link to='/product/1'>
               <div className='product-box'>
                  <img className='product-image' src='https://floydsofleadville.com/wp-content/uploads/2019/04/fs_1800_featured.jpg' />
                  <h4 className='product-name'>Product Name</h4>
                  <h5 className='product-price'>$15.00</h5>
               </div>
            </Link>
            <Link to='/product/1'>
               <div className='product-box'>
                  <img className='product-image' src='https://floydsofleadville.com/wp-content/uploads/2019/04/fs_1800_featured.jpg' />
                  <h4 className='product-name'>Product Name</h4>
                  <h5 className='product-price'>$15.00</h5>
               </div>
            </Link>

         </div>
      </div>
   )
}

export default Featured;