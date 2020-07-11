import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js';

import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import hwb from "../../assets/HWBSVG.svg"
import "./NavBar.css"
import NameSVG from "./NameSVG.js"
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
           <div className = "topContainer">
               <div className = "header">
                    <NameSVG />
                    <div className = "socialDivs">
                       <a href="https://github.com/Hugo-WB" target="_blank">
                           <img src={github} alt="github" className = "socialLogos"/>
                       </a>
                    </div>
                    <div className = "socialDivs">
                       <a href="https://www.linkedin.com/in/hugo-wong-berard-4499b91a0/" target="_blank">
                           <img src={linkedin} alt="linkedin" className = "socialLogos"/>
                       </a>
                    </div>
               </div>
               <div className = "navBar">
                   <div>
                        <Link to="/about">
                            <p className = "links">
                                About
                            </p>  
                        </Link>
                   </div>
                   <div>
                       <Link to="/projects">
                            <p className = "links">
                                Projects
                            </p>
                       </Link>
                   </div>
                   <div>
                       <Link to = "/contact">
                            <p className = "links">
                                Contact
                            </p>
                       </Link>
                   </div>
               </div>
               {/* <div className = "columns is-vcentered is-centered" style={{borderBottom:"0.1vw black solid"}}>
                   <div className = "column is-two-thirds has-text-weight-bold">
                       <NameSVG />
                   </div>
                   <div className = "column has-text-centered">
                       <a href="https://github.com/Hugo-WB" target="_blank">
                           <img src={github} alt="github" className = "socialLogos"/>
                       </a>
                   </div>
                   <div className = "column has-text-centered">
                       <a href="https://www.linkedin.com/in/hugo-wong-berard-4499b91a0/" target="_blank">
                           <img src={linkedin} alt="github" classname = "sociallogos"/>
                       </a>
                   </div>
               </div>
               <div className = "columns is-vcentered is-centered">
                   <div class = "column is-clickable">
                        <Link to="/about">
                            <p className = "links">
                                About
                            </p>  
                        </Link>
                   </div>
                   <div class = "column is-clickable">
                       <Link to="/projects">
                            <p className = "links">
                                Projects
                            </p>
                       </Link>
                   </div>
                   <div class = "column is-clickable">
                       <Link to = "/contact">
                            <p className = "links">
                                Contact
                            </p>
                       </Link>
                   </div>
               </div> */}
           </div>
        )
    }
}
const mapStateToProps = (state) =>({
    
})
const mapDispatchToProps = (dispatch) =>({
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)