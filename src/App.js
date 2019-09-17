import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom"
import NavBar from "../src/Components/NavBar"
import Projects from "../src/Components/Projects"
import Contact from "../src/Components/Contact"
import About from "../src/Components/About"


class App extends Component {

  render() {

    return(
      <div className="app">
        <BrowserRouter>
            <NavBar></NavBar>
        
         
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
