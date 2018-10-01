import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Blog from './components/Blog';
import Example from './components/Example';
import BlogArticle from './components/BlogArticle';
import BlogDatatable from './components/BlogDatatable';

export default class Index extends Component {
    render() {
        return <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/blog-datatable">BlogDatatable</Link>

                        <Route path="/" exact component={Example} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog-datatable" exact component={BlogDatatable} />
                        <Route path="/blog/:id" exact render={props => <BlogArticle{...props}/>} />
                    </div>
                </Router>
            </div>;
    }
}

if (document.getElementById('example')) {
    ReactDOM.render( <Index /> , document.getElementById('example'));
}
