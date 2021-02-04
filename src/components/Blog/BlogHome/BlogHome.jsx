import React from "react";
import Explorer from "./Explorer/Explorer.jsx";
import Content from "./Content/Content.jsx";


function BlogHome(props) {
	return (
		<div>
			<h1>This is My Blog</h1>
			<Explorer />
			<Content />
		</div>
	);
}

export default BlogHome;