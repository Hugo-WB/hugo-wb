import React, { Component } from 'react'
import "./Project.css"
export default class ProjectCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className = "ProjectCard tile is-child box has-text-left has-link-hover-shadow" onClick={()=>{alert("test")}}>
                    <div className = "container" >
                        <figure className = "image">
                            <img src={this.props.data.image} alt="project image" style={{opacity:0.95}}/>
                        </figure>
                    </div>
                    <div className = "">
                        <p className = "title has-text-left">
                            {this.props.data.title}
                        </p>
                        <p className = "subtitle has-text-left">
                            {this.props.data.description}
                        </p>
                    </div>
                </div>
        )
    }
}
