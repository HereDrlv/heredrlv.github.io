import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Blog } from "./components/Blog/Blog.jsx";
import { AboutMe } from "./components/AboutMe/AboutMe.jsx";

import "./App.less";

export class App extends React.Component {
    render() {
        return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. 
                也就是说和顺序有关，这不是完全匹配 */}
            <Switch>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/aboutMe">
                    <AboutMe />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>)
    }
}