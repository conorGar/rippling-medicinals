import React from 'react';
import './Blogs.css';
import { apiCall } from '../../services/apiService'
import { Link } from 'react-router-dom'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Blogs extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            blogPosts: []
        }
    }

    componentDidMount = () =>{
        this.fetchInfo();
    }

    fetchInfo = async () =>{
        const response = await apiCall.get(`/app/`)
        console.log(response.data)
        this.setState({
            blogPosts: response.data
        })

    }

    renderBlogPosts = () => {
        const {blogPosts} = this.state;

        return blogPosts.map(blog => {
            return(
                <div key={blog.id} className='blog-container'>
                    <Link to={`/blog/${blog.id}`} className='blog-link'>
                        <h1 className='blog-container-title'>{blog.title}</h1>
                        <div className='lower-blog-container'>
                            <img src="https://www.verywellhealth.com/thmb/g6ZvER87sfrNdrmdc00JIgAQOqw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-155098400-5b6102b84cedfd005062a2c5.jpg" className='blog-image'/>
                            <div className='blog-container-description'>{ReactHtmlParser(blog.description)}</div>
                        </div>
                    </Link>

                </div>
            )
        })
    }



    render(){
        return(
            <div className='blogs-holder'>
                {this.renderBlogPosts()}
            </div>
        )
    }
}

export default Blogs;