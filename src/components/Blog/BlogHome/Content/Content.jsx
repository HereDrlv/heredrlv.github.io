import React from "react";
import Preview from "./Preview/Preview.jsx";
import {
	useRouteMatch,
} from "react-router-dom";
import "./Content.less";

import { default as GET } from "Util/httpGetTextSync";
import flattenJSON from "Util/flattenJSON";
import locateJSON from "Util/locateJSON";

const index = JSON.parse(GET("/index.json"));

function Content(props) {
	// useRouteMatch().url: ["", "blog", "all", "dir1", "dir2", "dir3"...]
	let path = useRouteMatch().url.split("/").slice(2);
	let files = path.length > 1 ? flattenJSON(locateJSON(path, index)) : flattenJSON(index); // unknown bug
	return (
		<div className="Content">
			{files.map((f) =>
				<Preview key={f.name} title={f.name}/>
			)}
		</div>
	);
}
export default Content;