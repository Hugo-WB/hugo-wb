import React, { Component } from 'react'
import NavBar from "./Components/NavBar/NavBar"
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css"
import "bulma/css/bulma.min.css"

import Projects from "./Components/Projects/Projects"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"

class App extends Component {
  constructor(props) {
    super(props)
    this.choosePage = this.choosePage.bind(this)
  }
  choosePage = () =>{
    switch (this.props.currentPage){
      case "About":
        return (
          <About />
      )
      case "Projects":
        console.log("projects")
        return(
          <div>
            <Projects/>
          </div>
      )
      case "Contact":
        return(
          <Contact />
      )
    }
  }
  render() {
    return (
      <Router>
      <div className = "background has-background-white-bis">
        <div className = "mainCard">
          <NavBar/>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            
            <Route path="/about">
              <p>About</p>
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
      </Router>
    )
    
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)