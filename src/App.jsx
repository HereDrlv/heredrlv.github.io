import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Blog } from "./components/Blog/Blog.jsx";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/aboutMe">
            <AboutMe />
          </Route> */}
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}