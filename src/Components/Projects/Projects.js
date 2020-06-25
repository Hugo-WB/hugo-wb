import React, { Component } from 'react'
import {connect} from 'react-redux';

import ProjectCard from "./ProjectCard.js"

import "../../App.css"
class Projects extends Component {
    constructor(props) {
        super(props)
        this.projectCards = this.projectCards.bind(this)
    }
    projectCards = () =>{
        let cards = []
        let projects = this.props.projects
        for (let i = 0; i < projects.length; i++){
            cards.push(
                <ProjectCard data = {projects[i]}/>
            )
        }
        return cards;
    }
    render() {
        return (
            <div>
                <div className = "gridContainer">
                    {this.projectCards()}
                    {/* <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/>
                    <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/>
                    <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/>
                    <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/>
                    <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/> */}
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) =>({
    projects: state.projects.projects,

})
const mapDispatchToProps = (dispatch) =>{

}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)