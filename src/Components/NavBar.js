import React, {Component} from "react"
import {NavLink} from "react-router-dom"


class NavBar extends Component {


    render() {

        return (

            <div className="navbar">
              
                <div className="buttons-div">

                   
                        <NavLink to="/" className="navbar-button">Home</NavLink>
                   
                    
                        <NavLink to="/about" className="navbar-button">About</NavLink>
                    
                    
                       <NavLink to="/projects" className="navbar-button">Projects</NavLink>
                    
                    
                        <NavLink to="/contact" className="navbar-button">Contact</NavLink>
                   

                </div>
             
            </div>
        )
    }
}

export default NavBar 