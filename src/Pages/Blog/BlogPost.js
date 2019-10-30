import React from 'react';
import './BlogPost.css';
import { apiCall } from '../../services/apiService'
import { Link } from 'react-router-dom'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class BlogPost extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            description: "",
            title: ""
        }
    }

    componentDidMount = () =>{
        this.fetchBlogInfo();
    }

    fetchBlogInfo = async () =>{
        let id = this.props.match.params.id
        const response = await apiCall.get(`/app/${id}`)        
        console.log(response.data)
        this.setState({
            description: response.data.description,
            title: response.data.title
        })

    }



    render(){
        return(
            <div className='blogpost-holder'>
                <h1>{this.state.title}</h1>
                {ReactHtmlParser(this.state.description)}
            </div>
        )
    }
}

export default BlogPost;