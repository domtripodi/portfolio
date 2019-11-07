import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/js/NavigationBar';
import Gallery from './components/js/Gallery';
import About from './components/js/About';
import Contact from './components/js/Contact';
// import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { HashRouter, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
        <NavigationBar/>
          {/* <Switch> */}
            {/* <Redirect from='/' to="/gallery"  exact/> */}
            <Route path="/gallery" component={Gallery}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          {/* </Switch> */}
        </HashRouter>
      </div>
    );
  }
}

export default App;
