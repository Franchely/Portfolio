import React, {Component} from "react"
import Navbar from "./NavBar"


class About extends Component {

    render() {

        return (

            <div className="about-div">
                {this.props.showNavbar()}
                <h1 className="page-title">About</h1>
                    <div className='text'>
                       I am a Minneapolis-based full-stack developer specializing in JavaScript, Ruby, and their respective frameworks.
                       <br></br>


                    </div>
            </div>
        )
    }
}

export default About