import React from "react";
import {
	Link,
} from "react-router-dom";
import "./Preview.less"
function Preview(props) {
	return (
		<Link to={`/blog/${props.title}`}>
			<div className="Preview">
					<h2>{props.title}</h2>
				<p>summary</p>
			</div>
		</Link>
	);
}
export default Preview;