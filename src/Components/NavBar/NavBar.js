import React, { Component } from 'react';
import {connect} from 'react-redux'

import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

import "./NavBar.css"

class NavBar extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick=(action,info) =>{
        
        switch (action){
            case "switchPage":
                this.props.switchPage(info)
        }
    }
    render() {
        return(
           <div className = "navBarContainer">
               <div className = "columns is-vcentered is-centered" style={{borderBottom:"0.1vw black solid"}}>
                   <div className = "column is-two-thirds has-text-weight-bold">
                       <p style={{fontSize:"2em"}}>  
                         Hugo Wong-Berard  
                       </p>
                   </div>
                   <div className = "column has-text-centered">
                       <a href="https://www.google.com/" target="_blank">
                           <img src={github} alt="github" className = "socialLogos"/>
                       </a>
                   </div>
                   <div className = "column has-text-centered">
                       <a href="https://www.linkedin.com/" target="_blank">
                           <img src={linkedin} alt="github" className = "socialLogos"/>
                       </a>
                   </div>
               </div>
               <div className = "columns is-vcentered is-centered">
                   <div class = "column is-clickable" onClick = {()=>{this.handleClick("switchPage","About")}}>
                       <p className = "links">
                           About
                       </p>
                   </div>
                   <div class = "column is-clickable" onClick = {()=>{this.handleClick("switchPage","Projects")}}>
                       <p className = "links">
                           Projects
                       </p>
                   </div>
                   <div class = "column is-clickable" onClick = {()=>{this.handleClick("switchPage","Contact")}}>
                       <p className = "links">
                           Contact
                       </p>
                   </div>
               </div>
           </div>
        )
    }
}
const mapStateToProps = (state) =>({
    
})
const mapDispatchToProps = (dispatch) =>({
    switchPage: (page) =>{
        dispatch({type:"switchPage",page:page})
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)