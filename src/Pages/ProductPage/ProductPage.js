import React from 'react'
import './ProductPage.css'
import { apiCall } from '../../services/apiService'
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestImage from '../../assets/titleText.png'
import { async } from 'q';


class ProductPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productTitle: 'Test Title',
            productDescription: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
            productPlants: ['plant1', 'plant2', 'plant3'],
            productImg: '',
            productUses: ['Exhaustion Support ', 'Nervous System Nourishment']
        }
    }

    componentDidMount = () => {
        this.fetchProductInfo();
    }

    fetchProductInfo = async () => {
        let id = this.props.match.params.id
        console.log(this.props.match.params)
        console.log(id)

        const response = await apiCall.get(`/product/${id}`)
        console.log(response.data)
        this.setState({
            productDescription: response.data.description,
            productTitle: response.data.title,
            productImg: response.data.imgUrl,
            productPlants: response.data.ingredients

        })

    }
    deleteProject = async () => {
        let id = this.props.match.params.id
        await apiCall.delete(`/product/${id}`)
        await this.props.history.push('/')

        // await this.fetchUserInfo()
    }

    handleBackButton = async () => {
        await this.props.history.push('/')

    }



    render() {
        return (
            <div className='productpage-holder'>
                <div className='productpage-right'>
                    {/* <img className='product-img2' src={this.state.productImg} /> */}
                    <Carousel>
                        <div>
                            <img className='product-img3' src={this.state.productImg} />

                        </div>
                        <div>
                            <img className='product-img3' src={this.state.productImg} />
                            
                        </div>
                    </Carousel>
                    {this.props.isSignedIn && (
                        <button onClick={() => this.deleteProject()} className='delete-button' >Delete Product</button>

                    )}
                    {this.props.isSignedIn && (

                        <Link to={`/edit/product/${this.props.match.params.id}`} className='product-link'>
                            Edit
                    </Link>
                    )}

                </div>
                <div className='productpage-left'>
                    <h5 className='back-text' onClick={this.handleBackButton}> Back to products</h5>
                    <h2 className='product-title'>{this.state.productTitle}</h2>
                    <h2 className='product-price'>$20.00</h2>
                    <h5 className='product-ingredients'>Ingredients: {this.state.productPlants}</h5>
                    <p className='product-description'>{this.state.productDescription}</p>
                    <button className='purchase-button'>Contact Now To Purchase</button>
                    {/* <ul className='uses-list'>
                    <li>Exhaustion Support </li>
                    <li>Nervous System Nourishment</li>
                </ul> */}
                </div>


            </div>
        )
    }
}

export default ProductPage;