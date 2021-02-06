import React from 'react';
import { Converter } from "showdown";
import {
    useParams,
    useRouteMatch,
} from "react-router-dom";
import { default as GET } from "Util/httpGetTextSync";

function Article(props) {
    const converter = new Converter();
    let { path, url } = useRouteMatch();
    console.log("path:", path);
    console.log("url:", url);
    let title = useParams().title;
    let content = GET("/test.md");
    // let content = GET(title);
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <p>{content}</p>
                <h2>converted:</h2>
                {converter.makeHtml(content)}
            </div>
        </div>
    );
}

export default Article;