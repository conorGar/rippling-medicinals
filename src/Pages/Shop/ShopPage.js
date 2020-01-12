import React from 'react';
import './ShopPage.css'
import { Link } from "react-router-dom";
import { apiCall } from '../../services/apiService'
import { async } from 'q';

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allProducts: [],
            teas: [],
            currentlyDisplayedProducts: []
        }
    }

    componentDidMount = () => {
        this.fetchInfo();
    }

    fetchInfo = async () => {
        const response = await apiCall.get(`/product/`)
        console.log(response.data)
        this.setState({
            allProducts: response.data
        })

    }

    fetchTeas = async () => {
        const res = await apiCall.get('/product/tea')
        this.setState({
            teas: res.data
        })
    }

    renderProducts = () => {
        const { allProducts } = this.state;

        return allProducts.map(product => {

            return (
                <div key={product.id} className='product-container'>
                    <Link to={`/product/${product.id}`} className='product-link'>
                        <div className='product-box'>
                            <img src={product.imgUrl} className='product-image' />
                            <h1 className='product-name'>{product.title}</h1>
                            <h5 className='product-price'>$15.00</h5>

                        </div>
                    </Link>

                </div>
            )
        })
    }

    renderTeas = () => {

    }

    render() {
        return (
            <div className='shoppage-holder'>

                <div className='leftside-nav-bar'>
                    <ul className='options-list'>
                        Categories:
                        <li>All</li>
                        <li>Simple Tinctures</li>
                        <li>Formula Tinctures</li>
                        <li>Teas</li>

                    </ul>
                </div>
                <div className='product-display-container'>
                    <h1>- Shop Products -</h1>
                    <div className='products-holder'>
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopPage;