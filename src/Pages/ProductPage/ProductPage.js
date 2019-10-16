import React from 'react'
import './ProductPage.css'
class ProductPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productTitle: 'Test Title',
            productDescription: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
            productPlants: ['plant1', 'plant2', 'plant3'],
            productUses: ['Exhaustion Support ', 'Nervous System Nourishment']
        }
    }


    render(){
        return(
        <div className='productpage-holder'>
            <div className='productpage-left'>
                <h1 className='product-title'>{this.state.productTitle}</h1>
                <p className='product-description'>{this.state.productDescription}</p>
                <ul className='uses-list'>
                    <li>Exhaustion Support </li>
                    <li>Nervous System Nourishment</li>
                </ul>
            </div>
            <div className='productpage-right'>
                <img className='product-img' src='https://floydsofleadville.com/wp-content/uploads/2019/04/fs_1800_featured.jpg' />
                <h4>Plants Used:</h4>
                <h4>{this.state.productPlants}</h4>
               
            </div>
        </div>
        )
    }
}

export default ProductPage;