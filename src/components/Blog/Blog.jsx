import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Article from './Article/Article.jsx';
import BlogHome from './BlogHome/BlogHome.jsx';


function Blog(props) {
    let { path, url } = useRouteMatch()
    // console.log("path:", path);
	// console.log("url:", url);
    return (
        <Switch>
            <Route path={`${url}/all`}>
                <BlogHome />
            </Route>
            <Route path={`${url}/:file`} >
                <Article/>
            </Route>
            <Route path={`${url}`}>
                <Redirect to={`${url}/all`} />
            </Route>
        </Switch>
    );
}

export default Blog;