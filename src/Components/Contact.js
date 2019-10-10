import React, {Component} from "react"

class Contact extends Component {

    render() {

        return (

            <div className="contact-div">
                {this.props.showNavbar()}
                <h1>Contact</h1>
                <div className="contact-div">
                        <div>
                            Email:
                        </div>
                        <div>
                            Phone:
                        </div>
                        <div>
                            LinkedIn:
                        </div>
                        <div>
                            Medium:
                        </div>
                        <div>
                            Github
                        </div>
                </div>
                

            </div>
        )
    }
}

export default Contact 