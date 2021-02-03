import React, { Component } from 'react';
import { Converter } from "showdown";

const converter = new Converter();
class Article extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    <p>{this.props.content}</p>
                    <h2>converted:</h2>
                    {converter.makeHtml(this.props.content)}
                </div>
            </div>
        );
    }
}

export default Article;