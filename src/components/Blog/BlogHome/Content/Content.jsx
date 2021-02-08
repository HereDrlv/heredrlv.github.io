import React from "react";
import Preview from "./Preview/Preview.jsx";
import {
	useRouteMatch,
} from "react-router-dom";
import "./Content.less";

import { default as GET } from "Util/httpGetTextSync";
const index = JSON.parse(GET("/index.json"));

function Content(props) {
	let { url } = useRouteMatch();
	let path = url.split("/"); // -> ["", "blog", "all", "dir1", "dir2", "dir3"...]
	// 通过path 获取到当前目录下的所有md - 查index.json
	console.log(path)
	let helper = (i, keySeq, json) =>
			i < keySeq.length - 1 ?
			helper(i + 1, keySeq, json[keySeq[i]]) :
			json[keySeq[i]];
		// TODO: 这个函数在访问最深层是work的，但是当dir不是最深层时，还要抵达最深层。
	let files = helper(3, path, index);
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