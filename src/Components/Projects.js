import React, {Component} from "react"
import Navbar from "./NavBar"

class Projects extends Component {

    render() {

        return (
            <div className="projects-page">

                <h1 className="page-title">Projects</h1>
            <div className="projects-div">
                <div className="project-div">
                    <h2>Concert Ready</h2>
                    <h3>Technologies used:</h3>
                        React
                        <br></br>
                        Redux
                        <br></br>
                        Ruby on Rails API
                        <br></br>
                        Setlist.fm API
                        <br></br>
                        Custom CSS 
                        <br></br>
                    <h3>Video Demo</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OTX6kVk3neg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="project-div">
                    <h2>Restaurant Journey</h2>
                    <h3>Technologies used:</h3>
                        React
                        <br></br>
                        Ruby on Rails API
                        <br></br>
                        Custom CSS 
                        <br></br>
                    <h3>Video Demo</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gJhzGkzZKLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="project-div">
                    <h2>Critter.com</h2>
                    <h3>Technologies used:</h3>
                        JavaScript
                        <br></br>
                        Ruby on Rails API
                        <br></br>
                        Custom CSS 
                        <br></br>
                    <h3>Video Demo</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9_LR8jbqsKY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            </div>
        )
    }
}

export default Projects