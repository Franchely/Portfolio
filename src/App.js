import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom"
import NavBar from "../src/Components/NavBar"
import Projects from "../src/Components/Projects"
import Contact from "../src/Components/Contact"
import About from "../src/Components/About"
import Home from "../src/Components/Home"


class App extends Component {

  showNavbar = () => {
    if (window.location.pathname === "/") {
        return null 
    } else {
        return <NavBar></NavBar>
    }
}

  render() {

    return(
      <div className="app">
        <BrowserRouter>
            <NavBar></NavBar>
        
          <Route exact path="/" render={() => <Home showNavbar={this.showNavbar}></Home>}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
