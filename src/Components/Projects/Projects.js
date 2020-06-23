import React, { Component } from 'react'
import {connect} from 'react-redux';

import ProjectCard from "./ProjectCard.js"

import "../../App.css"
class Projects extends Component {
    render() {
        return (
            <div>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-parent">
                        <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/>
                        <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/>
                    </div>
                    <div className="tile is-5 is-vertical is-parent">
                        <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/>
                    </div>
                </div>
                <div className = "tile is-ancestor">
                    
                    <div className = "tile is-parent">
                        <ProjectCard data = {{"image":"https://i.imgur.com/3oJs7xB.png","title":"Q-Learning","description":"loadfadfadfadfafadfafafafdrem"}}/>
                    </div>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{

}
const mapDispatchToProps = (dispatch) =>{

}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)