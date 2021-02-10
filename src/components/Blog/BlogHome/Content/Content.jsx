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
// const index1 = JSON.parse(GET("/index1.json"));

function Content(props) {
	// useRouteMatch().url: ["", "blog", "all", "dir1", "dir2", "dir3"...]
	let path = useRouteMatch().url.split("/").slice(2);
	let files = path.length > 1 ? flattenJSON(locateJSON(path, index)) : flattenJSON(index); // unknown bug
	// TODO: 获取summary。在这里获取，这里我尚可以利用url，一次性遍历path下所有md。否则的话preview又找不到path，// TODO: lazy load
	return (
		<div className="Content">
			{files.map((f) =>
				<Preview key={f.name} title={f.name}/>
			)}
		</div>
	);
}
export default Content;