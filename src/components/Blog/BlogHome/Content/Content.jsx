import React from "react";
import Preview from "./Preview/Preview.jsx";
import "./Content.less";

function Content(props) {
    return (
      <div className="Content">
          <h1>Content</h1>
          <Preview title="test title1"/>
          <Preview title="test title2"/>
      </div>
    );
}
export default Content;