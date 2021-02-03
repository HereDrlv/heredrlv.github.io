import React, { useDebugValue } from "react";

class Preview extends React.Component {
    render() {
      return (
        <div>
          <h2>Preview</h2>
          <p>{this.props.title}</p>
          <p>summary</p>
        </div>
      );
    }
}
export default Preview;