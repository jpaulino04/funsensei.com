import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Landing from "./components/Landing";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <div className="container-fluid no-gutters p-0 m-0">
            <Switch>
              <Route exact path="/" component={Landing} /> 
            </Switch>
        </div>
        </React.Fragment>
      </Router>      
    );
  }
}

export default App;
