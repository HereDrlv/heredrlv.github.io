import React, { useDebugValue } from "react";

function Preview(props) {
  return (
    <div>
      <h2>Preview</h2>
      <p>{props.title}</p>
      <p>summary</p>
    </div>
  );
}
export default Preview;