import React from 'react'
import { apiCall } from '../../services/apiService'
import Dropzone from 'react-dropzone'
import S3FileUpload from 'react-s3';
import { AwsConfig } from '../../services/AwsConfig'

import './ProductEdit.css'
import { async } from 'q';

class ProductEdit extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: "Title",
            description: "",
            ingredients: "",
            imgUrl: ""
        }
    }

    componentDidMount = async () => {
        let id = this.props.match.params.id
        const thisProd = await apiCall.get(`product/${id}`)
        const { title, description, imgUrl, ingredients} = thisProd.data;
        this.setState({
            title: title,
            description: description,
            ingredients: ingredients,
            imgUrl: imgUrl
        })
    }


    handleImageUpload = async (evt) => {
        console.log("Image Upload")
        console.log(evt)
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

    handleProjectSubmit = async (e) => {

        e.preventDefault();

        const { title, description, ingredients, imgUrl } = this.state
        const id = this.props.match.params.id;
        console.log("Handle project submit activate")
        try {
            await apiCall.put(`product/${id}`, { title, description, imgUrl, ingredients })

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
                <h1>Edit Product</h1>
                <div className="form-container">
                <form className="project-submit-form" onSubmit={this.handleProjectSubmit}>

                    <Dropzone onDrop={this.handleImageUpload} >
                            {({ getRootProps, getInputProps }) => (
                                <section className='dropzone-section'>
                                    <h2>Product Image:</h2>
                                    <h5 className='subtitle'> Recommended Size: ... </h5>
                                    <div {...getRootProps()} className='banner-drop-zone'>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop file here, or click to select file</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                       
                        <div className="text-info-container">
                            <div className="input-title-container">
                                <h2>Product Title:</h2>
                                <input
                                    type='text'
                                    name='title'
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
                                    name='ingredients'
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

export default ProductEdit;