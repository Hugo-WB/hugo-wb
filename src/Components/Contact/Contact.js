import React, { Component } from 'react'
import "./Contact.css"
export default class Contact extends Component {
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
                </div>
            </div>
        )
    }
}
