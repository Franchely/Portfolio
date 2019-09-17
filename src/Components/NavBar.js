import React, {Component} from "react"


class NavBar extends Component {


    render() {

        return (

            <div className="navbar">
              Franchely Portorreal
                <div className="buttons-div">
                        <button>
                            About
                        </button>

                        <button>
                            Projects
                        </button>

                        <button>
                            Contact
                        </button>
                </div>
             
            </div>
        )
    }
}

export default NavBar 