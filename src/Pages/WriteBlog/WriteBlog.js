import React from 'react'
import { apiCall } from '../../services/apiService'
import Dropzone from 'react-dropzone'
import S3FileUpload from 'react-s3';
import { AwsConfig } from '../../services/AwsConfig'


import './WriteBlog.css'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import { async } from 'q';

class WriteBlog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Title",
            model: "Hello",
            imgUrl: ""
        }
    }

    handleModelChange = (model) => {
        this.setState({
            model: model
        });
    }

    handleTitleChange = (e) => {
        console.log(e);
        this.setState({
            title: e.target
        })
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

    handleBlogSubmit = async (e) => {
        e.preventDefault();
        const { title, model } = this.state
        console.log(model);
        const id = this.props.match.params.id;
        console.log("Handle blog submit activate")
        try {
            await apiCall.post(`app/blog/create`, { title, model })
            await this.props.history.push('/')
        }
        catch (error) {
            throw error
        }
    }

    render() {
        return (
            <div className='writeblog-holder'>
                <input
                    type='text'
                    name='name'
                    onChange={this.handleTitleChange}
                    className="title-input-form"
                    value={this.state.name}
                />
                   <Dropzone onDrop={this.handleImageUpload} >
                            {({ getRootProps, getInputProps }) => (
                                <section className='dropzone-section'>
                                    <h2>Story Banner Image:</h2>
                                    <h5 className='subtitle'> Recommended Size: ... </h5>
                                    <div {...getRootProps()} className='banner-drop-zone'>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop file here, or click to select file</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                <FroalaEditorComponent tag='textarea'
                    model={this.state.model}
                    onModelChange={this.handleModelChange}
                />
                <button onClick={this.handleBlogSubmit}>Submit</button>
            </div>
        )
    }
}


export default WriteBlog