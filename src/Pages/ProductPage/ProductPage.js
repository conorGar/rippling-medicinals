import React from 'react'

class ProductPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productTitle: 'Test Title',
            productDescription: '',
            productPlants: []
        }
    }


    render(){
        return(
        <div>
            <h1 className='product-title'>{this.state.productTitle}</h1>
            <p className='product-description'>{this.state.productDescription}</p>
            <h4>Plants Used:</h4>
            <h4>{this.state.productPlants}</h4>
        </div>
        )
    }
}

export default ProductPage;