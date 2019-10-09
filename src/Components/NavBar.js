import React, {Component} from "react"
import {NavLink} from "react-router-dom"


class NavBar extends Component {


    render() {

        return (

            <div className="navbar">
              Name 
                <div className="buttons-div">

                    <button>
                        <NavLink to="/about">About</NavLink>
                    </button>

                    <button>
                       <NavLink to="/projects">Projects</NavLink>
                    </button>

                    <button>
                        <NavLink to="/contact">Contact</NavLink>
                    </button>

                </div>
             
            </div>
        )
    }
}

export default NavBar 