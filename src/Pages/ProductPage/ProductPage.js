import React from 'react'
import './ProductPage.css'
import { apiCall } from '../../services/apiService'


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
        await apiCall.delete(`story/${id}`)
        await this.props.history.push('/')

        // await this.fetchUserInfo()
      }

  

    render() {
        return (
            <div className='productpage-holder'>
                <div className='productpage-left'>
                    <h1 className='product-title'>{this.state.productTitle}</h1>
                    <p className='product-description'>{this.state.productDescription}</p>
                    {/* <ul className='uses-list'>
                    <li>Exhaustion Support </li>
                    <li>Nervous System Nourishment</li>
                </ul> */}
                </div>
                <div className='productpage-right'>
                    <img className='product-img' src={this.state.productImg} />
                    <h4>Plants Used:</h4>
                    <h4>{this.state.productPlants}</h4>
                    {this.props.isSignedIn && (
                    <button  onClick={() => this.deleteProject()} className='delete-button' >Delete Product</button>
                    )}  
                </div>
              
            </div>
        )
    }
}

export default ProductPage;