import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/js/NavigationBar';
import Gallery from './components/js/Gallery';
import About from './components/js/About';
import Contact from './components/js/Contact';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <NavigationBar/>
          <Switch>
            <Redirect from="/portfolio/" to="/portfolio/gallery" exact/>
            <Route path="/portfolio/gallery" component={Gallery}/>
            <Route path="/portfolio/about" component={About}/>
            <Route path="/portfolio/contact" component={Contact}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
