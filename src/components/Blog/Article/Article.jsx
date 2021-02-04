import React from 'react';
import { Converter } from "showdown";
import {
    useParams
} from "react-router-dom";

function Article(props) {
    const converter = new Converter();
    let title = useParams().title;
    let content = `# Lorem ipsum dolor 
        ## sit amet consectetur 
        - adipisicing elit. `;
    console.log("props:",props);
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