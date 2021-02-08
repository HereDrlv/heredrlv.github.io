import React from "react";
import Preview from "./Preview/Preview.jsx";
import {
	useRouteMatch,
} from "react-router-dom";
import "./Content.less";

import { default as GET } from "Util/httpGetTextSync";
import flattenJSON from "Util/flattenJSON";

const index = JSON.parse(GET("/index.json"));

function Content(props) {
	let { url } = useRouteMatch();
	let path = url.split("/"); // -> ["", "blog", "all", "dir1", "dir2", "dir3"...]
	let locateJSON = (i, keySeq, json) =>
		(i < keySeq.length - 1) ?
			locateJSON(i + 1, keySeq, json[keySeq[i]]) :
			json[keySeq[i]];
	let files = flattenJSON(locateJSON(3, path, index));
	console.log(files);
	// TODO: 获取summary。在这里获取，这里我尚可以利用url，一次性遍历path下所有md。否则的话preview又找不到path，
	return (
		<div className="Content">
			<h1>Content</h1>
			{files.map((f) =>
				<Preview title={f} />
			)}
		</div>
	);
}
export default Content;