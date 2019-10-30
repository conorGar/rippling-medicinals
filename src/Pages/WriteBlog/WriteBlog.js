import React from 'react'
import { apiCall } from '../../services/apiService'

import './WriteBlog.css'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

class WriteBlog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Title",
            model: "Hello"
        }
    }

    handleModelChange = (model) => {
        this.setState({
            model: model
        });
    }

    handleTitleChange = () => {
        
    }

    handleBlogSubmit = async (e) => {
        e.preventDefault();
        const { title, model } = this.state
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