import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Article from './Article/Article.jsx';
import BlogHome from './BlogHome/BlogHome.jsx';


class Blog extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/blog/:title">
                        <Article/>
                    </Route>
                    <Route path="/blog">
                        <Link to="/blog/1">to test article</Link>
                        <BlogHome />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Blog;