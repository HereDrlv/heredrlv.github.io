import React from "react";
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import Explorer from "./Explorer/Explorer.jsx";
import Content from "./Content/Content.jsx";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


function BlogHome(props) {
    let { url } = useRouteMatch();
	let { dir } = useParams();
	console.log("url:", url);
	console.log("dir:", dir);
	return (
		<Switch>
			<Route path={`${url}/:dir`}>
				<BlogHome/>
			</Route>
			<Route path={`${url}`}>
				<Link to={`${url}/1`}>to test directory</Link>
				<br/>
				<Link to="/blog/filename">to test file</Link>
				<div>
					<h1>This is My Blog</h1>
					<Explorer />
					<Content />
				</div>
			</Route>
		</Switch>
	);
}

export default BlogHome;