import React from 'react';
import './Blogs.css';
import { apiCall } from '../../services/apiService'
import { Link } from 'react-router-dom'

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
                    <Link to={`/blog/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <h5>{blog.description}</h5>
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