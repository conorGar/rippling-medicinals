import React from 'react'
import './Featured.css'
import { Link } from "react-router-dom";
import { apiCall } from '../services/apiService'

class Featured extends React.Component {
   constructor(props){
      super(props)
      this.state = {
          featuredProducts: []
      }
   }

   componentDidMount = () =>{
      this.fetchInfo();
   }

   fetchInfo = async () =>{
      const response = await apiCall.get(`/product/`)
      console.log(response.data)
      this.setState({
          featuredProducts: response.data
      })

   }

   renderProducts = () =>{
      const {featuredProducts} = this.state;

      return featuredProducts.map(product => {
         
          return(
              <div key={product.id} className='product-container'>
                  <Link to={`/product/${product.id}`} className='product-link'>
                      <div className='product-box'>
                          <img src={product.imgUrl}className='product-image'/>
                          <h1 className='product-name'>{product.title}</h1>
                          {/* <h5 className='product-price'>$15.00</h5> */}

                      </div>
                  </Link>

              </div>
          )
      })
  }

   render(){
   return (
      <div className='featured-holder'>
         <h1>Featured Products</h1>
         <div className='featured-list'>
            {this.renderProducts()}
         </div>
      </div>
   )
   }
}

export default Featured;