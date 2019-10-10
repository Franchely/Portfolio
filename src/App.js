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
          <Route exact path="/" render={() => <Home showNavbar={this.showNavbar}></Home>}></Route>
          <Route path="/about" render={() => <About showNavbar={this.showNavbar}></About>}></Route>
          <Route path="/projects" render={() => <Projects showNavbar={this.showNavbar}></Projects>}></Route>
          <Route path="/contact" render={() => <Contact showNavbar={this.showNavbar}></Contact>}></Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
