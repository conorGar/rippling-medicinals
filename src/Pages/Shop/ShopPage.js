import React from 'react';
import './ShopPage.css'
import { Link } from "react-router-dom";
import { apiCall } from '../../services/apiService'
import { async } from 'q';

class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            allProducts: []
        }
    }

    componentDidMount = () =>{
        this.fetchInfo();
    }

    fetchInfo = async () =>{
        const response = await apiCall.get(`/product/`)
        console.log(response.data)
        this.setState({
            allProducts: response.data
        })

    }

    renderProducts = () =>{
        const {allProducts} = this.state;

        return allProducts.map(product => {
           
            return(
                <div key={product.id} className='product-container'>
                    <Link to={`/product/${product.id}`} className='product-link'>
                        <div className='product-box'>
                            <img src={product.imgUrl} className='product-image'/>
                            <h1 className='product-name'>{product.title}</h1>
                            <h5 className='product-price'>$15.00</h5>

                        </div>
                    </Link>

                </div>
            )
        })
    }

    render(){
        return (
            <div className='shoppage-holder'>
                
                {this.renderProducts()}
            </div>
        )
    }
}

export default ShopPage;