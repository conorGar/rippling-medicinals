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
            simpleTinctures: [],
            formulaTinctures: [],
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
            allProducts: response.data,
            currentlyDisplayedProducts: response.data
        })

    }

    fetchSimpleTinctures = async () => {
        console.log("Simple Tincture fetch activate")
        if(this.state.teas.length <= 1){
            console.log("Simple Tinctures fetch -2")

            //first time getting teas
            const res = await apiCall.get('/product/tincture/simple')
            this.setState({
                simpleTinctures: res.data
            })
        }
        this.setState({
            currentlyDisplayedProducts: this.state.simpleTinctures
        })
    }


    fetchFormulaTinctures = async () => {
        if(this.state.teas.length <= 1){
            //first time getting teas
            const res = await apiCall.get('/product/tincture/formula')
            this.setState({
                formulaTinctures: res.data
            })
        }
        this.setState({
            currentlyDisplayedProducts: this.state.formulaTinctures
        })
    }


    fetchTeas = async () => {
        if(this.state.teas.length <= 1){
            //first time getting teas
            const res = await apiCall.get('/product/tea')
            this.setState({
                teas: res.data
            })
        }
        this.setState({
            currentlyDisplayedProducts: this.state.teas
        })
    }

    renderProducts = () => {
        const { currentlyDisplayedProducts } = this.state;

        return currentlyDisplayedProducts.map(product => {

            return (
                <div key={product.id} className='shop-product-container'>
                    <Link to={`/product/${product.id}`} className='shop-product-link'>
                        <div className='shop-product-box'>
                            <img src={product.imgUrl} className='shop-product-image' />
                            

                        </div>
                        <h1 className='shop-product-name'>{product.title}</h1>
                            <h5 className='shop-product-price'>$15.00</h5>
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
                        <li onClick={this.fetchInfo}>All</li>
                        <li onClick={this.fetchSimpleTinctures}>Simple Tinctures</li>
                        <li onClick={this.fetchFormulaTinctures}>Formula Tinctures</li>
                        <li onClick={this.fetchTeas}>Teas</li>

                    </ul>
                </div>
                <div className='product-display-container'>
                    <h1 className='shop-title'>- Shop Products -</h1>
                    <div className='products-holder'>
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopPage;