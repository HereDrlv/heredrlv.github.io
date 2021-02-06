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
    // Base: /blog
    // TODO:
    /* 
        Rules:
        -/<path>                         preview md under <path>
        -/<path>/<file>                  content of file
        E.g.:
        -/                               preview all md
        -/one/directory/                 preview all md under one directory
        -/one/directory/article.test     content of one article 
    */
    let { path, url } = useRouteMatch()
    console.log("path:", path);
	console.log("url:", url);
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