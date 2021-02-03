import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Article from './Article/Article.jsx';
import BlogHome from './BlogHome/BlogHome.jsx';

// for test only
const XHR = new XMLHttpRequest();
XHR.open("GET","/test.md");
// XHR.open("GET","/bundle.js");
XHR.send();
console.log(XHR);
let content = XHR.responseText;
// console.log(XHR);

class Blog extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/blog/1">
                        <Article title="testtest" content={content}/>
                    </Route>
                    <Route path="/">
                        <Link to="/blog/1">to test article</Link>
                        <BlogHome />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Blog;