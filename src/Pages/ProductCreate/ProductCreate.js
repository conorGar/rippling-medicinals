import React from 'react'
import { apiCall } from '../../services/apiService'
import Dropzone from 'react-dropzone'
import S3FileUpload from 'react-s3';
import { AwsConfig } from '../../services/AwsConfig'

import './ProductCreate.css'


class ProductCreate extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: "Title",
            description: "",
            ingredients: "",
            imgUrl: ""
        }
    }

    handleImageUpload = async (evt) => {
        await S3FileUpload.uploadFile(evt[0], AwsConfig)
        .then((data) => {
            this.setState({
                imgUrl: data.location
            })
            console.log("Upload success at:" + data.location);
        }).catch((err) => {
            alert(err);
        })
    }

    handleProductSubmit = async (e) => {
        e.preventDefault();
        const { title, description, imgUrl, ingredients } = this.state
        const id = this.props.match.params.id;
        console.log("Handle blog submit activate")
        try {
            await apiCall.post(`app/product/create`, { title, description, imgUrl, ingredients })
            await this.props.history.push('/')
        }
        catch (error) {
            throw error
        }
    }

    handleTextInput = async (evt) => {
        const { name, value } = evt.target
        this.setState({
            [name]: value
        })
    }


    render(){
        return(
            <div className='product-create-holder'>
                <h1>Upload New Product</h1>
                <div className="form-container">
                    <form className="project-submit-form" onSubmit={this.handleProjectSubmit}>
                        <div className="upload-image-container">
                            <h2>Product Image:</h2>
                            <input
                                name="uploadedImage"
                                type="file"
                                onChange={this.handleImageUpload}
                            />
                        </div>
                        <div className="text-info-container">
                            <div className="input-title-container">
                                <h2>Product Title:</h2>
                                <input
                                    type='text'
                                    name='name'
                                    onChange={this.handleTextInput}
                                    className="title-input-form"
                                    value={this.state.title}
                                />
                            </div>
                            <div className="input-description-container">
                                <h2>Description:</h2>
                                <textarea
                                    type='text'
                                    name='description'
                                    className='description-input'
                                    onChange={this.handleTextInput}
                                    value={this.state.description}
                                />
                            </div>
                            
                            <div className="input-container">
                                <h3>Ingredients Used:</h3>
                                <input
                                    type='text'
                                    name='skills'
                                    className='ingredients-input'
                                    onChange={this.handleTextInput}
                                    value={this.state.ingredients}
                                    placeholder="Please seperate them by commas(Ex: ingredient 1, ingredient 2, etc)"
                                />
                            </div>
                            
                            <h4 className='shannon-reminder'>Reminder: You're doing great Shannon! ;D</h4>
                        </div>
                        <button className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }


}

export default ProductCreate;