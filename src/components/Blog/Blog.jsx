import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Article from './Article/Article.jsx';
import BlogHome from './BlogHome/BlogHome.jsx';


function Blog(props) {
    let { url } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${url}/all`}>
                <BlogHome />
            </Route>
            <Route path={`${url}/:title`} >
                <Article/>
            </Route>
            <Route path={`${url}`}>
                <Redirect to={`${url}/all`} />
            </Route>
        </Switch>
    );
}

export default Blog;