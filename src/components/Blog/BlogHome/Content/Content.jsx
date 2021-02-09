import React from "react";
import Preview from "./Preview/Preview.jsx";
import {
	useRouteMatch,
} from "react-router-dom";
import "./Content.less";

import { default as GET } from "Util/httpGetTextSync";
import flattenJSON from "Util/flattenJSON";

const index = JSON.parse(GET("/index.json"));
const locateJSON = (keySeq, json, i = 0) => 
	(i < keySeq.length - 1) ? 
	locateJSON(keySeq, json[keySeq[i]], i + 1) : 
	json[keySeq[i]];
function Content(props) {
	// useRouteMatch().url: ["", "blog", "all", "dir1", "dir2", "dir3"...]
	let path = useRouteMatch().url.split("/").slice(3);
	let files = path.length > 0 ? flattenJSON(locateJSON(path, index)) : flattenJSON(index);
	// TODO: 获取summary。在这里获取，这里我尚可以利用url，一次性遍历path下所有md。否则的话preview又找不到path，// TODO: lazy load
	return (
		<div className="Content">
			{files.map((f) =>
				<Preview key={f} title={f}/>
			)}
		</div>
	);
}
export default Content;