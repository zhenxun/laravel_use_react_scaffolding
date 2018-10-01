import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class BlogArticle extends Component {

    constructor(props){
        super(props);
        this.state = {
            post: {}
        };
    }

    componentDidMount(){
        axios.get("/api/blog/" + this.props.match.params.id)
            .then(response => {
                console.log(response);
            this.setState({post: response.data });
            })
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state);
        return (

            <div>
                <h1> {this.state.post.name} </h1>
                <h3> {this.state.post.body} </h3>
            </div>

        );
        // return <div className="container">
        //     {this.state.blogs.map(blog =>
        //         <li>
        //             <Link to={"/blog/" + blog.id}>{blog.name}</Link>
        //         </li>
        //     )}
        // </div>;
    }
}


