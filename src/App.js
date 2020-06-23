import React, { Component } from 'react'
import NavBar from "./Components/NavBar/NavBar"
import {connect} from 'react-redux'

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
      <div className = "background has-background-white-bis">
        <div className = "mainCard">
          <NavBar/>
          {this.choosePage()}
        </div>
      </div>
    )
    
  }
}

const mapStateToProps = (state) => ({
  currentPage : state.projects.currentPage,
})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)