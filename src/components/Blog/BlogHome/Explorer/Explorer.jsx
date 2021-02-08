import React, { Component } from 'react';
import DirTree from "./DirTree/DirTree.jsx";
import "./Explorer.less";
import { default as GET } from "Util/httpGetTextSync";

const index = JSON.parse(GET("/index.json"));
// console.log(index);
function Explorer(props) {
    // TODO:
    /*
        {
            "其他技术" : {},
            "前端" : {
                "CSS" : [],
                "JS" : {
                    "原型链": ["test.md"],
                    "ES6" : []
                }
            }
        }
    */
    // 渲染成树状结构的ul。多级ul，ul下面套ul。
    // 递归吧，写个函数
    // let helper = function(json) {
    //     return 
    //     for (let dir in json)

    // }
    return (
        <div className="Explorer">
            <DirTree directoires={index}/>
        </div>
    );
}

export default Explorer;