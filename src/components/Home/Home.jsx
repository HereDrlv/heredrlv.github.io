import React from "react";
import {
  Link
} from "react-router-dom";
import "./Home.less";

class Home extends React.Component {
    render() {
      return (
        <div className="Home">
          <h1>Ritsu Lyu</h1>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/aboutMe">ABout Me</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
          </ul>
        </div>
      );
    }
}
export default Home;