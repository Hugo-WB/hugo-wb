import React, { Component } from 'react'
import "./Project.css"
export default class ProjectCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className = {"ProjectCard "+this.props.data.size+"Project"} onClick={()=>{alert("test")}}>
                <div className = "projectImage" >
                    <img src={this.props.data.image} alt="project image" style={{opacity:0.95,width:"100%",height:"auto"}}/>
                </div>
                <div className = "projectText">
                    <p className = "projectTitle">
                        {this.props.data.title}
                    </p>
                    <p className = "projectDescription">
                        {this.props.data.description}
                    </p>
                </div>
            </div>
        )
    }
}
