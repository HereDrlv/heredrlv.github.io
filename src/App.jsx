import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import BlogHome from "./components/Blog/BlogHome/BlogHome.jsx"
import "./App.less";

function App(props) {
    return (
        <Router basename="/">
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/aboutMe">
                    <AboutMe />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;