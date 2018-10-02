import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Blog extends Component {

    constructor(){
        super();
        this.state = {
            blogs: []
        }
    }

    componentWillMount() {

        axios.get('/api/blog').then(response => {
            this.setState({
                blogs: response.data
            });
        });
    }

    render() {
        return <div className="container">
                {this.state.blogs.map(blog =>
                <li>
                    <Link to={"/blog/" + blog.id}>{blog.name}</Link>
                </li>
                )}
            </div>;
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
