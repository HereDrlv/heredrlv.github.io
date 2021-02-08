import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import Explorer from "./Explorer/Explorer.jsx";
import Content from "./Content/Content.jsx";
import "./BlogHome.less";

function BlogHome(props) {
    let { url } = useRouteMatch();
	return (
		<Switch>
			<Route path={`${url}/:dir`}>
				<BlogHome/>
			</Route>
			<Route path={`${url}`}>
				{/* <Link to={`${url}/1`}>to test directory</Link> */}
				<br/>
				{/* <Link to="/blog/filename">to test file</Link> */}
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