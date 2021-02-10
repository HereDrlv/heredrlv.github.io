import React from 'react';
import { Converter } from "showdown";
import {
    useParams,
    useRouteMatch,
} from "react-router-dom";
import { default as GET } from "Util/httpGetTextSync";
import ReactMarkdown from 'react-markdown'
import "./Article.less"




function Article(props) {
    const converter = new Converter();
    // let { url } = useRouteMatch();
    // console.log("url:", url);
    let title = useParams().title;
    let content = GET("/test.md");
    // TODO: 查index.json, 获取URL, 然后GET markdown内容
    // let content = GET(title);
    return (
        <article>
            <h1>{title}</h1>
            <section>
                <p>{content}</p>
                <br/>
                converted:
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </section>
        </article>
    );
}

export default Article;