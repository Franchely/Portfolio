import React, {Component} from "react"
import NavBar from "./NavBar"
import {NavLink} from "react-router-dom"

class Home extends Component {

   

    render() {

        return (

            <div>
                {this.props.showNavbar()}
                <div className="home-div">
                    <div className="name">
                        Franchely <br></br>Portorreal
                    </div>
                    <div >
                        <NavLink to="/about" className="home-links">About</NavLink>
                    </div>
                    <div>
                        <NavLink to="/projects" className="home-links">Projects</NavLink>
                    </div>
                    <div>
                        <NavLink to="/contact" className="home-links">Contact</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home 