import React from 'react';
import DirTree from "./DirTree/DirTree.jsx";
import "./Explorer.less";
import { default as GET } from "Util/httpGetTextSync";

const index = JSON.parse(GET("/index.json"));
function Explorer(props) {
    return (
        <div className="Explorer">
            <DirTree directoires={index}/>
        </div>
    );
}

export default Explorer;