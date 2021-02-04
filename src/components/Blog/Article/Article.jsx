import React from 'react';
import { Converter } from "showdown";
import {
    useParams
} from "react-router-dom";
import {default as GET} from "Util/httpGetTextSync";

function Article(props) {
    const converter = new Converter();
    let title = useParams().title;
    let content = GET("/test.md");
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