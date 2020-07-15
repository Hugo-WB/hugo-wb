import React, { Component } from 'react'
import NavBar from "./Components/NavBar/NavBar"
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
} from "react-router-dom";

import "./App.css"
import "bulma/css/bulma.min.css"

import Projects from "./Components/Projects/Projects"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router basename = "/hugo-wb">
      <div className = "background has-background-white-bis">
        <div className = "mainCard">
          <NavBar/>
          <div className = "contentCard">
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Redirect exact from="/" to="/projects" />
            </Route>
          </Switch>
          </div>
        </div>
      </div>
      </Router>
    )
    
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)