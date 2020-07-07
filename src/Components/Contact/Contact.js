import React, { Component } from 'react'
import "./Contact.css"
export default class Contact extends Component {
    componentDidMount(props){
        anime({
            targets:".test",
        })
        }
    render() {
        return (
            <div style={{display:"flex",justifyContent: "center"}}>
                <div style={{width:"60%"}} className="columns">
                    <div className = "column">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div className ="column">
                        <p>
                            hugowong71@gmail.com
                        </p>
                    </div>
                    <br/>
                    <div className = "test" style = {{width:"100px",height:"100px",backgroundColor:"red"}}>
                        test
                    </div>
        
                </div>
            </div>
        )
    }
}
