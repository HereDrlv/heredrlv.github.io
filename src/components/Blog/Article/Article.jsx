import React from 'react';
import { Converter } from "showdown";
import {
    useParams,
} from "react-router-dom";
import { default as GET } from "Util/httpGetTextSync";
import getUrlByFilename from "Util/getUrlByFilename";
import ReactMarkdown from 'react-markdown'
import "./Article.less"



const index = JSON.parse(GET('index-f.json'));
const converter = new Converter();
function Article(props) {
    let title = useParams().title;
    let url = getUrlByFilename(title, index);
    let content = GET(url);
    return (
        <article>
            <h1>{title}</h1>
            <section>
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </section>
        </article>
    );
}

export default Article;